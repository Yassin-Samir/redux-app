//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./css/main.css";
import Nav from "./components/nav/nav";
import { Provider } from "react-redux";
import store from "./redux/store";
import { BrowserRouter, Route, Routes } from "react-router-dom";
let main = ReactDOM.createRoot(document.querySelector(".root"));
main.render(
  <React.StrictMode>
    <Provider store={store}>
      <Nav />
      <App />
    </Provider>
  </React.StrictMode>
);
