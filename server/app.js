var mongoose = require('mongoose');
var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();

app.use(bodyParser.json());

//model
var Pet = require('../models/petapp.js');

var mongoURI = "mongodb://localhost:27017/petapp";
mongoose.connect(mongoURI);

app.set("port", (process.env.PORT || 8080));

app.get("/*", function(req,res){
    console.log("Here is the property: ", req.params[0]);
    var file = req.params[0] || "/views/index.html";
    res.sendFile(path.join(__dirname, "../public/", file));
});//end base url hit

app.listen(app.get("port"), function(){
    console.log("Listening on port", app.get("port"));
});//end listening on port

app.use( express.static('public'));

app.post('/addPet', function(req,res){
console.log('in addPet');
  var newPet = new Pet({
    pet_name: req.body.pet_name,
    pet_species: req.body.pet_species,
    age: req.body.age,
    url: req.body.url
  });//end newPet

  newPet.save(function(err){
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }//end if
    else{
      res.sendStatus(201);
    }//end else
  });//end newPet save
});//end addPet
