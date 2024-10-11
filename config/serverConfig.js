const express = require("express");
const config = require("./envVariables");
const databaseConnection = require("./mongooseConfig");
const expressApp = require("./expressConfig");

exports.startServer = async function () {
  const app = express();
  
  // Connect to the database
  await databaseConnection();
  
  // Configure the Express app
  await expressApp(app);

  // Start the server
  app.listen(config.PORT, function () {
    console.log("Server Listening on " + config.PORT);
  }).on("error", function (error) {
    console.log("Error While Starting Application: " + error);
  });
};
