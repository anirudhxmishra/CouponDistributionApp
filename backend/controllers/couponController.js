const Coupon = require("../models/Coupon");
const ClaimHistory = require("../models/ClaimHistory");

const getNextCoupon = async (req, res) => {
  try {
    const coupon = await Coupon.findOne({ isAvailable: true });
    if (!coupon) return res.status(404).json({ message: "No coupons available" });
    res.json(coupon);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const claimCoupon = async (req, res) => {
  const { ipAddress, browserSession } = req.body;
  try {
    const coupon = await Coupon.findOne({ isAvailable: true });
    if (!coupon) return res.status(404).json({ message: "No coupons available" });

  
    const recentClaim = await ClaimHistory.findOne({
      $or: [{ ipAddress }, { browserSession }],
      claimedAt: { $gte: new Date(Date.now() - 24 * 60 * 60 * 1000) }, // 24 hour cooldown
    });
    if (recentClaim) return res.status(429).json({ message: "Cooldown period active. Try again later." });

  
    coupon.claimedBy = ipAddress;
    coupon.claimedAt = new Date();
    coupon.isAvailable = false;
    await coupon.save();

    await ClaimHistory.create({
      couponId: coupon._id,
      ipAddress,
      browserSession,
      claimedAt: new Date(),
    });

    res.json({ message: "Coupon claimed successfully!", coupon });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

module.exports = {
  getNextCoupon,
  claimCoupon,
};