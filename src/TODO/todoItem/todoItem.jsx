/*
 * @LastEditTime: 2022-04-01 02:02:32
 * @Description:
 * @Date: 2022-03-31 16:08:39
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.css";
import { CheckBox } from "@/components/CheckBox/index";
import { createRef } from "react";
export function TodoItem(props) {
  const CheckBoxRef = createRef();

  return (
    <div className="item">
      <div
        className={[props.todo.isCompoplete ? "item-left finish" : "item-left"]}
      >
        <div className="check-wrap">
          <CheckBox
            checkeds={props.todo.isCompoplete}
            onCheck={() => props.handleCheck(CheckBoxRef)}
            ref={CheckBoxRef}
            isCom={props.todo.isCompoplete}
          />
        </div>
        <div className="left-title-content">{props.todo.title}</div>
      </div>
      <div className="item-right">{props.children}</div>
    </div>
  );
}
