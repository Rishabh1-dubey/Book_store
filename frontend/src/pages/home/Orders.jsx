import { getAuth } from "firebase/auth";
import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const Orders = () => {
  const auth = getAuth();
  const currentUser = auth.currentUser;

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const latestOrder = orders[0];

  useEffect(() => {
    if (!currentUser?.email) {
      setLoading(false);
      return;
    }

    const getUserOrder = async () => {
      try {
        const res = await axios.get(
          `${import.meta.env.VITE_BASE_URL}/api/v1/order/email/${currentUser.email}`
        );
        console.log(res.data);
        setOrders(res.data);
      } catch (err) {
        console.error("Error fetching orders:", err);
      } finally {
        setLoading(false);
      }
    };

    getUserOrder();
  }, [currentUser]);

  if (loading) return <div>Loading............</div>;

  return (
    <div className="container mx-auto p-4 md:p-6  ">
     
      <h2 className="text-3xl md:text-5xl font-semibold mb-3 text-center font-primary">
        Thanks for your Order 😎
      </h2>
      <h2 className="text-xl md:text-3xl font-semibold mb-4 font-secondary text-center">
        Your Orders
      </h2>
      <h2 className="text-xl md:text-3xl font-semibold mb-4 font-primary text-center text-pink-700">
        Your Order-ID: {latestOrder._id}
      </h2>

      {orders.length === 0 ? (
        <div className="text-center text-gray-500">No orders found!</div>
      ) : (
        <div>
        
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* left section */}
            <div className="p-4">
              <h1 className="font-primary text-2xl md:text-3xl font-semibold mb-2">
                Payment Information
              </h1>
              <p className="font-primary text-[16px] font-normal text-blue-400">
                Order Placed / Cash on Delivery
              </p>
            </div>

            {/* right section */}
            <div className="p-4 rounded border border-gray-200">
              <h2 className="font-semibold font-primary text-2xl md:text-3xl mb-2">
                Delivery Address
              </h2>
              {latestOrder?.address ? (
                <>
                  <p className="font-primary">
                    <span className="font-semibold">Name:</span>{" "}
                    {latestOrder.firstName + " " + latestOrder.lastName}
                  </p>
                  <p className="font-primary">
                    <span className="font-semibold">Email:</span>{" "}
                    {latestOrder.email}
                  </p>
                  <p className="font-primary">
                    <span className="font-semibold">Address:</span>{" "}
                    {latestOrder.address.city}, {latestOrder.address.state},{" "}
                    {latestOrder.address.country} - {latestOrder.address.zipcode}
                  </p>
                </>
              ) : (
                <p>No address found</p>
              )}
            </div>
          </div>

        
          <div className="overflow-x-auto">
            <Table>
              <TableCaption>A list of your recent orders.</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Order No</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Original Price</TableHead>
                  <TableHead>Quantity</TableHead>
                  <TableHead>Total</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order, index) => (
                  <TableRow key={order._id}>
                    <TableCell># {index + 1}</TableCell>
                    <TableCell>
                      {order.firstName} {order.lastName}
                    </TableCell>
                    {/* ✅ Show dynamic status instead of hardcoding */}
                    <TableCell
                      className={`${
                        order.status === "Delivered"
                          ? "text-green-600"
                          : "text-red-600"
                      }`}
                    >
                      {order.status || "Pending"}
                    </TableCell>
                    <TableCell>${order.totalPrice}</TableCell>
                    <TableCell>{order.productIds.length}</TableCell>
                    <TableCell>${order.totalPrice}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </div>
      )}
    </div>
  );
};

export default Orders;
