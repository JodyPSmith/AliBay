const assert = require('assert');
const fs = require('fs');



var itemsBought = {
    '8589344': [{ purchaseID: 25645015, seller: 89809829 }],
    '89809829': []
}; // map that keeps track of all the items a user has bought
var itemsSold = {}; // map that keeps track of all the items a user has sold
var userMap = {}; // map that keeps track of user information
var productsMap = {}; // map that keeps track of all products
/*
Before implementing the login functionality, use this function to generate a new UID every time.
*/
function genUID() {
    return Math.floor(Math.random() * 100000000);
}

function putItemsBought(userID, value) {
    itemsBought[userID] = value;
    itemsSold[userID] = value;
}

function getItemsBought(userID) {
    var ret = itemsBought[userID];
    if (ret == undefined) {
        return null;
    }
    return ret;
}


/*
initializeUserIfNeeded adds the UID to our database unless it's already there
parameter: [uid] the UID of the user.
returns: undefined
*/
function initializeUserIfNeeded(uid) {
    var items = getItemsBought[uid];
    if (items == undefined) {
        putItemsBought(uid, []);
    }
}

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
      [blurb] A blurb describing the item
    returns: The ID of the new listing
*/
function createListing(sellerID, price, blurb) {
    var pID = genUID();
    productsMap[pID] = { sellerID: sellerID, price: price, description: blurb, isSold: false };
    // console.log(`listing created: ${pID}`)
    return pID;
}

/* 
getItemDescription returns the description of a listing
    parameter: [listingID] The ID of the listing
    returns: An object containing the price and blurb properties.
*/
function getItemDescription(listingID) {
    var obj = { description: productsMap[listingID].description, price: productsMap[listingID].price }
    return obj;
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
    return productIds.filter(x => !productsMap[x].isSold) // for each, check if isSold, then push
}

/*
searchForListings returns the IDs of all the listings currently on the market
Once an item is sold, it will not be returned by searchForListings
    parameter: [searchTerm] The search string matching listing descriptions
    returns: an array of listing IDs
*/
function searchForListings(searchTerm) {
    let allItems = allListings();
    let results = allItems.filter(x => productsMap[x].description.includes(searchTerm))
    return results
}

module.exports = {
    genUID, // This is just a shorthand. It's the same as genUID: genUID. 
    initializeUserIfNeeded,
    putItemsBought,
    getItemsBought,
    createListing,
    buy,
    allItemsSold,
    getItemDescription,
    allItemsBought,
    allListings,
    searchForListings
    // Add all the other functions that need to be exported
}