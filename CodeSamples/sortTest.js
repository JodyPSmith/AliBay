var Sifter = require('sifter');

// var itemsForSale = ['playstation', 'bike', 'mountain bike', 'scuba diving gear', 'hi dive thing', 'biker jacket', 'kids playhouse', 'toy train station']
// var itemsMap = [
//     { title: 'playstation', itemID: 165436543, desc: 'Awesome Playstation games console, your kids will love it', price: 24.55 },
//     { title: 'bike', itemID: 276868, desc: 'It has wheels that go round and a saddle to sit on, boo yeh', price: 22.00 },
//     { title: 'mountain bike', itemID: 363436, desc: 'It climbs mountains all by itself, you just go along for the ride', price: 22.00 },
//     { title: 'scuba diving gear', itemID: 4897654, desc: `Avoid drowning when you're to lazy to come up for air, bargain`, price: 22.00 },
//     { title: 'hi dive thing', itemID: 56547654, desc: `If you can't fly but have already jumped off the diving board, I hope you've already purchased this`, price: 22.00 },
//     { title: 'biker jacket', itemID: 6908, desc: 'Keep your skin on you and not on the road', price: 22.99 },
//     { title: 'kids playhouse', itemID: 7524, desc: 'Hours of fun, so you can finish the bottle of wine in peace', price: 22.50 },
//     { title: 'toy train station', itemID: 853746, desc: 'For the kid or manchild in your life, perfect christmas present for your basement dweller', price: 22.00 },
//     { title: 'kids playhouse', itemID: 7654769, desc: 'Much better than the other playhouse for sale on here, this one comes with no dangerous sharp corners', price: 22.15 }
//   ]

var itemsMap = {
  165436543 : { title: 'playstation', itemID: 165436543, desc: 'Awesome Playstation games console, your kids will love it', price: 24.55 },
  276868 : { title: 'bike', itemID: 276868, desc: 'It has wheels that go round and a saddle to sit on, boo yeh', price: 22.00 },
  363436 : { title: 'mountain bike', itemID: 363436, desc: 'It climbs mountains all by itself, you just go along for the ride', price: 22.00 },
  4897654 : { title: 'scuba diving gear', itemID: 4897654, desc: `Avoid drowning when you're to lazy to come up for air, bargain`, price: 22.00 },
  56547654 : { title: 'hi dive thing', itemID: 56547654, desc: `If you can't fly but have already jumped off the diving board, I hope you've already purchased this`, price: 22.00 },
  6908 : { title: 'biker jacket', itemID: 6908, desc: 'Keep your skin on you and not on the road', price: 22.99 },
  7524 : { title: 'kids playhouse', itemID: 7524, desc: 'Hours of fun, so you can finish the bottle of wine in peace', price: 22.50 },
  853746 : { title: 'toy train station', itemID: 853746, desc: 'For the kid or manchild in your life, perfect christmas present for your basement dweller', price: 22.00 },
  7654769 :{ title: 'kids playhouse', itemID: 7654769, desc: 'Much better than the other playhouse for sale on here, this one comes with no dangerous sharp corners', price: 22.15 }
}
  
  var itemsForSale = new Sifter(itemsMap);
  
  var result = itemsForSale.search('kids', {
    fields: ['title', 'desc'],
    sort: [{ field: 'title', direction: 'asc' }],
    limit: 4
  });
  
  // adds each items details in order to sortedArray, so if sifter result is 1, 5, 2, then the array order will be [{item1}, {item5}, {item2}]. 
  // The returned array is stringified and has the item details imported from the itemsMap
  sortedItems = (result) => {
    let sortedArray = [];
  
    for (var i = 0; i < result.items.length; i++) {
      sortedArray.push(itemsMap[result.items[i].id])
    }
  
    var answer = JSON.stringify(sortedArray);
    return answer
  }
  
  console.log(sortedItems(result));