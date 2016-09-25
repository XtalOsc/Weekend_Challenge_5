console.log('in petapp.js');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var petSchema = new Schema({
  pet_name: String,
  pet_species: String,
  age: Number,
  url: String
});

var Pet = mongoose.model('pets', petSchema);

module.exports = Pet;
