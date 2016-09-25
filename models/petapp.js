console.log('in petapp.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  pet_name: String,
  pet_species: String,
  age: Number,
  url: String
});

// users is the name of the collection in the database
// WARNING will lowercase and pluralize collection name
var Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
