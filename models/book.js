const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
  title: { type: String },
  author: { type: Array },
  category: { type: Array },
  description: { type: String },
  cover: { type: String },
  date: { type: Date, default: Date.now },
});

const Book = mongoose.model("Book", bookSchema);
module.exports = Book;
