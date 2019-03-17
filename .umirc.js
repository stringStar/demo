// ref: https://umijs.org/config/
import pxtorem from "postcss-pxtorem";
export default {
  plugins: [
    // ref: https://umijs.org/plugin/umi-plugin-react.html
    [
      "umi-plugin-react",
      {
        antd: false,
        dva: false,
        dynamicImport: false,
        title: "小金桔",
        dll: false,
        hardSource: false,
        routes: {
          exclude: [/components/]
        },
        hd: true
      }
    ]
  ],
  history: "browser",
  hash: true,
  extraBabelPlugins: [["import", { libraryName: "antd-mobile", style: "css" }]],
  extraPostCSSPlugins: [],
  proxy: {
    "/api": {
      target: "http://111.231.245.235/",
      changeOrigin: true,
      pathRewrite: { "^/api": "/api" }
    },
    "/index": {
      target: "http://111.231.245.235/",
      changeOrigin: true,
      pathRewrite: { "^/index": "/index" }
    },
    "/root": {
      target: "http://111.231.245.235",
      changeOrigin: true,
      pathRewrite: { "^/root": "/root" }
    }
  }
};
