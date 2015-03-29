var mongoose = require('mongoose');
mongoose.connect('mongodb://heroku_app35041302:rcdi89kbq9etfi7ltvf9u0no4n@ds053448.mongolab.com:53448/heroku_app35041302', function(err, res) {
  if(err) throw err;
  console.log('Conectado con éxito a la BBDD');
});

var userSchema = mongoose.Schema({
		 firstname: 'string',
		 lastname: 'string',
		 age: 'number'
		});



var User = mongoose.model('User', userSchema);

exports.users = function(req, res) {
  User.find({}, function(err, obj) {
    res.json(obj)
  });
};

exports.user = function(req, res) {
  User.findOne({ _id: req.params.id }, function(err, obj) {
    res.json(obj);
  });
};

exports.createUser = function(req, res) {
  var user = new User(req.body);
  user.save();
  res.json(req.body);
};

exports.updateUser = function(req, res) {
  User.findByIdAndUpdate(req.params.id, {
    $set: { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }
  }, { upsert: true },
  function(err, obj) {
    return res.json(true);
  });
};

exports.destroyUser = function(req, res) {
  User.remove({ _id: req.params.id }, function(err) {
    res.json(true);
  });
};
