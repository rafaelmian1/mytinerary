const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const citySchema = new Schema({
  city: { type: String, required: true },
  country: { type: String, required: true },
  img: { type: [String], required: true },
  description: { type: String },
});

module.exports = mongoose.model("city", citySchema);
