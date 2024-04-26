var express = require('express');
var router = express.Router();
const UserModel=require('./users');
const mongoose = require("mongoose");

mongoose.connect('mongodb+srv://potdarswapnil11:ASpmZsyla3kiDX0p@swapnil.zjqy3sn.mongodb.net/REST-API?retryWrites=true&w=majority')
.then(() => console.log('Connected to the database!'));

/* GET home page. */
 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
}); 

router.get('/', function(req,res, next){
  req.session.sessionname = "testsession",
  res.render('index');
});

router.get('/check',function(req,res){
  console.log(req.session);
  res.send('session is working');
})



module.exports = router;


