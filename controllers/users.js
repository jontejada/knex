//bring in express
var express = require('express');
var router = express.Router();
var knex = require('../db/knex');
require('locus');

router.get('/', function(req,res){
	knex('users').then(function(users){
		console.log("these are my users",users);
		res.render("index", {users:users});
	});
});

//GET for /users/new
router.get('/new', function(req,res){
	res.render('new');
});

router.post('/', function(req,res){
	// knex('users').insert({name:name});
	knex('users').insert(req.body).then(function(){
		res.redirect('/users');
	});
	// eval(locus);
	// res.redirect('/users');
});

module.exports = router;