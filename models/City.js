const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  img: { type: [String], required: true },
  description: { type: String },
});

const City = mongoose.model("city", citySchema);

module.exports = City;
