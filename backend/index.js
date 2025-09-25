import express from "express";
import dotenv from "dotenv";
import connectDb from "./src/database/connectDB.js";
import bookRouter from "./src/routes/book.routes.js";


dotenv.config();
const port = process.env.PORT;
const app = express();




//database connection
connectDb()

//routes-----------------------------------
// Book routes --------------
app.use(express.json())
app.use("/api/v1/", bookRouter)

app.get("/", (req, res) => {
  res.send("hello world");
});
app.listen(port, () => {
  console.log(`server is listening on ${port ? port : 3000}`);
});
