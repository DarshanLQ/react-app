import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./pages/error";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Inventory from "./pages/inventory/inventory.jsx";
import { Spinner } from "react-bootstrap";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/inventory_report",
        element: <Inventory />,
      },
    ],
  },
]);
//15c48b591eaf8673e14748d4bf694da6

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
