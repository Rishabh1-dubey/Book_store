import App from "@/App";
import Login from "@/pages/home/LogIn.jsx";
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
import AddBook from "@/pages/Books/AddBook/AddBook";
import EditBook from "@/pages/Books/EditBook";
import DeleteBook from "@/pages/Books/deleteBook";
import Home from "@/pages/home/Home";
import MangeBook from "@/pages/Books/MangeBook";



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
       {
        path: "manage-books",
        element: (
          <AdminRoutes>
          <MangeBook/>
          </AdminRoutes>
        ),
      },
    ],
  },
]);

export default router;
