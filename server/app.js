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

//set up server
app.get("/", function(req,res){
  console.log("Here is the property: ", req.params[0]);
  var file = req.params[0] || "/views/index.html";
  res.sendFile(path.join(__dirname, "../public/", file));
});//end base url hit

app.listen(app.get("port"), function(){
  console.log("Listening on port", app.get("port"));
});//end listening on port

app.use( express.static('public'));

//add pet to database
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

//view all pets
app.get('/viewAll', function(req, res) {
  Pet.find({}, function(err, petResults) {
    if(err){
      console.log('error occurred:', err);
      res.sendStatus(500);
    }//end if
    else{
      console.log("Pet Results:",petResults);
      res.send(petResults);
    }//end else
  });//end pet find
});//end viewAll

//delete a pet
app.delete('/deletePet/:id', function(req,res){
  console.log("req.params.id",req.params.id);  Pet.find({_id:req.params.id}).remove(function(err,result){
    res.send(result);
  });//end function
});//end deletePet
