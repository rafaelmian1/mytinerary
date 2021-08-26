const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const userSchema = new Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  password: { type: String, required: true },
  img: { type: String, required: true },
  country: { type: String, required: true },
  admin: { type: Boolean, default: false },
  liked: [{ type: Schema.Types.ObjectId, ref: "itinerary" }],
});

module.exports = mongoose.model("user", userSchema);
