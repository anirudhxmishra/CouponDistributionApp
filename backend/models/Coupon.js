const mongoose = require("mongoose");

const couponSchema = new mongoose.Schema({
  code: { type: String, required: true, unique: true },
  claimedBy: { type: String, default: null },
  claimedAt: { type: Date, default: null },
  isAvailable: { type: Boolean, default: true },
});

module.exports = mongoose.model("Coupon", couponSchema);