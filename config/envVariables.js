const dotenv = require("dotenv");
dotenv.config();

const config = {
  DB_URL: process.env.MONGOCONNECTION,
  PORT: process.env.PORT,
};

module.exports = config;
