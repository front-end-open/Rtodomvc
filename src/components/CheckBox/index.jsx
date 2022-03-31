/*
 * @LastEditTime: 2022-04-01 00:17:17
 * @Description: CheckBox
 * @Date: 2022-03-31 22:48:17
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.css";
import { forwardRef } from "react";

export const CheckBox = forwardRef((props, ref) => {
  return (
    <div className="CheckBox">
      <input type="checkbox" defaultChecked={props.isCom} ref={ref} />
    </div>
  );
});