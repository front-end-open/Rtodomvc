/*
 * @LastEditTime: 2022-04-01 16:34:01
 * @Description:
 * @Date: 2022-04-01 16:32:51
 * @Author: wangshan
 * @LastEditors: wangshan
 */
const HtmlWebpackPlugin = require("html-webpack-plugin");
export class HtmlBasePathPlugin {
  apply(compiler) {
    compiler.hooks.compilation.tap("HtmlBasePathPlugin", (compilation) => {
      HtmlWebpackPlugin.getHooks(compilation).beforeAssetTagGeneration.tapAsync(
        "HtmlBasePathPlugin", // <-- Set a meaningful name here for stacktraces
        (data, cb) => {
          // Manipulate the publicPath
          data.assets.publicPath = "Rtodomvc/" + data.assets.publicPath;
          // Tell webpack to move on
          cb(null, data);
        }
      );
    });
  }
}
