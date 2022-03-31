/*
 * @LastEditTime: 2022-04-01 01:00:15
 * @Description:
 * @Date: 2022-04-01 00:58:07
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import "./index.css";
export const Radio = forwardRef((props, ref) => {
  return (
    <div className="Radio">
      <input type="radio" ref={ref} />
    </div>
  );
});
