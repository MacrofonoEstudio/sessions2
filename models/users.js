var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
	fbId : String,
	name : String,
 	email: String,
 	token: String
});

module.exports = mongoose.model('Users', userSchema);