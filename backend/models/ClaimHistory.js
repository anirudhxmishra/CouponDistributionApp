const mongoose = require("mongoose");

const claimHistorySchema = new mongoose.Schema({
  couponId: { type: mongoose.Schema.Types.ObjectId, ref: "Coupon" },
  ipAddress: { type: String, required: true },
  browserSession: { type: String, required: true },
  claimedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model("ClaimHistory", claimHistorySchema);