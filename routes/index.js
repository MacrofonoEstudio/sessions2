var express = require('express');
var router = express.Router();
var User = require('../models/users');


/* GET home page. */
router.get('/', function(req, res) {
  var sess = req.session;

  if(!('counter' in sess)) {
    sess.counter = 0;
  }
  sess.counter++;

  console.log(req.session);

  res.render('index', {
    title: 'Express',
    counter: sess.counter
  });
});


module.exports = router;
