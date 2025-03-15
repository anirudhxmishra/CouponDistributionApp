const express = require("express");
const adminController = require("../controllers/adminController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/login", adminController.login);
router.get("/coupons", authMiddleware, adminController.getCoupons);

module.exports = router;