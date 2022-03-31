/*
 * @LastEditTime: 2022-03-31 23:12:15
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
      <input type="checkbox" ref={ref} />
    </div>
  );
});
