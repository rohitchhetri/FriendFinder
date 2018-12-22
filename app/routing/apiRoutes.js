//Required dependencies

var path = require('path');

//Import saved friend list 
var friends = require('../data/friends');

//API routes 
module.exports = function (app) {

    //read the list of friends using .get 
    app.get('/api/friends', function (req, res) {
        res.json(friends);
    });

    //Add new entry of friends using .post
    app.post('/api/friends', function (req, res) {

        //record the user input
        var userInput = req.body;

        //record response 
        var userResponses = userInput.scores;

        //Compute
        var matchName = '';
        var matchImage = '';
        var totalDifference = 5000;

        //loop all friends 

        for (var i = 0; i < friends.length; i++) {

            var diff = 0;
            for (var j = 0; j < userResponses.length; j++) {

                diff += Math.abs(friends[i].scores[j] - userInput[j]);
            }

            //Record the friend match if lowest difference 

            if (diff < totalDifference) {

                totalDifference = diff;
                matchName = friends[i].name;
                matchImage = friends[i].photo;
            }
        }

        //Add new friends
        friends.push(userInput);

        //Send response
		res.json({ status: 'OK', matchName: matchName, matchImage: matchImage });
        
    });
};