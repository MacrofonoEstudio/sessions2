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
  console.log('Hola, estoy en User');
  var object = req.body;
  var user = new User(object);
  user.save(function (err) {
    if (err) {
      console.error("cant add user");
    } else {
      console.log('yes" User added');
    }
  });

  res.send("va be");

});

app.get('/', function(req, res){
  res.send('BodApp');
});

app.get('/views/:name', routes.partials);

app.get('/api/users', api.users);
app.get('/api/users/:id', api.user);
app.post('/api/users', api.createUser);
app.put('/api/users/:id', api.updateUser);
app.delete('/api/users/:id', api.destroyUser);

app.get('*', function(req, res){
  res.send('BodApp');
});


module.exports = router;

