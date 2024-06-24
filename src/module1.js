let module3 = require("./module3");
// let vueCc = 12
let vueCc = require("./cc.vue");
// eslint-disabled
let value2 = require("./setComponents.js");
console.log("value", value2);
let ca = module3.value;
var stay = null;
if (module.value > 12) {
	stay = require("./module4");
}

module.exports = {
	stay,
	ca,
	vueCc,
	name: "module1",
	title: "this is module1"
};
