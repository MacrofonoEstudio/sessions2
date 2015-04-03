var express = require('express');
var router = express.Router();
var partials = require('./partials');
var api = require('./api');


/* GET home page. 
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
*/


/* Add user 
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

*/

router.get('/', function(req, res){
  res.send('BodApp');
});

router.get('/views/:name', partials.partials);

router.get('/api/users', api.users);
router.get('/api/users/:fbId', api.user);
router.post('/api/users', api.createUser);
router.put('/api/users/:fbId', api.updateUser);
router.delete('/api/users/:fbId', api.destroyUser);

router.get('*', function(req, res){
  res.send('BodApp');
});


module.exports = router;

