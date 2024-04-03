import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

const project = ReactDOM.createRoot(document.getElementById("root"));
project.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
