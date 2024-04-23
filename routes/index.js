var express = require('express');
var router = express.Router();
const UserModel=require('./users');
const mongoose = require("mongoose");

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
