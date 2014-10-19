//import classes and setup
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');
var config	   = require('./config.js');
var Post   = require('./schemas/post');
var mongoose   = require('mongoose');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;


//add a router
var router = express.Router();

mongoose.connect(config.mongoURL);

var tempBlogs = [{
		id: 0,
		title: 'Hello World!',
		date: new Date(2014, 8, 20, 6, 30, 0, 0),
		content: 'This is a sample blog piece'
	},
	{
		id: 1,
		title: 'Test Blog Post',
		date: new Date(2014, 9, 15, 6, 30, 0, 0),
		content: 'This is another sample blog piece'
	},
	{
		id: 2,
		title: 'Test Blog Post 2',
		date: new Date(2014, 10, 20, 6, 30, 0, 0),
		content: 'A Third sample blog post?!'
	}];

router.route('/posts').get(function(req, res) {
	Post.find(function(err, posts) {
			if (err)
				res.send(err);

			res.json(posts);
		});
});

router.route('/posts/:id').get(function(req, res) {
	res.json(tempBlogs[req.params.id]);
});

app.use('/api', router);

app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

// Start the server
app.listen(port);
console.log('Running on port: ' + port);
