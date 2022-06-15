//Dependencies 
var express = require('express');
var router = express.Router();
var fs = require('fs');

const datapath = './data.json';

const readFromfile = (callback) => {
	fs.readFile(datapath, (err, data) => {
		if (err)
			throw err;
		callback(JSON.parse(data));
	})
}

const writeTofile = (inputData, callback) => {
	fs.writeFile(datapath, inputData, (err, data) => {
		if (err)
			throw err;
		callback();
	})
}

//Routes
//Add Users
router.post('/users', function (req, res) {
	readFromfile((data) => {
		const input = req.body;
		data.push(input);
		writeTofile(JSON.stringify(data, null), () => {
			res.send('User is sucessfully added');
		})
	});

});
// get all users
router.get('/users', function (req, res) {
	readFromfile(data => {
		res.send(data);
	})
});

//parsing request param from the URL
//Get User by id
router.get('/users/:id', function (req, res) {
	readFromfile(data => {
		let id = req.params.id;
		const result = data.filter(x => x.id === id);
		if (result.length === 0) {
			res.status(404).send('id not found');
		} else {
			res.send(result);
		}
	})
});

//reading query param from url
//update user by id
router.put('/users', function (req, res) {
	readFromfile(data => {
		const input = req.body;
		const id = input.id;
		const result = data.filter(x => x.id != id);
		result.push(input);
		writeTofile(JSON.stringify(result, null), () => {
			res.send(`User id ${id} is updated successfully`);
		})
	})
});

//delete user by id
router.delete('/users/:id', function (req, res) {
	readFromfile(data => {
		let id = req.params.id;
		var result = data.filter(x => x.id === id);
		if (result.length === 0) {
			res.status(404).send('id not found');
		} else {
			result = data.filter(x => x.id != id);
			writeTofile(JSON.stringify(result, null), () => {
				res.send(`User id ${id} is deleted successfully`);
			})
		}
	})
});


//Return router
module.exports = router; 