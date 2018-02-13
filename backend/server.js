const alibay = require('./alibay');
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const app = express();

var cookieMap = {};

try {cookieMap = fs.readFileSync('cookieMap.txt')}
catch(err) {console.log('cookieMap.txt not found')}

var generateCookie = () => {
    let sessionID = Math.floor(Math.random()*10000);
    if (cookieMap[sessionID]) {return generateCookie()} //if sessionID exists, re-generate sessionID
    else return sessionID;
}

app.use(bodyParser.raw({ type: '*/*' }))

//should change this
app.get('/', (req, res) => { // returns a userID as string
    var x = alibay.genUID();
    res.send("" + x)
})

app.post('/login', (req, res) => { // takes object with username & password, attempts to match with database
    let payload = JSON.parse(req.body.toString());
    let username = payload.username;
    let password = payload.password;
    if (alibay.login(username, password)) {
        let sessionID = generateCookie();
        cookieMap[sessionID] = alibay.getUserID(username);
        fs.writeFileSync('cookieMap.txt', JSON.stringify(cookieMap));
        res.set('Set-Cookie', "sessionID="+sessionID);
        res.send(JSON.stringify({res: true, sessionID: sessionID})); //if successful, will send JSON object with sessionID
    }
    else {
        res.send(JSON.stringify({res: false})) //if failed login, send JSON object with sessionID false
    }
})

app.get('/itemsBought', (req, res) => { // takes userID in query, returns array of all items bought buy the user
    let uid = req.query.uid;
    res.send(JSON.stringify(alibay.getItemsBought(uid)));
});

app.post('/createListing', (req, res) => { // takes a JSON object in body, with title, sellerID, price, desc, and returns productID string
    let request = JSON.parse(req.body);
    console.log(JSON.parse(req.body))
    let title = request.title;
    let sellerID = request.sellerID;
    let price = request.price;
    let desc = request.description;
    res.send('your product ID is: ' + alibay.createListing(title, sellerID, price, desc));
})

app.post('/buy', (req, res) => { // takes a JSON object in body, with buyerID, sellerID, listingID ***Returns UNDEFINED***
    let request = JSON.parse(req.body.toString());
    let buyerID = request.buyerID;
    let sellerID = request.sellerID;
    let listingID = request.listingID;
    alibay.buy(buyerID, sellerID, listingID);
    res.send('success')
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

app.post('/signUp', (req, res) => {
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

    if (alibay.signUp(fname, lname, usr, pwd, email, address, city, province, postal_code, country)) {
        res.send('signup success');
    } else {
        res.send('signup failed')
    }
})

app.post('/itemsSold', (req, res) => { // takes single string in body, returns arrray of listing IDs
    res.send(JSON.stringify(alibay.allItemsSold(req.body.toString())));
})

//Special function used to parse the inputted Cookies
var parseCookies = (str) => {
    let asArray = str.split('; ').map(x => x.split('='));
    let ret = {};
    asArray.forEach(lst => ret[lst[0]] = lst[1])
    return ret;
}

app.listen(4000, () => {
    console.log('Listening on port 4000')
})
