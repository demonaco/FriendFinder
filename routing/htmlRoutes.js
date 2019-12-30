var server = require(./server.js)

app.get("/", function(req, res){
    res.send("Welcome to Friend Finder!")
})