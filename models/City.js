const mongoose = require("mongoose");

const citySchema = mongoose.Schema({
  ciudad: { type: String, required: true },
  img: { type: [String], required: true },
  descripcion: { type: String },
});

const City = mongoose.model("city", citySchema);

module.exports = City;
