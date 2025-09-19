import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import Home from "./pages/home/Home.jsx";
import Login from "./pages/home/LogIN.jsx";
import Register from "./pages/home/Register.jsx";
import Cart from "./pages/home/Cart.jsx";



const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
       path:"/",
       element:<Home/>
      },
      {
        path:"/checkout",
        element:<h2>the element is about</h2>
      },{
        path:"/dashboard",
        element:<h2>the element is about</h2>
      },{
        path:"/login",
        element:<Login/>
      },{
        path:"/register",
        element:<Register/>
      },{
        path:"/cart",
        element:<Cart/>
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={approuter} />
  </React.StrictMode>
);
