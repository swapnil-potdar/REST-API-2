/* var express = require('express');
var router = express.Router();
 */
/* GET users listing. */
/* router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

module.exports = router;
 */

const mongoose = require("mongoose");

/* mongoose.connect("mongodb:127.0.0.1:27017/dbname"); */

/* mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => console.log('Connected!')); */

  mongoose.connect(' mongodb+srv://potdarswapnil11:ASpmZsyla3kiDX0p@swapnil.zjqy3sn.mongodb.net/REST-API?retryWrites=true&w=majority')
  .then(() => console.log('Connected to database!'));
 



const userschema = mongoose.Schema({
  username: String,
  name: String,
  age: Number,
});

module.exports= mongoose.model("user", userschema);
