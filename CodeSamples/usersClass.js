var bcrypt = require('bcrypt');
let itemCounter = 1;

class User {
  constructor(username, password) {
    this.userid = Math.floor(Math.random() * 1000000000)
    this.username = username;
    this.passHash = bcrypt.hash(password, 5)
  }
}

class NewItem {
  constructor(itemName, sellerID, itemDesc, price) {
    this.itemId = itemCounter++;
    this.itemName = itemName;
    this.sellerID = sellerID;
    this.itemDesc = itemDesc;
    this.price = price;
    this.img = [];
  }
}
let desc = "Awesome gaming console"

let user1 = new User("jody", "blahblah");
let item1 = new NewItem("playstation", user1.userid, desc, 123.45)

console.log(user1);
console.log(item1);


