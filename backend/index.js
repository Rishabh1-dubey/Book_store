import express from "express";
import dotenv from "dotenv";
import connectDb from "./database/connectDB.js";

dotenv.config();
const port = process.env.PORT;
const app = express();




//database connection
connectDb()

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`server is listening on ${port ? port : 3000}`);
});
