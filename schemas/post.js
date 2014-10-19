var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var PostSchema   = new Schema({
	title: String,
	date: Number,
	content: Number,
});

module.exports = mongoose.model('Post', PostSchema);