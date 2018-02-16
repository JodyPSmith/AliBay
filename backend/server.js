const alibay = require('./alibay');
const bodyParser = require('body-parser');
const fs = require('fs');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const busboy = require('connect-busboy');

app.use(cookieParser());

app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(busboy());

app.use(express.static('datafiles/tempImages'));

var cookieMap = {};

try {
    cookieMap = JSON.parse(fs.readFileSync('./datafiles/cookieMap.txt'));
} catch (err) {
    console.log('cookieMap.txt not found');
}

const generateCookie = () => {
    let sessionID = 's' + Math.floor(Math.random() * 100000);
    if (cookieMap[sessionID]) {
        return generateCookie();
    } else return sessionID; //if sessionID exists, re-generate sessionID
};

app.get('/getImage', async (req, res) => {
    let sessionID = req.cookies.sessionID;
    let userID = cookieMap[sessionID];
    let result = await alibay.allItemsSelling(userID);
    console.log('result: ', result);
    res.send({ res: 'ok' });
});



//signup / login endpoints----------------------------------------------------------------------------------------

//check for signIn status
app.get('/check', (req, res) => {
    console.log('tes');
    const sessionID = req.cookies.sessionID;
    if (cookieMap[sessionID]) res.send({ res: true });
    else res.send({ res: false });
});

app.post('/signUp', async (req, res) => {
    let request = req.body;
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

    if (
        await alibay.signUp(
            fname,
            lname,
            usr,
            pwd,
            email,
            address,
            city,
            province,
            postal_code,
            country
        )
    ) {
        res.send('signup success');
    } else {
        res.send('signup failed');
    }
});
app.post('/login', async (req, res) => {
    // takes object with username & password, attempts to match with database
    let payload = req.body;
    let username = payload.username;
    let password = payload.password;
    var test = await alibay.login(username, password);
    if (test.result) {
        let sessionID = generateCookie();
        cookieMap[sessionID] = test.id;
        fs.writeFileSync(
            __dirname + '/datafiles/cookieMap.txt',
            JSON.stringify(cookieMap)
        );
        res.set('Set-Cookie', 'sessionID=' + sessionID);
        res.send({ res: true, sessionID: sessionID }); //if successful, will send JSON object with sessionID
    } else {
        res.send({ res: false }); //if failed login, send JSON object with sessionID false
    }
});

//user actions that affect product/inventory-----------------------------------------------------------------------

app.post('/buy', (req, res) => {
    // takes a JSON object in body, with sellerID, listingID returns object with res:true
    let sessionID = req.cookies.sessionID;
    let sellerID = cookieMap[sessionID];

    let request = req.body;
    let buyerID = request.buyerID;
    let listingID = request.listingID;
    alibay.buy(buyerID, sellerID, listingID);
    res.send(JSON.stringify({ res: true }));
});

app.post('/createListing', (req, res) => {
    // takes a JSON object in body, with title, image(s), price, desc, and returns productID string
    let sessionID = req.cookies.sessionID;
    let sellerID = cookieMap[sessionID];

    let request = req.body;

    let title = request.title;
    let price = request.price;
    let desc = request.description;
    let imageArr = request.images;
    let loc = request.location;

    alibay.createListing(sellerID, title, price, desc, imageArr, loc);

    res.send({ res: 'product created' });
});

// itemInfo that takes sessionID ---------------------------------------------------------------------

app.get('/itemsIBought', async (req, res) => {
    // takes cookie, returns array of all items bought buy the user
    let sessionID = req.cookies.sessionID;
    let userID = cookieMap[sessionID];
    // console.log(`sessionID=${sessionID}, userID=${userID}`)
    console.log("user id is ", userID)
    console.log(await alibay.allItemsBought(userID));
    res.send(await alibay.allItemsBought(userID));
});

app.post('/itemsSold', async (req, res) => {
    // takes single string in body, returns arrray of listing IDs
    var payload = JSON.parse(req.body.toString());
    console.log('>>>>>>>', payload.seller_id);
    var ok = await alibay.allItemsSold(payload.seller_id);
    console.log(ok);
    res.send(ok);
});

app.post('/itemsSelling', async (req, res) => {
    // takes single string in body, returns arrray of listing IDs
    var payload = JSON.parse(req.body.toString());
    console.log('>>>>>>>', payload.seller_id);
    var ok = await alibay.allitemsSelling(payload.seller_id);
    console.log(ok);
    res.send(ok);
});

app.get('/itemDescription', (req, res) => {
    // Returns object with price and blurb
    let item = req.query.item;
    let description = alibay.getItemDescription(item);
    res.send(description);
});

// search functions-----------------------------------------------------------------------------------

app.get('/allListings', (req, res) => {
    // returns an array with all listings where isSold === true
    res.send(alibay.allListings());
});

app.post('/search', (req, res) => {
    // returns new array where description includes search term ***To be optimized later***
    let request = req.body.toString();
    let searchTerm = request.searchTerm;
    let results = alibay.searchForListings(searchTerm);
    res.send(results); // return the array (could be empty) to be processed in front-end
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});

// image filewriting

app.post('/imgUpload', (req, res) => {
    var fstream;
    var filenames = [];
    req.pipe(req.busboy);
    req.busboy.on('file', (fieldname, file, filename) => {
        filename = 'img' + Math.floor(Math.random() * 10000000);
        console.log('Uploading: ' + filename);
        fstream = fs.createWriteStream(
            __dirname + '/datafiles/tempImages/' + filename
        );
        filenames.push(filename);
        file.pipe(fstream);
        fstream.on('error', err => {
            console.log('error', err);
            res.status(500).send({ res: 'error' });
        });
    });
    req.busboy.on('finish', () =>
        res.send({
            res: 'successful',
            images: filenames
        })
    );
});
