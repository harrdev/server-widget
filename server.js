// NPM packages
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
// Database configuration
const db = require("./config/db");
// Server and Client Ports
const serverDevPort = 8000;
const clientDevPort = 3000;
// Connect to database, using new version of URL parser
mongoose.connect(db, {
  useNewUrlParser: true,
});
// Instantiate express app
const app = express();
// Setup CORS and define which port for server to use
app.use(
  cors({
    origin: `http://localhost:${clientDevPort}`,
  })
);
// express.json middleware to parse JSON requests into JS objects before they reach the route files
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Home Route");
});

app.listen(serverDevPort, () => {
  console.log("Listening on port: " + serverDevPort);
});

module.exports = app;
