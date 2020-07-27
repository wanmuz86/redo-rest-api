//Boilerplate code

var express = require('express'); // call express
var app = express(); // define our app using express
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
var port = process.env.PORT || 8080; // set our port

//Routing
var router = express.Router();
router.get('/', function(req, res) {
res.json({ message: 'hooray! welcome to our api!' });
});

//Lab 2
//Ex #1
router.get('/hello', function(req, res) {
res.json({ message: 'Hello World!' });
});

//Ex #2
router.get('/goodbye/:name', function(req, res) {
res.json({ message: 'Goodbye '+req.params.name });
});

//Ex #3
router.post('/sum', (req,res)=>{
	var sum = req.body.num1 + req.body.num2
	res.json({message:"The sum is "+sum})
})

app.use('/api', router);
app.listen(port);
console.log('Magic happens on port ' + port);