//import classes and setup
var express    = require('express'); 		// call express
var app        = express(); 				// define our app using express
var bodyParser = require('body-parser');

app.use(bodyParser());
app.use(express.static(__dirname + '/public'));

var port = process.env.PORT || 8080;


//add a router
var router = express.Router();


router.route('/blog').get(function(req, res) {
		
	});



app.use('/api', router);

app.get('*', function(req, res) {
			res.sendfile('./public/index.html'); // load our public/index.html file
		});

// Start the server
app.listen(port);
console.log('Running on port: ' + port);
