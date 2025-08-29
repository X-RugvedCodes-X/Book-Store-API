const mongoose = require("mongoose");

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_CONNECTION_URL);
    console.log("MongoDB Connected Successfully !");
  } catch(err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1);
  }
};

module.exports = connectToDB;