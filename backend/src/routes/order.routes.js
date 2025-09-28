import express from "express"
import { createOrder, getOrder } from "../controllers/order.controller.js";


const orderRouter =  express.Router();

// create order endpoint
orderRouter.post("/", createOrder);

// get orders by user email 
orderRouter.get("/email/:email", getOrder);

export default orderRouter