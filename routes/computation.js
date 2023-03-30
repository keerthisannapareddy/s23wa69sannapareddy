var express = require('express');
var router = express.Router();

var random1 = Math.random()*100;
var random2 = Math.random()*100;
var n1=0;
var n2=0;
var n3=0;


/* GET users listing. */
router.get('/', function(req, res, next) {
  
  n1=Math.abs(random1);
  n2=Math.acos(random1);
  n3=Math.sin(random1);
  
  //res.send(`The random values is: ${ran},<br>imul applied to ran is: ${num1},<br>log applied to ran is: ${num2},<br>log10 applied to ran is: ${num3}`);
  
  
  res.send(`The Random number is ${random1}  <br> <br> abs applied to ${random1}} is ${n1}  <br> <br> log applied to ${random1} is ${n2}  <br> <br>  log10 applied to ${random1} is ${n3}`);


});

module.exports = router;