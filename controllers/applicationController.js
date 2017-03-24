
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

//this is the users_controller.js file
router.get('/', function(req,res) {
  res.render('index');
});

module.exports = router;