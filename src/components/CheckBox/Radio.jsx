/*
 * @LastEditTime: 2022-04-01 02:37:41
 * @Description:
 * @Date: 2022-04-01 00:58:07
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import { forwardRef } from "react";
import "./index.css";
export const Radio = forwardRef((props, ref) => {
  return (
    <div className="Radio">
      <label htmlFor={props.status}>
        <input
          defaultChecked={props.status === "All" ? true : false}
          id={props.status}
          name="status"
          value={props.status}
          type="radio"
          ref={ref}
          onChange={props.onCheckout}
        />
        {props.status}
      </label>
    </div>
  );
});
