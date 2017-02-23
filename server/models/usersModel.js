var mongoose = require('mongoose');
var UserSchema = new mongoose.Schema({
 first: String,
 last: String,
 birthday: Date
})
mongoose.model('Users', UserSchema); 