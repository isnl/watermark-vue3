<script setup lang="ts" name="Watermark">
import { CSSProperties, onBeforeUnmount, onMounted, ref, watch } from 'vue';

interface Props {
	options: {
		text: string | string[];
		fontSize: number;
		fontFamily: String;
		color: string;
		rotate: number;
		opacity: number;
		width: number;
		height: number;
	};
	visible: boolean;
}
const defaultOptions = {
	text: '我是水印',
	fontSize: 14,
	fontFamily: 'Microsoft YaHei',
	color: 'rgba(0, 0, 0, 0.3)',
	rotate: -30,
	opacity: 0.5,
	width: 200,
	height: 100,
};

const props = defineProps<Props>();
const wrapperRef = ref<HTMLElement | null>(null);

const containerStyle: CSSProperties = {
	position: 'absolute',
	top: 0,
	left: 0,
	right: 0,
	bottom: 0,
	'pointer-events': 'none',
};

watch(
	() => props.visible,
	(val) => {
		wrapperRef.value!.style.display = val ? 'block' : 'none';
	}
);

onMounted(() => {
	let options: typeof defaultOptions | Props['options'];
	options = {
		...defaultOptions,
		...props.options,
	};
	const { text, fontSize, fontFamily, color, rotate, opacity, width, height } = options;
	const canvas = document.createElement('canvas');
	canvas.width = width;
	canvas.height = height;
	const ctx = canvas.getContext('2d')!;
	ctx.font = `${fontSize}px ${fontFamily}`;
	ctx.fillStyle = color;
	ctx.rotate((rotate * Math.PI) / 180);
	// 文本居中
	ctx.textAlign = 'center';
	if (Array.isArray(text)) {
		text.forEach((item, index) => {
			ctx.fillText(item, width / 2, height + 16 * index);
		});
	} else {
		ctx.fillText(text!, 0, height);
	}

	wrapperRef.value!.style.backgroundImage = `url(${canvas.toDataURL()})`;
	wrapperRef.value!.style.opacity = String(opacity!);
});

onBeforeUnmount(() => {
	if (wrapperRef.value) {
		wrapperRef.value.remove();
	}
});
</script>
<template>
	<div class="watermark-container" :style="containerStyle" ref="wrapperRef"></div>
</template>
