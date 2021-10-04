const { merge } = require("webpack-merge");
const tsImportPluginFactory = require("ts-import-plugin");
const pxtoviewport = require("postcss-px-to-viewport");
const path = require("path");

function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  parallel: false,
  outputDir: process.env.BASE_URL,
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          modifyVars: {
            "text-color": "#111",
            "border-color": "#eee",
            hack: `true; @import "./src/theme/var.less";`
          }
        }
      },
    }
  },
  configureWebpack: {
    resolve: {
      alias: {
        "@": resolve("src"),
        "@assets": resolve("src/assets")
      }
    }
  },
  chainWebpack: config => {
    config.module
      .rule("ts")
      .use("ts-loader")
      // .tap(options => {
      //   options = merge(options, {
      //     transpileOnly: true,
      //     getCustomTransformers: () => ({
      //       before: [
      //         tsImportPluginFactory({
      //           libraryName: "vant",
      //           libraryDirectory: "es",
      //           style: name => `${name}/style/less`
      //           // style: true
      //         })
      //       ]
      //     }),
      //     compilerOptions: {
      //       module: "es2015"
      //     }
      //   });
      //   return options;
      // });
  }
}