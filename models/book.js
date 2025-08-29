const mongoose = require("mongoose");
const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Book Title is Required."],
    trim: true,
    maxLength: [100, "Book Title Cannot be 100 Characters."]
  },
  author: {
    type: String,
    required: [true, "Book Title is Required."],
    trim: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1700, "Year Must be Atleast 1700"],
    max: [new Date().getFullYear(), `Year Must be not more than ${new Date().getFullYear()}`]
  }, 
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("Book", BookSchema);