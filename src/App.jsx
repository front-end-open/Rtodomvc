/*
 * @LastEditTime: 2022-04-01 03:15:10
 * @Description:
 * @Date: 2022-03-29 17:56:47
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
// import logo from "./logo.svg";
// import { Counter } from "./features/counter/Counter";
import "@/style/App.css";
import TodoControl from "./TODO/TodoControl";
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Counter />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <span>
          <span>Learn </span>
          <a
            className="App-link"
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux
          </a>
          <span>, </span>
          <a
            className="App-link"
            href="https://redux-toolkit.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Redux Toolkit
          </a>
          ,<span> and </span>
          <a
            className="App-link"
            href="https://react-redux.js.org/"
            target="_blank"
            rel="noopener noreferrer"
          >
            React Redux
          </a>
        </span>
      </header> */}
      <h3>TODOS</h3>
      <TodoControl />
    </div>
  );
}

export default App;
