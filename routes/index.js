const path = require("path");
var express = require("express");
var router = express.Router();

const apiRoutes = require("./api/index");

// API Routes
router.use("/api", apiRoutes);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
