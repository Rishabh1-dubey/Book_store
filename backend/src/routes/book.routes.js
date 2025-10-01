import express from "express";
import { createBook, deleteBook, getAllBooks, getSingleBook, updataBook } from "../controllers/book.controller.js";
import verifyAdmin from "../middleware/verifyAdmin.js";


const bookRouter = express.Router();
bookRouter.post("/create-book",verifyAdmin, createBook);
bookRouter.get("/allbook", getAllBooks);
bookRouter.get("/:id", getSingleBook);
bookRouter.put("/edit/:id",verifyAdmin, updataBook);
bookRouter.delete("/delete/:id",verifyAdmin, deleteBook);
export default bookRouter;
