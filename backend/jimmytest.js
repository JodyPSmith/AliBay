const alibay = require('./alibay');
const assert = require('assert')

function test() {
let user = {fname: 'jim', lname: 'song', usr: 'jyt', pwd: 'pw123', email: 'myemail@email.com', address: '00 House Road', city: 'Montreal', province: 'PQ', pcode: 'H3LL01', country: 'CA'}
alibay.signUp(user.fname, user.lname, user.usr)
}
test();