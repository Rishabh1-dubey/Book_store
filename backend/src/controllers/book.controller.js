import Book from "../models/book.js";

export const createBook = async (req, res) => {
  const {
    title,
    description,
    category,
    trending,
    coverImage,
    newPrice,
    oldPrice,
  } = req.body;

  if (!title || !description || !category) {
    return res
      .status(400)
      .json({ message: "Please add Required fileds", success: false });
  }

  try {
    const existingBook = await Book.findOne({ title });
    if (existingBook) {
      return res
        .status(400)
        .json({ message: "Book already added", success: false });
    }

    const newBook = await Book.create({
      title,
      description,
      category,
      trending,
      coverImage,
      newPrice,
      oldPrice,
    });

    return res.status(200).json({
      message: "new Book added successfully",
      success: true,
      newBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured", success: false, error });
  }
};

//getAllBooks
export const getAllBooks = async (req, res) => {
  try {
    const allBook = await Book.find().sort({ created: -1 });
    return res
      .status(200)
      .json({ message: "All books fouund", success: true, allBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured", success: false, error });
  }
};

// get singleBook
export const getSingleBook = async (req, res) => {
  const { id } = req.params;
  try {
    const singleBook = await Book.findById(id);
    if (!singleBook) {
      return res
        .status(404)
        .json({ message: "Not able to find the book", success: false });
    }
    return res
      .status(200)
      .json({ message: "All books fouund", success: true, singleBook });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured", success: false, error });
  }
};

//update the book data
export const updataBook = async (req, res) => {
  const { id } = req.params;

  try {

    //req.body kyu kiye hai see kyuki  tumko  sb field update krna haii iskeliye tum req.body kr rhe hoo
    const updateBook = await Book.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!updateBook) {
      return res
        .status(402)
        .json({ message: "Not able to Update the book", success: false });
    }
    return res.status(200).json({
      message: "update Books successfully",
      success: true,
      updateBook,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured", success: false, error });
  }
};

// delete Book
export const deleteBook = async (req, res) => {
  const { id } = req.params;

  try {
    const deleteBook = await Book.findByIdAndDelete(id);
    if (!deleteBook) {
      return res.status(402).json({
        message: "Book not found ",
        success: false,
      });
    }
    return res
      .status(200)
      .json({ message: "Book deleted successfully", success: true });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Error occured", success: false, error });
  }
};
