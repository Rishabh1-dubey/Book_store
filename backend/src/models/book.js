import mongoose from "mongoose";

const bookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim:true
    },
    description: {
      type: String,
      required: true,
      trim:true
    },
    category: {
      type: String,
      required: true,
    },
    trending: {
      type: Boolean,
    },
    coverImage: {
      type: String,
    },
    oldPrice: Number,
    newPrice: Number,
    createdAt: {
      type: Date,
      default: Date.now(),
    },
  },
  {
    timestamps: true,
  }
);

const Book = mongoose.model("Book", bookSchema)
export default Book
