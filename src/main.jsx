import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import App from "./App.jsx";
import "./index.css";
import Alure from "./Pages/alure.jsx";
import Atlantis from "./Pages/atlantis.jsx";
import Island from "./Pages/island.jsx";
import Signature from "./Pages/signature.jsx";
import Test from "./Pages/test.jsx";

const router = createBrowserRouter([
  {
    path: "/test",
    element: <Test />,
  },
  {
    path: "/Alure",
    element: <Alure />,
  },
  {
    path: "/Island",
    element: <Island />,
  },
  {
    path: "/Atlantis",
    element: <Atlantis />,
  },
  {
    path: "/Signature",
    element: <Signature />,
  },
  {
    path: "/",
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
