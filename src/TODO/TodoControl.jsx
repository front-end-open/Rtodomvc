/*
 * @LastEditTime: 2022-04-01 02:35:38
 * @Description: todo控制
 * @Date: 2022-03-31 00:24:13
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { Radio } from "@/components/CheckBox/Radio";
import { createRef, useEffect, useState } from "react";
import "./index.css";
import { TodoItem } from "./todoItem/todoItem";
import { Button } from "@/components/Button/index";
export default function TodoControl(props) {
  const [ipt, setInput] = useState(""); // input-valueState
  const [todos, setTodo] = useState([]);
  const [sourcetodo, setSourceTodo] = useState([]);
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
    let copystodo = sourcetodo;
    copystodo.push({
      idx: new Date().getTime(),
      title: ipt,
      updatetime: new Date().toLocaleDateString(),

      isCompoplete: false,
    });
    setTodo([...copytodo]); // 直接赋值copytod无效
    setSourceTodo([...copystodo]);
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
    setSourceTodo([]);
  }

  // 待办项过滤
  function handleCheckout(e) {
    // "All", "Active", "Complete"
    const copytodo = sourcetodo;
    switch (e.target.value) {
      case "All":
        setTodo([...sourcetodo]);
        break;
      case "Active":
        setTodo([...copytodo.filter((v) => !v.isCompoplete)]);
        break;
      default:
        setTodo([...copytodo.filter((v) => v.isCompoplete)]);
        break;
    }
  }

  function handleClick(id) {
    // 捕获按钮事件处理器
    // console.log(id);
    let copytodo = todos;
    copytodo = copytodo.filter((v) => {
      if (v.idx != id) {
        return true;
      }
    });
    let copystodo = sourcetodo;
    copystodo = copystodo.filter((v) => {
      if (v.idx != id) {
        return true;
      }
    });
    setTodo([...copytodo]);
    setSourceTodo([...copystodo]);
  }

  function handleCheck(ref, id) {
    const copytodo = todos;
    copytodo.forEach((v) => {
      if (v.idx === id) {
        v.isCompoplete = ref.current.checked;
      }
    });
    const copystodo = todos;
    copystodo.forEach((v) => {
      if (v.idx === id) {
        v.isCompoplete = ref.current.checked;
      }
    });
    setTodo([...copytodo]);
    setSourceTodo([...copystodo]);
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
          return (
            <TodoItem
              key={v.idx}
              todo={v}
              handleCheck={(ref) => handleCheck(ref, v.idx)}
            >
              <Button onClick={() => handleClick(v.idx)} />
            </TodoItem>
          );
        })}
      </div>
      {/* 底部控制 */}
      {sourcetodo.length ? (
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
