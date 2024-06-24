let webpack = require("../lib/index");
let path = require("path");
let getResolvedPlugin = require("./getResolvedPlugin");
const { VueLoaderPlugin } = require("vue-loader");
const TerserPlugin = require("terser-webpack-plugin");

try {
	// eslint-disable-next-line no-unused-vars
	let compiler = webpack(
		{
			entry: path.resolve(__dirname, "index.js"),
			mode: "development",
			output: {
				filename: "[name].js"
			},
			plugins: [new getResolvedPlugin(), new VueLoaderPlugin()],
			watch: true,
			module: {
				rules: [
					// ... 其它规则
					{
						test: /\.vue$/,
						loader: "vue-loader"
					}
				]
			},
			optimization: {
				minimize: true,
				minimizer: [
					new TerserPlugin({
						terserOptions: {
							format: {
								comments: false,
								beautify: true // 保持代码格式
							},
							mangle: false,
							compress: {
								drop_console: false, // 不删除console语句
								dead_code: false // 不移除未使用的代码
							}
						},
						extractComments: false
					})
				],
				splitChunks: {
					cacheGroups: {
						commons: {
							test: /[\\/]node_modules[\\/]/,
							// cacheGroupKey here is `commons` as the key of the cacheGroup
							name: "vendor",
							chunks: "all"
						}
					}
				}
			}
		},
		(err, watchDetail) => {
			console.log("err", err);
			console.log("ddd", watchDetail);
		}
	);
	// compiler.run((err, stats) => {
	//   let statsJson = stats.toJson();
	//   require('fs').writeFileSync(`${__dirname}/out.json`, JSON.stringify(statsJson))
	//   // console.log('ddd', statsJson)
	// });
} catch (error) {
	console.log("error", error);
}

console.log(111);
