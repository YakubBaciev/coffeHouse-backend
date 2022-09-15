const mongoose = require('mongoose');

const drinkSchema = mongoose.Schema({
  name: String,
  price: String,
  in_stock: Boolean,
  contains_caffeine: Boolean,
  volume: Number,
  drink_description: String,
});
const Drink = mongoose.model('Drink', drinkSchema);
module.exports = Drink