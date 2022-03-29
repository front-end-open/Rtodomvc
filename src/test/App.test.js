/*
 * @LastEditTime: 2022-03-29 18:22:21
 * @Description:
 * @Date: 2022-03-29 17:56:47
 * @Author: wangshan
 * @LastEditors: wangshan
 */
import React from "react";
import { render } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../app/store";
import App from "../App";

test("renders learn react link", () => {
  const { getByText } = render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  expect(getByText(/learn/i)).toBeInTheDocument();
});
