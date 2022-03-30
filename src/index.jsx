/*
 * @LastEditTime: 2022-03-31 00:38:30
 * @Description:
 * @Date: 2022-03-29 17:56:47
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import ReactDOM from "react-dom";
import "@/style/index.css";
import App from "./App";
import { store } from "./app/store";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
