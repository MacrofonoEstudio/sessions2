var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var userSchema   = new Schema({
	fbId : String,
	name : String,
 	email: String,
 	token: String
 	// Añadir fotos
});

module.exports = mongoose.model('Users', userSchema);