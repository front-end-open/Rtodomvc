/*
 * @LastEditTime: 2022-03-31 23:11:51
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
      <div className="item-left">
        <div style={{ width: "100px", height: "100%" }}>
          <CheckBox ref={CheckBoxRef} />
        </div>
      </div>
      <div className="item-right"></div>
    </div>
  );
}
