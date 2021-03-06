var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema   = new Schema({
	title: String,
	date: Date,
	content: String,
	tags:[String]
});

module.exports = mongoose.model('Post', PostSchema);