var path = require('path');

var express = require('express');

var app = express();
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true }));
app.use(express.json());

var apiRoutes = require("./routing/apiRoutes") (app);
var htmlRoutes = require("./routing/htmlRoutes") (app);

app.listen(PORT, function(){
console.log("Listening on " + PORT)
})

module.exports = app