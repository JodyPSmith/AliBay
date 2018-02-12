var express = require('express');
var app = express();
var fs = require('fs');

app.get('/', (req, res) => {
    res.send('hello, server is working')
})

app.post('data', (req, res) => {

})

app.listen(3000, () => {
    console.log('server started on http://jodysmith.ca:3000')
})