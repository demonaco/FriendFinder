var path = require('path');
var server = require(./server.js)

module.exports = function(app) {

app.get("/", function(req, res){
    res.send("Welcome to Friend Finder!")
});

app.get("/survey", function(req, res){
    res.sendFile(path.join(__dirname, "../public/survey.html"))
})

app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
})

};
