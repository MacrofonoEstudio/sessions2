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


/* Add user */
router.post('/user', function(req, res) {

  var object = req.body;
  var user = new User(object);
  user.save(function (err) {
    if (err) // ...
    console.log('yes" User added');
  });

});


module.exports = router;

