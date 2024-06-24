<template>
	<div>value {{ c }}</div>
</template>
<script setup>
import { value } from "./module4.js";
import { ref } from "vue";
let c = ref(3330);

setTimeout(() => {
	c.value = 9999;
}, 5000);
</script>
<style lang=""></style>
