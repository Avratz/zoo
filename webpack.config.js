const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/js/index.js',
	output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'index.bundle.js',
  },
	plugins: [
		new HtmlWebpackPlugin({
			template: './src/index.html',
		})
	],
	module: {
		rules: [
			{
				test: /\.m?js$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
					{
            loader: 'resolve-url-loader'
          }, 
          {
            loader: "sass-loader",
            options: {
							implementation: require("sass"),
							sourceMap: true,
            },
          },
        ],
      },
			{
				test: /\.html$/i,
				loader: "html-loader",
			},
			{
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
		],
	},
	devServer: {
    static: {
      directory: path.join(__dirname, './src'),
    },
    compress: true,
    port: 9000,
  },
};
