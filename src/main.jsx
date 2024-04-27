import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import routers from "./router/routes"
import { RouterProvider } from "react-router-dom"
import { UsersContextProvider } from './context/usersContext'

ReactDOM.createRoot(document.getElementById("root")).render(
  <UsersContextProvider>
    <RouterProvider router={routers}>
      <App />
    </RouterProvider>
  </UsersContextProvider>
);
