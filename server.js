const express = require("express");
const mongoose = require("mongoose");
// const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
app.use("/", express.static(path.join(__dirname, "build")));

// Add routes, both API and view
// app.use(routes);
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/booksDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to the booksDB!")
);

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "build", "index.html"));
});

app.listen(PORT, function() {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
});
