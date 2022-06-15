//Dependencies
var express = require('express');
var bodyParser = require('body-parser');
const port = 3000;

//Express 
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

//routes
app.use('/api/v1', require('./routes/api'));

//test app
app.get('/', function (req, res) {
	res.send('App is working');
});

//start server
app.listen(port, (req, res) => {
	console.log(`API is running on port ${port}`);
});