const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

// Функция, возвращающая настройки Dev Server, если задан режим разработки
const devServerConfig = (mode) =>
  mode === 'development'
    ? { devServer: { open: true, hot: true, port: 8080 } }
    : {};

module.exports = (env) => {
  const isDevelopment = env.mode === 'development'; // Используем свойство mode

  return {
    mode: isDevelopment ? 'development' : 'production',
    entry: './src/index.js',
    output: {
      path: path.resolve(__dirname, 'dist'), // Выходная директория
      filename: 'bundle.js',
      clean: true,
    },
    performance: {
      hints: false, // Полностью отключаем предупреждения о производительности
      maxAssetSize: 5 * 1024 * 1024, // Новый предел размера отдельного файла (5 MB)
      maxEntrypointSize: 5 * 1024 * 1024, // Новый предел размера входной точки (5 MB)
    },
    plugins: [
      new HtmlWebpackPlugin({ template: './src/index.html' }),
      new MiniCssExtractPlugin(),
    ],
    module: {
      rules: [
        {
          test: /\.(?:ico|png|jpg|jpeg|svg)$/i,
          type: 'asset/resource',
        },
        {
          test: /\.html$/i,
          loader: 'html-loader',
        },
        {
          test: /\.css$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader'],
        },
        {
          test: /\.scss$/i,
          use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
        },
      ],
    },
    ...devServerConfig(env.mode),
  };
};