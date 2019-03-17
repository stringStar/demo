module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        include: /node_modules|antd-mobile\.css/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader"
          },
          {
            loader: "pxrem-loader",
            options: {
              root: 36,
              fixed: 8
            }
          }
        ]
      }
    ]
  }
};
