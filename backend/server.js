const alibay = require('./alibay')
const bodyParser = require('body-parser')
var express = require('express');
var app = express();

app.use(bodyParser.raw({ type: '*/*' }))

app.get('/', (req, res) => {
    var x = alibay.genUID();
    res.send("" + x)
})

app.get('/itemsBought', (req, res) => {
    let uid = req.query.uid;
    res.send(JSON.stringify(alibay.getItemsBought(uid)));
});

app.post('/createListing', (req, res) => {
    let request = JSON.parse(req.body.toString());
    let sellerID = request.sellerID;
    let price = request.price;
    let desc = request.description;
    alibay.createListing(sellerID, price, desc);
    res.send('success');
})

app.post('/buy', (req, res) => {
    let request = JSON.parse(req.body.toString());
    let buyerID = request.buyerID;
    let sellerID = request.sellerID;
    let listingID = request.listingID;
    alibay.buy(buyerID, sellerID, listingID);
    res.send('success')

})

app.get('/allListings', (req, res) => {
    res.send(JSON.stringify(alibay.allListings()));
})

app.post('/search', (req, res) => {
    let request = JSON.parse(req.body.toString());
    let searchTerm = request.searchTerm;
    let results = alibay.searchForListings(searchTerm);
    if (results === []) {
        res.send('fail')
    } else {
        res.send('success')
    }
})
app.get('/itemDescription', (req, res) => { // Returns object with price and blurb
    let item = req.query.item;
    let description = alibay.getItemDescription(item);
    res.send(JSON.stringify(description))
})

app.post('/itemsSold', (req,res) => { // takes single string in body, returns arrray of listing IDs
    res.send(JSON.stringify(alibay.allItemsSold(req.body.toString())));
})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})
