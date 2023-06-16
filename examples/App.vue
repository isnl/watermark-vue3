<script setup>
import { ref } from 'vue';
const visible = ref(true);

const options = {
	text: ['Watermark-vue3', 'vue3页面水印'],
	fontSize: 14,
	fontFamily: 'Microsoft YaHei',
	color: 'rgba(0, 0, 0, 0.8)',
	rotate: -30,
	opacity: 0.5,
	width: 200,
	height: 100,
};
</script>

<template>
	<div class="wrapper">
		<Watermark :visible="true" :options="options" />
	</div>
</template>

<style scoped>
.wrapper {
	width: 800px;
	height: 400px;
	margin: 100px auto;
}
</style>
