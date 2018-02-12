const alibay = require('./alibay')
var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', (req, res) => {
    var x = alibay.genUID();
    res.send(""+ x)
})

app.get('/itemsBought', (req, res) => {
    let uid = req.query.uid;
    res.send(JSON.stringify(alibay.getItemsBought(uid)));
});


app.post('data', (req, res) => {

})

app.listen(4000, () => {
    console.log('Listening on port 4000')
})