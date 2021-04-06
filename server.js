'use strict';
const express     = require('express');
const bodyParser  = require('body-parser');
const bcrypt = require('bcrypt');
const fccTesting  = require('./freeCodeCamp/fcctesting.js');
const app         = express();
fccTesting(app);
const saltRounds = 12;
const myPlaintextPassword = 'sUperpassw0rd!';
const someOtherPlaintextPassword = 'pass123';



// asycnrhonous password checking, its prefeered so hashing doesn't block other incoming connections

//START_ASYNC -do not remove notes, place code between correct pair of notes.

// converting password to hash 
// salt is how many times it goes over essentially, 12 is agreed upon as a good standard
bcrypt.hash(myPlaintextPassword,saltRounds,(err,hash) => {
  // store hash in db
  console.log(hash);
  // comparing hash made above to orignial password
bcrypt.compare(myPlaintextPassword,hash,(err,res) => {
  // res == true or false
  console.log(res);

})
});


//END_ASYNC


// hashing server side now instead (sycnrhonous)
//START_SYNC

var hash = bcrypt.hashSync(myPlaintextPassword,saltRounds);
console.log(hash)

var result = bcrypt.compareSync(myPlaintextPassword,hash);

console.log(result);

//END_SYNC






























app.listen(process.env.PORT || 3000, () => {});
