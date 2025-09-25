import express from "express";
import { createBook, deleteBook, getAllBooks, getSingleBook, updataBook } from "../controllers/book.controller.js";


const bookRouter = express.Router();
bookRouter.post("/create-book", createBook);
bookRouter.get("/allbook", getAllBooks);
bookRouter.get("/:id", getSingleBook);
bookRouter.put("/edit/:id", updataBook);
bookRouter.delete("/delete/:id", deleteBook);
export default bookRouter;
