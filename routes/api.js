var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_app35041302:rcdi89kbq9etfi7ltvf9u0no4n@ds053448.mongolab.com:53448/heroku_app35041302', function(err, res) {
  if(err) console.log(err);
  console.log('Conectado con éxito a la BBDD');
});

var User = require('../models/users');

exports.users = function(req, res) {
  User.find({}, function(err, obj) {
  	if(err) console.log(err);
    res.json(obj)
  });
};

exports.user = function(req, res) {
  User.findOne({ fbId: req.params.fbId }, function(err, obj) {
    if(err) console.log(err);
    res.json(obj);
  });
};

exports.createUser = function(req, res) {
  var user = new User(req.body);
  user.save({ fbId: req.fbId, name: req.body.name, email: req.body.email, token: req.body.token });
  res.json(req.body);
};

exports.updateUser = function(req, res) {
  User.findByIdAndUpdate(req.params.fbId, {
    $set: { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }
  }, { upsert: true },
  function(err, obj) {
    return res.json(true);
  });
};

exports.destroyUser = function(req, res) {
  User.remove({ fbId: req.params.fbId }, function(err) {
    res.json(true);
  });
};
