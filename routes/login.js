var express = require('express');
var router = express.Router();

//var User = require('../models/users');

var temp = "mypassword";

router.get('/:id', function(req, res) {
  var sess = req.session;
  console.log("va be");
  var password = req.params.id;
  if(password == temp) {
    res.send("Has endevinat el password");
  } else {
    res.send("No has endevinat el password");
  }
});

router.get('/', function(req, res) {
  var sess = req.session;
  // Si tenim sessio... perfecte
  // si no tenim sessio:
  res.render('login', {
    title: 'Login'
  });
});


module.exports = router;