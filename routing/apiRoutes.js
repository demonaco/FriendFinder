var friendsData = require('../app/data/friends');

module.exports = function (app) {

    app.get("/api/friends", function (req, res){
        res.json(friendsData);
    })

app.post("/api/friends", function (req, res) {
    friendsData.push(req.body);
    res.json(true);
});
}

//on click listener sends user data to friends.js, friends.js exports to apiRoutes, use API routs to create logic for comparison. After comparison is done append friend data to modal.

//.abs look up for absolute value parseInt to wrap up in .abs to include negatives

//Clear out friends data if needed

// app.put("/api/clear", function(req, res) {
// friendsData.length = [];
// res.json({ ok: true });
// })