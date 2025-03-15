require("dotenv").config(); 
const mongoose = require("mongoose");
const Admin = require("./models/Admin");
const bcrypt = require("bcryptjs");

const createAdmin = async () => {
  try {
    
    await mongoose.connect(process.env.MONGO_URI, {
    });
    console.log("MongoDB Connected");

    
    const admin = new Admin({
      username: "admin",
      password: await bcrypt.hash("admin123", 10),
    });
    await admin.save();
    console.log("Admin user created");
  } catch (err) {
    console.error("Error:", err.message);
  } finally {
    
    mongoose.connection.close();
  }
};

createAdmin();