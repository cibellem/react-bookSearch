const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

// Define middleware here
app.use(express.json());



// Connect to the Mongo DB
mongoose.set("debug", true);
mongoose.connect(
  "mongodb+srv://cibellem:root@cluster0.bnk4x.mongodb.net/booksdb?retryWrites=true&w=majority",
  //DEV
  // process.env.MONGO_DB_DEV,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true,
  },
  () => console.log("Connected to the the DB!")
);
app.use(routes);

app.use(express.static(path.join(__dirname, "/client/build")));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(process.env.PORT || 5000, () => {
  console.log(`======> App listenning on  ${PORT}!`);
});
