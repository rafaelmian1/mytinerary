const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const activitySchema = new Schema({
  img: { type: String, required: true },
  name: { type: String, required: true },
  description: { type: String },
  itinerary: { type: Schema.Types.ObjectId, path: "itinerary", required: true },
});

module.exports = mongoose.model("activity", activitySchema);
