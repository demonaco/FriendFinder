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

//Clear out friends data if needed

// app.put("/api/clear", function(req, res) {
// friendsData.length = [];
// res.json({ ok: true });
// })