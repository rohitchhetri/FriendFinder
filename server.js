//Required Dependencies 
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

//Configure for Express

var app = express();
var PORT = 3040;

//Public Directory access 
app.use(express.static(path.join(__dirname, './app/public')));

//Middleware for incoming request 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());

//Add Routes
require(path.join(__dirname, './app/routing/apiRoutes'))(app);
require(path.join(__dirname,'./app/routing/htmlRoutes'))(app);

//Start 
app.listen(PORT, function(){
    console.log("Application running on Port: " + PORT);
});