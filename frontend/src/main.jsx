import "./index.css";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";

const approuter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
       path:"/",
       element:<h1>App</h1>
      },
      {
        path:"/about",
        element:<h2>the element is about</h2>
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={approuter} />
  </React.StrictMode>
);
