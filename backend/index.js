import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/database/connectDB.js";
import bookRouter from "./src/routes/book.routes.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors({ origin: "http://localhost:5173"}));


//database connection
connectDb();

//routes-----------------------------------
// Book routes --------------
app.use("/api/v1/", bookRouter);


app.listen(port, () => {
  console.log(`server is listening on ${port ? port : 3000}`);
});
