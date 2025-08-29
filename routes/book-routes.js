const express = require("express");
const { getAllBooks, getSingleBookByID, addNewBook, updateBook, deleteBook } = require("../controllers/book-controllers.js");

//* Create Express router
const router = express.Router();

//* All Routes Related to our Books
router.get("/get", getAllBooks);
router.get("/get/:id", getSingleBookByID);
router.post("/add", addNewBook);
router.put("/update/:id", updateBook);
router.delete("/delete/:id", deleteBook);

module.exports = router;
