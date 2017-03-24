
var express = require('express');
var router  = express.Router();
var mysql = require('mysql')

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,

  // Your username
  user: "root",

  // Your password
  password: "",
  database: "name_db"
});

//this is the nameontroller.js file

router.get('/', function(req,res) {
	
	var query = "SELECT * FROM name_table" //query from name_db

	connection.query(query, function(err, names) {
		res.render('names/index', {
			something: true,
			something_else: false,
			names: names,
			logged_in: req.session.logged_in,
			user_email: req.session.user_email,
			user_id: req.session.user_id,
			username: req.session.username
		});

	});
});

router.get('/name2', function(req,res) {
	if (!req.session.name){
		var query = "SELECT * FROM users u LEFT JOIN user_name"  //mysql SELECT commands

		connection.query(query, [req.session.user_id], function(err, coupons) {
			res.render('names/name2', {
				something: true,
				something_else: false,
				names: names,
				logged_in: req.session.logged_in,
				user_email: req.session.user_email,
				user_id: req.session.user_id,
				username: req.session.username
			});
		});
	}
});





module.exports = router;
