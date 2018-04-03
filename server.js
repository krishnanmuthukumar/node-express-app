//Dependencies
var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

//MongoDB
//mongoose.connect('mongodb://localhost/rest_test');

//Express 
var app = express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


//routes
app.use('/api',require('./routes/api'));

/*app.get('/',function(req,res){
	res.send('working');
});*/

//start server
app.listen(3000);
console.log('API is running in port 3000');