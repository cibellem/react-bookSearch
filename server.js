const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const routes = require("./routes");

dotenv.config();

// Define middleware here

app.options(
  "*",
  cors({
    origin: "https://admiring-mcclintock-475a2f.netlify.app/",
    optionsSuccessStatus: 200,
  })
);

app.use(
  cors({
    origin: "https://admiring-mcclintock-475a2f.netlify.app/",
    optionsSuccessStatus: 200,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}
app.use(cors(corsOptions));

app.use(routes);
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

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`======> App listenning on  ${PORT}!`);
});
