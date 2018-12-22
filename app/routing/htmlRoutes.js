//dependencies

var path = require('path');

//Export HTML routes

module.exports = function(app){

    //Home Page routes 
    app.get('/', function(req,res){
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    //Survey Page Routes 
        app.get('/survey', function(req,res){
            res.sendFile(path.join(__dirname, '../public/survey.html'));
        });
};