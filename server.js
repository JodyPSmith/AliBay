var express = require('express');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
var assert = require('assert');
var Sifter = require('sifter');

var MongoClient = require('mongodb').MongoClient;
var url = 'mongodb://localhost:27017';
var dbName = 'Alibay';

app.use(bodyParser.raw({ type: '*/*' }));

const insertDocuments = function (db, callback) {
    // Get the documents collection
    const collection = db.collection('items');
    // Insert some documents
    collection.insertMany([
        { a: 1 }, { a: 2 }, { a: 3 }
    ], function (err, result) {
        assert.equal(err, null);
        assert.equal(3, result.result.n);
        assert.equal(3, result.ops.length);
        console.log("Inserted 3 documents into the collection");
        callback(result);
    });
}
// This is the code to call to insert somethign into the DB
// MongoClient.connect(url, (err, client) => {
//     assert.equal(null, err);
//     console.log("Connected successfully to server");

//     const db = client.db(dbName);

//     insertDocuments(db, function () {
//         client.close();
//     });
// })

try {
    var itemsMap = JSON.parse(fs.readFileSync('FakeData/itemsForSale.json'))
} catch (err) {
    var itemsMap = { 1: "awesome toy" }
    console.log(err);
}

var itemsForSale = new Sifter(itemsMap);


// sorting function
sortedItems = (result) => {
    let sortedArray = [];
    for (var i = 0; i < result.items.length; i++) {
        sortedArray.push(itemsMap[result.items[i].id])
    }
    var answer = JSON.stringify(sortedArray);
    return answer
}





// server below this line
// app.get('/', (req, res) => {
//     res.send(JSON.stringify(itemsMap))
// })

app.get('/', (req, res) => {

})

app.post('/search', (req, res) => {
    var item = JSON.parse(req.body);

    var result = itemsForSale.search(item.searchItem, {
        fields: ['title', 'desc'],
        sort: [{ field: 'title', direction: 'asc' }],
        limit: item.numItems
    });

    res.send(sortedItems(result));

})

app.listen(3000, () => {
    console.log('server started on http://localhost:3000')
})

