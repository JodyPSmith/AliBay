const alibay = require('./alibay');
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

app.use(cookieParser());
app.use(bodyParser.raw({ type: '*/*', limit: '50mb'}))

var cookieMap = {};

try {cookieMap = JSON.parse(fs.readFileSync('./datafiles/cookieMap.txt'))}
catch(err) {console.log('cookieMap.txt not found')}

var generateCookie = () => {
    let sessionID = 's'+Math.floor(Math.random()*100000);
    if (cookieMap[sessionID]) {return generateCookie()} //if sessionID exists, re-generate sessionID
    else return sessionID;
}

app.post('/login', async (req, res) => { // takes object with username & password, attempts to match with database
    let payload = JSON.parse(req.body);
    let username = payload.username;
    let password = payload.password;
    var test = await alibay.login(username, password)
    if (test.result) {
        let sessionID = generateCookie();
        console.log('test id', test.id)
        cookieMap[sessionID] = test.id;
        fs.writeFileSync(__dirname+'/datafiles/cookieMap.txt', JSON.stringify(cookieMap));
        res.set('Set-Cookie', "sessionID=" + sessionID);
        res.send(JSON.stringify({ res: true, sessionID: sessionID })); //if successful, will send JSON object with sessionID
    }
    else {
        res.send(JSON.stringify({ res: false })) //if failed login, send JSON object with sessionID false
    }
})

app.get('/itemsBought', (req, res) => { // takes cookie, returns array of all items bought buy the user
    let sessionID = req.cookies.sessionID
    let userID = cookieMap[sessionID];
    // console.log(`sessionID=${sessionID}, userID=${userID}`)
    res.send(JSON.stringify(alibay.getItemsBought(userID)));
});

app.post('/createListing', (req, res) => { // takes a JSON object in body, with title, image(s), price, desc, and returns productID string
    let sessionID = req.cookies.sessionID
    let sellerID = cookieMap[sessionID];

    let request = JSON.parse(req.body);
    console.log('request', request)

    // var image1 = request.images[0].preview
    let title = request.title;
    let price = request.price;
    let desc = request.description;
    res.send('your product ID is: ' + alibay.createListing(title, sellerID, price, desc));
})

app.post('/buy', (req, res) => { // takes a JSON object in body, with sellerID, listingID returns object with res:true
    let sessionID = req.cookies.sessionID
    let sellerID = cookieMap[sessionID];

    let request = JSON.parse(req.body.toString());
    let buyerID = request.buyerID;
    let listingID = request.listingID;
    alibay.buy(buyerID, sellerID, listingID);
    res.send(JSON.stringify({res: true}))
})

app.get('/allListings', (req, res) => { // returns an array with all listings where isSold === true
    res.send(JSON.stringify(alibay.allListings()));
})

app.post('/search', (req, res) => { // returns new array where description includes search term ***To be optimized later***
    let request = JSON.parse(req.body.toString());
    let searchTerm = request.searchTerm;
    let results = alibay.searchForListings(searchTerm);
    res.send(JSON.stringify(results)) // return the array (could be empty) to be processed in front-end
})

app.get('/itemDescription', (req, res) => { // Returns object with price and blurb
    let item = req.query.item;
    let description = alibay.getItemDescription(item);
    res.send(JSON.stringify(description))
})

app.post('/signUp', async (req, res) => {
    let request = JSON.parse(req.body.toString());
    let fname = request.firstname;
    let lname = request.lastname;
    let usr = request.username;
    let pwd = request.password;
    let email = request.email;
    let address = request.address;
    let city = request.city;
    let province = request.province;
    let postal_code = request.postal_code;
    let country = request.country;

    if (await alibay.signUp(fname, lname, usr, pwd, email, address, city, province, postal_code, country)) {
        res.send('signup success');
    } else {
        res.send('signup failed')
    }
})

app.post('/itemsSold', async (req, res) => { // takes single string in body, returns arrray of listing IDs
    var payload = JSON.parse(req.body.toString())
    console.log(">>>>>>>", payload.seller_id)
    var ok = await alibay.allItemsSold(payload.seller_id);
    console.log(ok)
    res.send(JSON.stringify(ok));
})


app.listen(4000, () => {
    console.log('Listening on port 4000')
})
