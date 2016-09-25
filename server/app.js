var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());

//model
var Student = require('../models/petapp.js');

var mongoURI = "mongodb://localhost:27017/petapp";
mongoose.connect(mongoURI);

app.set("port", (process.env.PORT || 8081));

app.get("/*", function(req,res){
    console.log("Here is the property: ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});//end base url hit

app.listen(app.get("port"), function(){
    console.log("Turned on the thing! : ", app.get("port"));
});//end listening on port

app.use( express.static('public'));
