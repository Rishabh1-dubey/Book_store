import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./src/database/connectDB.js";
import bookRouter from "./src/routes/book.routes.js";
import orderRouter from "./src/routes/order.routes.js";
import adminRouter from "./src/controllers/admin.controller.js";
import router from "./src/stats/admin.stats.js";

dotenv.config();
const port = process.env.PORT;
const app = express();

app.use(express.json());
app.use(cors());


//database connection
connectDb();

//routes-----------------------------------
// Book routes --------------
app.use("/api/v1/", bookRouter);
app.use("/api/v1/order", orderRouter);


//---------------- admin routes-------------------
app.use("/api/", adminRouter)
app.use("/api/admin/dashboard", router)

app.listen(port, () => {
  console.log(`server is listening on ${port ? port : 3000}`);
});
