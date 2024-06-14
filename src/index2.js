let a = {
	value1: {
		name: "mm",
		value: 12
	},
	value2: 12
};

let af = Object.freeze(a);

af.value3 = 122;
a.value3 = 122;
af.value1.dd = 1111;
console.log(af === a, a, af);
