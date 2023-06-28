import React from "react";
import ReactDOM from "react-dom/client";
import Home from "../src/components/Home/Home";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import AddAnimal from "./components/AddAnimal/AddAnimal";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>,
  },
  {
    path: "/add-animal",
    element: <AddAnimal />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
