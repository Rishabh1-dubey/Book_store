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

export const getAllBooks = async (req, res) => {
  const allBook = await Book.find();
  return res.status(200).json({ message: "All books fouund", success: true ,allBook});
};
