var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var userRoutes = require("./controllers/users"); //without ./ node looks for node_modules

//middleware
app.set("view engine", "ejs");
app.use(express.static(__dirname + "/public")); //everythign thats not serverside rendered ejs/html
app.use(bodyParser.urlencoded({extended:true}));
app.use('/users', userRoutes); //first is baseurl

app.get('/', function(req,res) {
	res.redirect('/users');
});

app.listen(3000, function(){
	console.log("server started on port 3000");
});
