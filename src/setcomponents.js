const { createApp } = require("vue");
let ccVue = require("./cc.vue");

// eslint-disable-next-line no-undef
window.onload = () => {
	console.log("ccc", createApp);
	createApp({
		data() {
			return {
				message: "Hello Vue!"
			};
		},
		components: {
			ccVue: ccVue.default
		},
		template: `
      <div>value ha</div>
      <ccVue></ccVue>
    `
	}).mount("#app");
};
