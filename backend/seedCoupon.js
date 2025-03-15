require("dotenv").config(); 
const mongoose = require("mongoose");
const Coupon = require("./models/Coupon");

const createCoupons = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");


    const coupons = [
      { code: "COUPON1" },
      { code: "COUPON4" },
      { code: "COUPON5" },
    ];
    await Coupon.insertMany(coupons);
    console.log("Coupons added to the database");
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    
    mongoose.connection.close();
  }
};

createCoupons();