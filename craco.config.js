/*
 * @Author: wangshan
 * @Date: 2022-02-26 02:21:24
 * @LastEditors: wangshan
 * @LastEditTime: 2022-04-01 17:17:02
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
    configure: (webpackConfig, { env, paths }) => {
      webpackConfig.output.publicPath = "/Rtodomvc";
      return webpackConfig;
    },
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
