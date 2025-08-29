const Book = require("../models/book.js");

const getAllBooks = async(req, res) => {
  try {
    const allBooks = await Book.find({});
    if(allBooks?.length > 0) {
      res.status(200).json({
        success: true,
        message: "List of Books Fetched Successfully.",
        data: allBooks
      });
    } else {
      res.status(404).json({
        success: false,
        message: "No Books Found in Database."
      });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong, Please Try Later."
    });
  }
}

const getSingleBookByID = async(req, res) => {
  try {
    const getCurrentBookID = req.params.id;
    const requestedBook = await Book.findById(getCurrentBookID);

    if(requestedBook) {
      res.status(200).json({
        success: true,
        message: "Requested Book Fetched.",
        data: requestedBook
      });
    } else {
      res.status(404).json({
        success: false,
        message: "Requested Book Not Found."
      });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({
      success: false,
      message: "Something Went Wrong, Please Try Later."
    });
  }
}

const addNewBook = async(req, res) => {
  try {
    const newBookFormData = req.body;
    const newlyCreatedBook = await Book.create(newBookFormData);

    if(newlyCreatedBook) {
      res.status(201).json({
        success: true,
        message: "Book Added Successfully.",
        data: newlyCreatedBook
      })
    }
  } catch(err) {
    console.error(err);
    res.status(500).json({ 
      success: false, 
      message: "Something Went Wrong, Please Try Later." 
    });
  }
}

const updateBook = async(req, res) => {
  try {
    const {params: currentBook, body: updateBook} = req;
    const updatedBook = await Book.findByIdAndUpdate(currentBook.id, updateBook, {new: true});

    if(!updatedBook) {
      res.status(404).json({
        success: false,
        message: "Book Not Found With the Requested ID."
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Requested Book is Updated.",
        data: updatedBook
      });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ 
      success: false, 
      message: "Something Went Wrong, Please Try Later." 
    });
  }
}

const deleteBook = async(req, res) => {
  try {
    const bookToBeDeleted = req.params.id;
    const deletedBook = await Book.findByIdAndDelete(bookToBeDeleted);

    if(!deletedBook) {
      res.status(404).json({
        success: false,
        message: "Book Not Found With the Requested ID."
      });
    } else {
      res.status(200).json({
        success: true,
        message: "Book Deleted."
      });
    }
  } catch(err) {
    console.log(err);
    res.status(500).json({ 
      success: false, 
      message: "Something Went Wrong, Please Try Later." 
    });
  }
}

module.exports = {
  getAllBooks,
  getSingleBookByID,
  addNewBook,
  updateBook,
  deleteBook
};