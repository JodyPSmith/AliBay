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
  itemsBought = JSON.parse(fs.readFileSync('./Database Files/itemsBought.txt'));
  itemsSold = JSON.parse(fs.readFileSync('./Database Files/itemsSold.txt'));
  userMap = JSON.parse(fs.readFileSync('./Database Files/userMap.txt'));
  passMap = JSON.parse(fs.readFileSync('./Database Files/passMap.txt'));
  productsMap = JSON.parse(fs.readFileSync('./Database Files/productsMap.txt'));
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

function signUp(fname, lname, usr, pwd, email, address, city, province, pcode, country) {
  if (checkUsername(usr)) {
    var userID = genUID();
    var passHash = bcrypt.hash(pwd, 12);
    passMap[usr] = passHash;
    userMap[userID] =
      {
        first_name: fname,
        last_name: lname,
        username: usr,
        email_address: email,
        address: address,
        city: city,
        province: province,
        postal_code: pcode,
        country: country
      }
      fs.writeFileSync('./Database Files/userMap.txt', JSON.stringify(userMap));
      fs.writeFileSync('./Database Files/passMap.txt', JSON.stringify(passMap));
    console.log(`${userID} user created`)
    return true;
  } else {
    return false;
  }

}

/*don't think we need this anymore because of signup:
--------------------------------------------------------------------------------
function getItemsBought(userID) {
  var ret = itemsBought[userID];
  if (ret == undefined) {
    return null;
  }
  return ret;
}

function putItemsBought(userID, value) {
  itemsBought[userID] = value;
  itemsSold[userID] = value;
  //write to file
}

initializeUserIfNeeded adds the UID to our database unless it's already there
parameter: [uid] the UID of the user.
returns: undefined

function initializeUserIfNeeded(uid) {
  var items = getItemsBought[uid];
  if (items == undefined) {
    putItemsBought(uid, []);
  }
}
--------------------------------------------------------------------------------
*/

/*
allItemsBought returns the IDs of all the items bought by a buyer
    parameter: [buyerID] The ID of the buyer
    returns: an array of listing IDs
*/
function allItemsBought(buyerID) {
  return itemsBought[buyerID];
}

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
  fs.writeFileSync('./Database Files/productsMap.txt', JSON.stringify(productsMap));
  return pID;
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

function signUp(fname, lname, usr, pwd, email, address, city, province, pcode, country) {
  if (checkUsername(usr)) {
    var userID = genUID();
    console.log(pwd)
    var passHash = bcrypt.hashSync(pwd, 12);
    passMap[usr] = passHash;
    userMap[userID] =
      {
        first_name: fname,
        last_name: lname,
        username: usr,
        email_address: email,
        address: address,
        city: city,
        province: province,
        postal_code: pcode,
        country: country
      }
      console.log(passMap[usr])
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
  
  fs.writeFileSync('./Database Files/itemsBought.txt', JSON.stringify(itemsBought))
  fs.writeFileSync('./Database Files/itemsSold.txt', JSON.stringify(itemsSold))
  fs.writeFileSync('./Database Files/productsMap.txt', JSON.stringify(productsMap))
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
  genUID, // This is just a shorthand. It's the same as genUID: genUID.
  genPID,
  createListing,
  buy,
  allItemsSold,
  getItemDescription,
  allItemsBought,
  allListings,
  searchForListings,
  signUp
  // Add all the other functions that need to be exported
};
