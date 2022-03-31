/*
 * @LastEditTime: 2022-04-01 00:50:07
 * @Description:
 * @Date: 2022-04-01 00:30:59
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.css";
export function Button(props) {
  return <button className="btn" onClick={props.onClick}></button>;
}
