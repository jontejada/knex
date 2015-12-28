var express = require('express');
var app = express();
require('locus');
// eval(locus);
app.get('/', function(req,res){
	res.send('hello');
});

// console.log(express);
// console.log('=============================================')
// console.log(app);

// var express = require ('express');
// var app = express(); // create instance of express app
// //var app2 = express(); // can make another 
// // console.log(typeof app); //function
// var bodyParser = require('body-parser');



// app.get('/', function(req,res) {
// 	res.send('hello');
// });

// // app.get('/about', function(req,res) {
// // 	res.send('about page');
// // });

// // app.get('/faq', function(req,res) {
// // 	res.setHeader('Content-Type', 'text/plain');
// // 	res.send('<h1>faq page</h1>');
// // });

// // app.get('/contact', function(req,res) {
// // 	res.send('<h1>contact page</h1>');
// // });

// // app.get('/:name', function(req,res) {
// // 	var name = req.params.name;
// // 	res.send(name);
// // });

// // app.get('/users/:id', function(req,res) {
// // 	var name = req.params.id;
// // 	res.send(name);
// // });

// // app.get('/users/:num1/:num2', function(req,res) {
// // 	var total = req.params.num1 + req.params.num2;
// // 	res.send(total);
// // });

// app.get('/movies', function(req,res) {
// 	var year = req.query.year;
// 	var actor = req.query.actor;
// 	res.send(year);
// });

// app.listen(8080, function() {
// 	console.log('listening on 8080');
// });
