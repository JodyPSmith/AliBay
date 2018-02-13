const assert = require("assert");
const fs = require("fs");
const bcrypt = require('bcrypt')

// Maps:
// map that keeps track of all the items a user has bought
var itemsBought = {};

// map that keeps track of all the items a user has sold
var itemsSold = {};

// map that keeps track of user information
var userMap = {};

//map that keeps track of passwords
var passMap = {};

// map that keeps track of all products
var productsMap = {};

// initialize maps from data file
try {
  console.log('Reading files...')
  itemsBought = JSON.parse(fs.readFileSync('itemsBought.txt'));
  itemsSold = JSON.parse(fs.readFileSync('itemsSold.txt'));
  userMap = JSON.parse(fs.readFileSync('userMap.txt'));
  passMap = JSON.parse(fs.readFileSync('passMap.txt'));
  productsMap = JSON.parse(fs.readFileSync('productsMap.txt'));
}
catch (err) {
  console.log('error encountered; data file probably not initialized')
  console.log(`error: ${err}`)
}

/*
Before implementing the login functionality, use this function to generate a new UID every time.
*/
function genUID() {
  return Math.floor(Math.random() * 100000000);
}

function genPID() {
  return `P${Math.floor(Math.random()*10000000)}`
}

//Sign-up/Login functions

function signUp(fname, lname, username, pwd, email, address, city, province, pcode, country) {
  if (checkUsername(username)) {
    var userID = genUID();
    var passHash = bcrypt.hash(pwd, 12);
    passMap[username] = passHash;
    userMap[userID] =
      {
        first_name: fname,
        last_name: lname,
        username: username,
        email_address: email,
        address: address,
        city: city,
        province: province,
        postal_code: pcode,
        country: country
      }
      itemsBought[userID] = [];
      itemsSold[userID] = [];
      fs.writeFileSync('itemsBought.txt', JSON.stringify(itemsBought));
      fs.writeFileSync('itemsSold.txt', JSON.stringify(itemsSold));
      fs.writeFileSync('userMap.txt', JSON.stringify(userMap));
      fs.writeFileSync('passMap.txt', JSON.stringify(passMap));
    console.log(`${userID} user created`)
    return true;
  } else {
    return false;
  }

}

function login(username, password) {
  if (password !== undefined && bcrypt.compareSync(password, passMap[username])) {
    return true;
  } else {
    return false;
  }
}

function checkUsername(username) {
  if (passMap[username] === undefined) {
    return true;
  } else {
    return false;
  }
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
function createListing(title, sellerID, price, desc) {
  var pID = genPID();
  productsMap[pID] = {
    title: title,
    sellerID: sellerID,
    price: price,
    description: desc,
    isSold: false
  };
  fs.writeFileSync('productsMap.txt', JSON.stringify(productsMap));
  return pID;
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
function buy(buyerID, sellerID, listingID) {
  itemsBought[buyerID].push(listingID);
  itemsSold[sellerID].push(listingID);
  productsMap[listingID].isSold = true;
  
  fs.writeFileSync('itemsBought.txt', JSON.stringify(itemsBought))
  fs.writeFileSync('itemsSold.txt', JSON.stringify(itemsSold))
  fs.writeFileSync('productsMap.txt', JSON.stringify(productsMap))
}

//Search/return functions

/*
allItemsBought returns the IDs of all the items bought by a buyer
    parameter: [buyerID] The ID of the buyer
    returns: an array of listing IDs
*/
function allItemsBought(buyerID) {
  return itemsBought[buyerID];
}

/* 
allItemsSold returns the IDs of all the items sold by a seller
    parameter: [sellerID] The ID of the seller
    returns: an array of listing IDs
*/
function allItemsSold(sellerID) {
  return itemsSold[sellerID];
}

/*
allListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by allListings
    returns: an array of listing IDs
*/
function allListings() {
  let productIds = Object.keys(productsMap); // array of all productIds in map
  return productIds.filter(x => !productsMap[x].isSold); // return new array with all products where isSold == true
}

/* 
getItemDescription returns the description of a listing
    parameter: [listingID] The ID of the listing
    returns: An object containing the price and description properties.
*/
function getItemDescription(listingID) {
  var itemDesc = {
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
      productsMap[x].description.toLowerCase().includes(searchTerm.toLowerCase()) ||
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
  passMap,
  genUID,
  genPID,
  signUp,
  login,
  checkUsername,
  createListing,
  buy,
  allItemsBought,
  allItemsSold,
  allListings,
  getItemDescription,
  searchForListings
  // Add all the other functions that need to be exported
};
