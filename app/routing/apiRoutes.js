var path = require("path");
var friends = require("../data/friends.js");


module.exports = function (app) {
    app.get("/api/friends", function (req, res) {
        res.json(friends);
    });

    app.post("/api/friends", function (req, res) {
        //handle incoming survey
        var newFriend = req.body;
        console.log(newFriend);
        friends.push(newFriend);
       
        //Compatibilty logic
        for (var h = 0; h < friends.length; h++) {
           
            for (var j = 0; j < friends[h].scores.length; j++) {
                
                

                for (var i = 0; i < newFriend.scores.length; i++) {
                    var difference = 0;
                    difference += Math.abs(i - j);
                    var diffScoreArray = [];
                    diffScoreArray.push(difference);
                }
            }
        }
        function getSum(total, num) {
            return total + num;
        }
        var totalDiff = diffScoreArray.reduce(getSum);
        var diffTotalArray = [];
        diffTotalArray.push(totalDiff);
        var a = Math.min(diffTotalArray);
        var b = diffTotalArray.indexOf(a);
        var bff = {
            name: friends[b].name,
            photoUrl: friends[b].photo,
        
        };
        console.log(bff);
        res.json(bff);
    });
};