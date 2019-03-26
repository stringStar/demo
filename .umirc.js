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
        title: "中广核检测欧标NDT无损检测2019课程报名",
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
  extraBabelPlugins: [["import", { libraryName: "antd-mobile", style: true }]],
  theme: {
    hd: "2px"
  },
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
