import Order from "../models/order.js";

// create a order
export const createOrder = async (req, res) => {
  try {
    const newOrder = await Order(req.body);
    const savedOrder = await newOrder.save();
    res.status(200).json(savedOrder);
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to create order" });
  }
};

// get order

export const getOrder = async (req, res) => {
  try {
    const { email } = req.params;
    const findOrder = (await Order.find({ email })).sort({ createdAt: -1 });

    if (!findOrder) {
     return  res
        .status(400)
        .json({ message: "Can not find the Order", success: false });
    }
    res.status(200).json(findOrder)
  } catch (error) {
    console.error("Error creating order", error);
    res.status(500).json({ message: "Failed to find Order" });
  }
};

