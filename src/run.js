let webpack = require("../lib/index");
let path = require("path");

try {
	let compiler = webpack({
		entry: path.resolve(__dirname, "index.js"),
		mode: "development",
		output: {
			filename: "bundle2222.js"
		}
	});
	compiler.run();
} catch (error) {
	console.log("error", error);
}

console.log(111);
