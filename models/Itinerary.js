const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itinerarySchema = new Schema({
  img: { type: String, required: true },
  user: { type: { name: String, avatar: String }, required: true },
  description: { type: String },
  likes: { type: Number, default: 0 },
  hashtags: { type: [String], required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  comments: { type: [String], default: [] },
  city: { type: Schema.Types.ObjectId, ref: "city", required: true },
});

module.exports = mongoose.model("itinerary", itinerarySchema);
