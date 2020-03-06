const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
// Add routes, both API and view
app.use(routes);

// Connect to the Mongo DB
mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/booksDB",
  { useNewUrlParser: true, useUnifiedTopology: true },
  () => console.log("Connected to the the DB!")
);
app.get("/*", (req, res) => {
  let url = path.join(__dirname, "/client/build", "index.html");
  if (!url.startsWith("/app/"))
    // we're on local windows
    url = url.substring(1);
  res.sendFile(url);
});

app.listen(PORT, () => {
  console.log(`======> App listenning on  ${PORT}!`);
});
