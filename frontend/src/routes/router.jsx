import App from "@/App";
import Login from "@/pages/home/LogIn.jsx";
import { Home } from "lucide-react";
import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import { CheckoutPage } from "@/pages/home/CheckoutPage";
import Orders from "@/pages/home/Orders";
import Cart from "@/pages/home/Cart";
import SingleBook from "@/pages/home/singleBook";
import Dashboard from "@/pages/home/Dashboard";
import AdminLogin from "@/components/AdminLogin";
import DashboardLayout from "@/pages/dashboard/DashboardLayout";
import AdminRoutes from "./adminRoutes";
import AdminDashborad from "@/pages/dashboard/AdminDashborad";
import AddBook from "@/pages/dashboard/AddBook";
import EditBook from "@/pages/dashboard/EditBook";
import DeleteBook from "@/pages/dashboard/deleteBook";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/checkout",
        element: (
          <PrivateRoutes>
            <CheckoutPage />
          </PrivateRoutes>
        ),
      },

      {
        path: "/orders",
        element: (
          <PrivateRoutes>
            {" "}
            <Orders />
          </PrivateRoutes>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/books/:id",
        element: <SingleBook />,
      },
      {
        path: "/dashboard",
        element: (
          <PrivateRoutes>
            <Dashboard />
          </PrivateRoutes>
        ),
      },
    ],
  },

  //   admin routes

  {
    path: "/admin",
    element: <AdminLogin />,
  },
  {
    path: "/admin-dashboard",
    element: (
      <AdminRoutes>
        <DashboardLayout />
      </AdminRoutes>
    ),
    children: [
      {
        path: "",
        element: (
          <AdminRoutes>
            <AdminDashborad />
          </AdminRoutes>
        ),
      },
      {
        path: "add-new-book",
        element: (
          <AdminRoutes>
            <AddBook />
          </AdminRoutes>
        ),
      },
      {
        path: "edit-book/:id",
        element: (
          <AdminRoutes>
            <EditBook />
          </AdminRoutes>
        ),
      },
      {
        path: "delete-books",
        element: (
          <AdminRoutes>
            <DeleteBook />
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
