var express = require('express');
var router = express.Router();
var User = require('../models/users');


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});


module.exports = router;
