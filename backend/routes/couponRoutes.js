const express = require("express");
const couponController = require("../controllers/couponController");

const router = express.Router();


router.get("/next", couponController.getNextCoupon); 
router.post("/claim", couponController.claimCoupon); 

module.exports = router;