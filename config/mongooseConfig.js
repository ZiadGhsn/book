const mongoose = require("mongoose");
const envVariables = require("./envVariables");

const connectToMongoDB = async function () {
  try {
    await mongoose.connect(envVariables.DB_URL);
    console.log("Connected To MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB!", error);
    console.log(error);
  }
};

module.exports = connectToMongoDB;
