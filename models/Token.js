const mongoose = require("mongoose");

const tokenSchema = new mongoose.Schema({
  token_number: Number,
  user_id: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  service_type: String,
  status: { type: String, default: "waiting" },
  counter_no: { type: Number, default: null },
  issue_time: { type: Date, default: Date.now },
  estimated_wait_time: Number,
});

module.exports = mongoose.model("Token", tokenSchema);