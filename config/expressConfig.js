const express = require("express");
const router = require("../routes/router");

async function configureApp(app) {
    // Set up CORS headers
    app.use(function (req, res, next) {
      res.header("Access-Control-Allow-Origin", "*");
      res.header("Access-Control-Allow-Methods", "POST, PUT, PATCH, GET, DELETE, OPTIONS");
      res.header("Access-Control-Allow-Headers", "Origin, X-Api-Key, X-Requested-With, Content-Type, Accept, Authorization");
      next();
    });

    // Middleware setup
    app.use(express.json());
    app.use(express.urlencoded({ extended: false }));

    // Set up the routes
    app.use(router);
}

module.exports = configureApp;
