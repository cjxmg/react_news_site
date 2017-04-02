//babel-plugin-import 的配置
const options = [
  {
    "libraryName": "antd",
    "libraryDirectory": "lib",   // default: lib
    "style": "css"    //按需自动引入css文件
  },
  {
    "libraryName": "antd-mobile",
    "libraryDirectory": "component"
  }
];


module.exports = {
  entry: __dirname + '/src/js/root.js',
  output: {
    path: __dirname + '/src/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'], //设定babel的转码规则
          "plugins": [
            ["import", { libraryName: "antd", "style": "css" }] // `style: true` 会加载 less 文件
          ]
        }
      },
      {
        test: /\.css$/,
        loader: 'style!css-loader'
      }
    ]
  }
}
