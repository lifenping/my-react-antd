/**
 * web2.0新特性：
 * 混用 ES6、AMD 和 CommonJS 模块
 * Webpack 2 将增加对 ES6 模块的原生支持。这意味着 Webpack 现在可以识别 import 和 export 了，不需要先把它们转换成 CommonJS 模块的格式：
 * web2.0 No webpack.optimize.OccurenceOrderPlugin，那么在2.0里，为默认功能，无需再手动添加到配置里
 * 
 */
const path = require('path'); // node 原生path模块
const webpack = require('webpack'); // webpack
const glob = require('glob'); // glob模块，用于读取webpack入口目录文件

const ExtractTextPlugin = require('extract-text-webpack-plugin'); // webpack插件
const HtmlWebpackPlugin = require('html-webpack-plugin'); // webpack插件
// const OpenBrowserPlugin = require('open-browser-webpack-plugin');//webpack插件
// const CleanPlugin = require('clean-webpack-plugin')//webpack插件，用于清除目录文件
const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;// 处理trunk
// 在每次构建前清理 /dist 文件夹，只会生成用到的文件
// const CleanWebpackPlugin = require('clean-webpack-plugin')

const env = process.env.NODE_ENV

// const extractLess = new ExtractTextPlugin({
// 	filename: "[name].[contenthash].css"
// 	// disable: process.env.NODE_ENV === "development"
// });

// var getEntry = function () {
// 	var entry = {}; //读取开发目录,并进行路径裁剪 
// 	glob.sync('./src/web/**/*.js').forEach(function (name) {
// 		var start = name.indexOf('src/web/') + 8, end = name.length - 3;
// 		var n = name.slice(start, end);
// 		n = n.slice(0, n.lastIndexOf('/')); //保存各个组件的入口 
// 		entry[n] = name;
// 	}); 
// 	return entry;
// };

module.exports = {
	devtool: 'cheap-module-source-map',
	// entry: getEntry(),
	entry: {
		main: './src/web/desktop/app'
	},
	output: {
		path: path.resolve(__dirname, 'docs'),
		filename: '[name].js'
	},

	// web2.0配置有所变动：resolve.modulesDirectories => resolve.modules
	resolve: {
		// 模块目录
		modules: ["common", "node_modules"],
		extensions: ['.js', '.jsx', '.vue'],
		alias: {
			// 'vue$': 'vue/dist/vue.js'
		}
	},
	/**
	 * 1 modules.loaders 后续会被废除z应用：modules.rules
	 * 2 webpack2.0 可以在module.rules中用user的相应loder子添加相应的options属性,如下所示：
	 * use: [
		{
			loader: 'postcss-loader',
				options: {
				plugins: ...
				}
		},
		'sass-loader'
		]
	 * 不再支持以下写法：
	 * babel: {
			presets: ['react', 'es2015'],
			plugins: ['transform-runtime']
		}
	 */
	module: {
		rules: [{
			// jsx 文件应用babel-loader
			test: /\.jsx?$/,
			exclude: /(node_modules)/,
			// include: path.resolve(ROOT_PATH, 'node_modules'),
			use:
				[/* 'eslint-loader', */ {
					loader: 'babel-loader',
					// .babelrc 文件有定义
					options: {
						"presets": [
							"react",
							["es2015", { "modules": false }],
							"stage-0"
						],
						"plugins": [["import", { "libraryName": "antd", "style": true }]]
					}
				}]

		},
		// 使用css modules
		{
			test: /\.(css|less)$/,
			exclude: [
				path.resolve(__dirname, 'node_modules'),
				path.resolve(__dirname, 'src/web/desktop/common')
			],
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: [{
					loader: "css-loader",
					options: {
						modules: true,
						localIdentName: '[local]--[hash:base64:5]'
					}
				}, {
					loader: "less-loader",
					options: {
						modules: true,
						localIdentName: '[local]--[hash:base64:5]'
					}
				}]
			})

		},
		// 不使用css modules
		{
			test: /\.(css|less)$/,
			include: [
				path.resolve(__dirname, 'node_modules'),
				path.resolve(__dirname, './src/web/desktop/common')
			],
			use: ExtractTextPlugin.extract({
				fallback: "style-loader",
				use: ["css-loader", "less-loader"]
			})
		},


		// 图片相关loader
		{
			test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
			// loader: 'url-loader',
			loader: 'file-loader',
			options: {
				limit: 10000
			}
		}, { // 加载字体文件, 路径为[path][name].ext
			test: /\.(eot|svg|ttf|woff|woff2)$/,
			// loader: 'file-loader?name=[path][name].[ext]?[hash]',
			loader: 'file-loader',
			options: {
				name: "[path][name].[ext]?[hash]"
			}
		}, {
			test: /\.md$/,
			// loader: 'babel-loader!markdown-component-loader',
			use:
				// ['babel-loader', 'markdown-loader', 'react-markdown', 'html-loader', 'md-to-react',"raw-loader"]
				['react-markdown', "raw-loader", 'json-loader']
		},
		{
			test: /\.json$/,
			use: ['json-loader']
		}
		]
	},

	plugins: [
		// new CleanWebpackPlugin(['docs']),
		// new ExtractTextPlugin("[name].css"),
		new ExtractTextPlugin('[name].[hash].css'),
		// 创建HtmlWebpackPlugin的实例
		new HtmlWebpackPlugin({
			filename: './index.html',
			template: path.resolve(__dirname, './src/web/desktop/index.html'),
			favicon: '',
			inject: true
		}),

		// 第三方库单独打包
		new webpack.optimize.CommonsChunkPlugin({
			names: ["index"],
			children: true,
			minChunks: 3
		}),

		// 全局引入jquery：
		// new webpack.ProvidePlugin({
		// 	$: "jquery",
		// 	jQuery: "jquery",
		// 	"window.jQuery": "jquery"
		// })
	],

	devServer: {
		port: 1111,
		historyApiFallback: true,
		hot: true,
		inline: true,
		proxy: {
			'/api/*': {
				target: `http://127.0.0.1:1112`,
				secure: false
			}
		}
	}
}
