<script setup>
const visible = ref(true);

const options = {
	text: ['免费ChatGPT', 'ChatGPTer', 'https://ai.iiter.cn'],
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
	width: 1200px;
	height: 400px;
	margin: 100px auto;
}
</style>
