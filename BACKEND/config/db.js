const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/");
    console.log("DB CONNECTED SUCCESSFULLY!");
  } catch (error) {
    console.log("Failed to connect", error);
  }
};

module.exports = connection;
