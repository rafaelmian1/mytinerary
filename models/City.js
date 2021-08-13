const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  city: { type: String, required: true },
  country: { type: String },
  img: { type: [String], required: true },
  descripcion: { type: String },
});

const City = mongoose.model("city", citySchema);

module.exports = City;
