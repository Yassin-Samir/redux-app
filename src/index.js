//@ts-nocheck
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import "./css/main.css";
import { Provider } from "react-redux";
import store from "./redux/store";
let main = ReactDOM.createRoot(document.querySelector(".root"));
main.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
