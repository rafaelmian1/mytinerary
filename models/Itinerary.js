const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const itinerarySchema = new Schema({
  img: { type: String, required: true },
  user: { type: { name: String, avatar: String }, required: true },
  title: { type: String },
  description: { type: String },
  hashtags: { type: [String], required: true },
  price: { type: Number, required: true },
  duration: { type: Number, required: true },
  likes: {
    likes: { type: Number, default: 0 },
    users: [{ type: Schema.Types.ObjectId, ref: "user" }],
  },
  comments: [
    {
      user: { type: Schema.Types.ObjectId, ref: "user" },
      comment: String,
    },
  ],
  city: { type: Schema.Types.ObjectId, ref: "city", required: true },
});

module.exports = mongoose.model("itinerary", itinerarySchema);
