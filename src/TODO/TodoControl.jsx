/*
 * @LastEditTime: 2022-03-31 18:17:44
 * @Description: todo控制
 * @Date: 2022-03-31 00:24:13
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { useEffect, useState } from "react";
import "./index.css";
import { TodoItem } from "./todoItem/todoItem";
export default function TodoControl(props) {
  const [ipt, setInput] = useState(""); // input-valueState
  const [todos, setTodo] = useState([]);
  //   useEffect(() => {
  //     console.log(todos);
  //   });

  // 添加待办
  function handleAddTodo() {
    let copytodo = todos;
    copytodo.push({
      idx: new Date().getTime(),
      title: ipt,
      updatetime: new Date().toLocaleDateString(),

      isCompoplete: true,
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

      {todos.map((v) => {
        return <TodoItem key={v.idx} todo={v} />;
      })}
    </div>
  );
}
