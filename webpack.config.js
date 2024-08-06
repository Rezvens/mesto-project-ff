const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin'); 

module.exports = { // module.exports — это синтаксис экспорта в Node.js 
  entry: { main: './src/index.js'},
  output: { // указали, в какой файл будет собираться весь js, и дали ему имя 
    path: path.resolve(__dirname, 'dist'), // переписали точку выхода, используя утилиту path 
    filename: 'main.js',
    publicPath: ''
  },
  mode: 'development',
  devtool: "eval-source-map",
  devServer: {
    static: path.resolve(__dirname, './dist'), // путь, куда "смотрит" режим разработчика
    compress: true, // это ускорит загрузку в режиме разработки
    port: 8080, // порт, чтобы открывать сайт по адресу localhost:8080, но можно поменять порт
    open: false // сайт будет открываться сам при запуске npm run dev
  },
  module: {
  rules: [ // rules — это массив правил
    { // добавим в него объект правил для бабеля
    test: /\.js$/, // регулярное выражение, которое ищет все js файлы
    use: 'babel-loader', // при обработке этих файлов нужно использовать babel-loader
    exclude: '/node_modules/' // исключает папку node_modules, файлы в ней обрабатывать не нужно
    },
    {
      // регулярное выражение, которое ищет все файлы с такими расширениями
      test: /\.(png|svg|jpg|gif|woff(2)?|eot|ttf|otf)$/,
      type: 'asset/resource'
    },
    {
      
      test: /\.css$/, // применять это правило только к CSS-файлам

      use: [MiniCssExtractPlugin.loader, {       // при обработке этих файлов нужно использовать MiniCssExtractPlugin.loader и css-loader
        loader: 'css-loader',
        options: { importLoaders: 1 }
      },
      'postcss-loader'] // Добавьте postcss-loader
    }, 
  ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html'
    }),
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin()
  ]
}