//Dependencies 
var express = require('express');
var router = express.Router();

//Routes
router.get('/products',function(req,res){
	res.send('Your API is Awesome!!');
});

router.get('/myname/:name',function(req,res){
	res.send('Your name  is ' +req.params.name );
});


//Return router
module.exports = router; 