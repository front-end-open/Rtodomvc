/*
 * @LastEditTime: 2022-04-01 01:44:42
 * @Description: todo控制
 * @Date: 2022-03-31 00:24:13
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Radio } from "@/components/CheckBox/Radio";
import { createRef, useEffect, useState } from "react";
import "./index.css";
import { TodoItem } from "./todoItem/todoItem";
export default function TodoControl(props) {
  const [ipt, setInput] = useState(""); // input-valueState
  const [todos, setTodo] = useState([]);
  //   useEffect(() => {

  const ref = createRef();

  // 添加待办
  function handleAddTodo() {
    let copytodo = todos;
    copytodo.push({
      idx: new Date().getTime(),
      title: ipt,
      updatetime: new Date().toLocaleDateString(),

      isCompoplete: false,
    });
    setTodo([...copytodo]); // 直接赋值copytod无效
    handleResetInput();
  }
  function handleEnter(e) {
    if (e.keyCode == 13 && e.target.value) {
      handleAddTodo();
    } else {
      console.warn("请输入合法值");
    }
  }

  // 重置输入
  function handleResetInput() {
    setInput("");
  }
  function handleResetTodos() {
    setTodo([]);
  }

  // 待办项过滤
  function handleCheckout(e) {
    console.log(e);
  }

  return (
    <div className="todo-wrap">
      <button onClick={handleResetTodos}>reset</button>
      <input
        type="text"
        value={ipt}
        onKeyDown={handleEnter}
        onChange={(e) => setInput(e.target.value)}
      />
      <div>{ipt}</div>

      <div>
        {todos.map((v) => {
          return <TodoItem key={v.idx} todo={v} />;
        })}
      </div>
      {/* 底部控制 */}
      {todos.length ? (
        <div className="bottom-control">
          <div className="radio-group">
            {["All", "Active", "Complete"].map((v) => (
              <Radio status={v} key={v} ref={ref} onCheckout={handleCheckout} />
            ))}
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}
