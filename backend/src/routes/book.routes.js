import express from "express";
import { createBook, getAllBooks } from "../controllers/book.controller.js";


const router = express.Router();
router.post("/create-book", createBook);
router.get("/allbook", getAllBooks);
export default router;
