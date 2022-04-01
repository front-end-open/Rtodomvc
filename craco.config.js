/*
 * @Author: wangshan
 * @Date: 2022-02-26 02:21:24
 * @LastEditors: wangshan
 * @LastEditTime: 2022-04-01 16:42:54
 * @Description:
 */
const path = require("path");
const CracoLessPlugin = require("craco-less");
const pathRsolve = (pth) => path.join(__dirname, pth);

module.exports = {
  webpack: {
    alias: {
      "@": pathRsolve("src"),
    },

    plugins: [
      //   new HtmlWebpackPlugin({
      //     title: "RTodo-App",
      //     filename: "./public/index.html",
      //     // template: "./public/index.html",
      //     base: "/resume",
      //   }),
    ],
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { "@primary-color": "#1DA57A" },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
};
