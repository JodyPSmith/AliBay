const assert = require("assert");
const fs = require("fs");
const bcrypt = require("bcrypt");
const mysql = require("promise-mysql");
var con = null;
mysql
  .createConnection({
    host: "165.227.39.184",
    user: "vako",
    password: "12345",
    database: "alibay"
  })
  .then(x => {
    con = x;
  });

// Maps:
// map that keeps track of all the items a user has bought
let itemsBought = {};

// map that keeps track of all the items a user has sold
let itemsSold = {};

// map that keeps track of user information
let userMap = {
  test: {
    first_name: "fname",
    last_name: "lname",
    username: "username",
    email_address: "email",
    address: "address",
    city: "city",
    province: "province",
    postal_code: "pcode",
    country: "country"
  }
};

//map that keeps track of images by listing
let imgMap = {};

// map that keeps track of all products
let productsMap = {};

// initialize maps from data file
try {
  console.log("Reading files...");
  itemsBought = JSON.parse(fs.readFileSync("./datafiles/itemsBought.txt"));
  itemsSold = JSON.parse(fs.readFileSync("./datafiles/itemsSold.txt"));
  userMap = JSON.parse(fs.readFileSync("./datafiles/userMap.txt"));
  // passMap = JSON.parse(fs.readFileSync('./datafiles/passMap.txt'));
  productsMap = JSON.parse(fs.readFileSync("./datafiles/productsMap.txt"));
} catch (err) {
  console.log("error encountered; data file probably not initialized:");
  console.log(`${err}`);
}

/*
Before implementing the login functionality, use this function to generate a new UID every time.
*/
function genUID() {
  return Math.floor(Math.random() * 100000000);
}

function genPID() {
  return `P${Math.floor(Math.random() * 10000000)}`;
}

//Sign-up/Login functions

async function signUp(
  fname,
  lname,
  username,
  pwd,
  email,
  address,
  city,
  province,
  pcode,
  country
) {
  if (await checkUsername(username)) {
    let passHash = bcrypt.hashSync(pwd, 12);
    let userInfo = {
      first_name: fname,
      last_name: lname,
      username: username,
      password: passHash,
      email: email,
      address: address,
      city: city,
      province: province,
      postal_code: pcode,
      country: country
    };
    // itemsBought[userID] = [];
    // itemsSold[userID] = [];
    con.query("INSERT INTO users SET ?", userInfo, (err, rows) => {
      if (err) throw err;
      console.log("Data inserted into Db:\n");
      console.log(rows);
    });
    // fs.writeFileSync("././datafiles/itemsBought.txt", JSON.stringify(itemsBought));
    // fs.writeFileSync("././datafiles/itemsSold.txt", JSON.stringify(itemsSold));
    // fs.writeFileSync("././datafiles/userMap.txt", JSON.stringify(userMap));
    // fs.writeFileSync("././datafiles/passMap.txt", JSON.stringify(passMap));
    console.log(`user created`);
    return true;
  } else {
    console.log("check username failed");
    return false;
  }
}

async function login(username, password) {
  var result = await con.query(
    "SELECT id, password FROM users WHERE username = ?",
    [username]
  );
  console.log(">>> LOGIN RESULT >> ", result[0].password);
  if (result[0] !== undefined) {
    var bool = bcrypt.compareSync(password, result[0].password);
    return { id: result[0].id, result: bool };
  } else {
    return false;
  }
}

async function checkUsername(username) {
  var result = await con.query(
    "SELECT username FROM users WHERE username = ?",
    [username]
  );
  console.log(`result :`, result);
  if (!result[0]) {
    return true;
  } else {
    return false;
  }
}

function getUserID(username) {
  //takes username and searches all userIDs for a matching username, then returns userID
  let allUserIDs = Object.keys(userMap);
  let ret;
  allUserIDs.forEach(x => {
    if (username == userMap[x].username) {
      ret = x;
    }
  });
  return ret;
}

//Functions that write to file

/* 
createListing adds a new listing to our global state.
This function is incomplete. You need to complete it.
    parameters: 
      [sellerID] The ID of the seller
      [price] The price of the item
      [desc] A desc describing the item
    returns: The ID of the new listing
*/
async function createListing(sellerID, title, price, desc, images, location) {
  let productMap = {
    title: title,
    description: desc,
    price: price,
    seller_id: sellerID
  };

  con.query("INSERT INTO listing SET ?", productMap, (err, rows) => {
    if (err) throw err;
    console.log("Data received from Db:\n");
    console.log(rows);
  });
  
  var query = `SELECT listing_id FROM listing WHERE seller_id = ${sellerID} AND title = "${title}"`

  let listingID = await con.query(query)
  console.log('listingID:', listingID[0].listing_id)

  if (imgMap[listingID[0].listing_id]) imgMap[listingID[0].listing_id] = imgMap[listingID[0].listing_id].concat(images);
  else imgMap[listingID[0].listing_id] = images;

  console.log(`imgMap[${listingID[0].listing_id}]: ${imgMap[listingID[0].listing_id]}`);

  fs.writeFileSync('./datafiles/imgMap.txt', JSON.stringify(imgMap));
  fs.writeFileSync("./datafiles/productsMap.txt", JSON.stringify(productsMap));
}

/* 
buy changes the global state.
Another buyer will not be able to purchase that listing
The listing will no longer appear in search results
The buyer will see the listing in his history of purchases
The seller will see the listing in his history of items sold
    parameters: 
     [buyerID] The ID of buyer
     [sellerID] The ID of seller
     [listingID] The ID of listing
    returns: undefined
*/
function buy(userID, listingID) {
  con.query(
    "UPDATE listing SET buyer_id ?",
    [userID],
    "WHERE listing_id = ?",
    [listingID],
    (err, rows) => {
      if (err) throw err;
      console.log("Data received from Db:\n");
      console.log(rows);
    }
  );

  //fs.writeFileSync("././datafiles/itemsBought.txt", JSON.stringify(itemsBought));
  //fs.writeFileSync("././datafiles/itemsSold.txt", JSON.stringify(itemsSold));
  //fs.writeFileSync("././datafiles/productsMap.txt", JSON.stringify(productsMap));
}

//Search/return functions

/*
allItemsBought returns the IDs of all the items bought by a buyer
    parameter: [buyerID] The ID of the buyer
    returns: an array of listing IDs
*/
async function allItemsBought(buyerID) {
  var result = await con.query("SELECT * FROM listing WHERE buyer_id = ?", [buyerID]);
  console.log(">>> Items bought by user >>>", result);
  return result;
}
/* 
allItemsSold returns the IDs of all the items sold by a seller
    parameter: [sellerID] The ID of the seller
    returns: an array of listing IDs
*/
async function allItemsSold(sellerID) {
  var listing_id = [];
  var result = await con.query("SELECT * FROM listing WHERE seller_id = ?", [
    sellerID
  ]);
  console.log(">>>", result);
  return result;
}
// return items that the user is currently selling.
async function allItemsSelling(sellerID) {
  let query = `SELECT * FROM listing WHERE seller_id = ${sellerID} AND buyer_id IS NULL`
  var result = await con.query(query);
  console.log(">>>", result);
  return result;
}
/*
allListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by allListings
    returns: an array of listing IDs
*/
async function allListings() {
  // let productIds = Object.keys(productsMap); // array of all productIds in map
  // return productIds.filter(x => !productsMap[x].isSold); // return new array with all products where isSold == true
  var result = await con.query("SELECT * FROM listing WHERE buyer_id IS NULL");
  return result;
}

/* 
getItemDescription returns the description of a listing
    parameter: [listingID] The ID of the listing
    returns: An object containing the price and description properties.
*/
function getItemDescription(listingID) {
  let itemDesc = {
    description: productsMap[listingID].description,
    price: productsMap[listingID].price
  };
  return itemDesc;
}

/*
searchForListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by searchForListings
    parameter: [searchTerm] The search string matching listing descriptions
    returns: an array of listing IDs
*/
function searchForListings(searchTerm) {
  let allItems = allListings();
  let results = allItems.filter(x => {
    return (
      productsMap[x].description
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      productsMap[x].title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
  return results;
}

module.exports = {
  itemsBought,
  itemsSold,
  productsMap,
  userMap,
  imgMap,
  genUID,
  genPID,
  signUp,
  login,
  checkUsername,
  getUserID,
  createListing,
  buy,
  allItemsBought,
  allItemsSelling,
  allItemsSold,
  allListings,
  getItemDescription,
  searchForListings
  // Add all the other functions that need to be exported
};
