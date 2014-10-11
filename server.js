//import classes and setup
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;


//add a router
var router = express.Router();


router.route('/posts').get(function(req, res) {
	var tempBlogs = [{
		id: 1,
		title: 'Hello World!',
		date: new Date(2014, 8, 20, 6, 30, 0, 0),
		content: 'This is a sample blog piece'
	},
	{
		id: 2,
		title: 'Test Blog Post',
		date: new Date(2014, 9, 20, 6, 30, 0, 0),
		content: 'This is another sample blog piece'
	},
	{
		id: 3,
		title: 'Test Blog Post',
		date: new Date(2014, 10, 20, 6, 30, 0, 0),
		content: 'A Third sample blog post?!'
	}];
	res.json(tempBlogs);
});



app.use('/api', router);

app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

// Start the server
app.listen(port);
console.log('Running on port: ' + port);
