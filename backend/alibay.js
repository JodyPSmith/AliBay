const assert = require("assert");
const fs = require("fs");
const bcrypt = require("bcrypt");

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

//map that keeps track of passwords
let passMap = {};

// map that keeps track of all products
let productsMap = {};

// initialize maps from data file
try {
  console.log('Reading files...')
  itemsBought = JSON.parse(fs.readFileSync('./datafiles/itemsBought.txt'));
  itemsSold = JSON.parse(fs.readFileSync('./datafiles/itemsSold.txt'));
  userMap = JSON.parse(fs.readFileSync('./datafiles/userMap.txt'));
  passMap = JSON.parse(fs.readFileSync('./datafiles/passMap.txt'));
  productsMap = JSON.parse(fs.readFileSync('./datafiles/productsMap.txt'));
}
catch (err) {
  console.log('error encountered; data file probably not initialized:')
  console.log(`${err}`)
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

function signUp(
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
  if (checkUsername(username)) {
    let userID = genUID();
    let passHash = bcrypt.hashSync(pwd, 12);
    passMap[username] = passHash;
    userMap[userID] = {
      first_name: fname,
      last_name: lname,
      username: username,
      email_address: email,
      address: address,
      city: city,
      province: province,
      postal_code: pcode,
      country: country
    };
    itemsBought[userID] = [];
    itemsSold[userID] = [];
    fs.writeFileSync("././datafiles/itemsBought.txt", JSON.stringify(itemsBought));
    fs.writeFileSync("././datafiles/itemsSold.txt", JSON.stringify(itemsSold));
    fs.writeFileSync("././datafiles/userMap.txt", JSON.stringify(userMap));
    fs.writeFileSync("././datafiles/passMap.txt", JSON.stringify(passMap));
    console.log(`${userID} user created`);
    return true;
  } else {
    console.log('check username failed')
    return false;
  }
}

function login(username, password) {
  try{ return bcrypt.compareSync(password, passMap[username])}
  catch(err) {
    console.log('error: username or password does not exist', err)
    return false
  }
}

function checkUsername(username) {
  if (!passMap[username]) {
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
    if (username == userMap[x].username) {ret = x;}
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
function createListing(title, sellerID, price, desc) {
  let pID = genPID();
  productsMap[pID] = {
    title: title,
    sellerID: sellerID,
    price: price,
    description: desc,
    isSold: false
  };
  fs.writeFileSync("././datafiles/productsMap.txt", JSON.stringify(productsMap));
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

  fs.writeFileSync("././datafiles/itemsBought.txt", JSON.stringify(itemsBought));
  fs.writeFileSync("././datafiles/itemsSold.txt", JSON.stringify(itemsSold));
  fs.writeFileSync("././datafiles/productsMap.txt", JSON.stringify(productsMap));
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
  passMap,
  genUID,
  genPID,
  signUp,
  login,
  checkUsername,
  getUserID,
  createListing,
  buy,
  allItemsBought,
  allItemsSold,
  allListings,
  getItemDescription,
  searchForListings
  // Add all the other functions that need to be exported
};
