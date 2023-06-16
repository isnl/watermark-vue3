**[English Document](./README.en.md)**
# watermark-vue3

一个可以在网页中添加自定义水印的Vue3组件。

## 简介

watermark-vue3是一个基于Vue3编写的用于在网页中添加自定义水印的轻量级组件。使用该组件，您可以自由设置水印文字、字体大小、字体、颜色、旋转角度、透明度、宽度和高度等参数，轻松实现水印效果。

## 安装

通过npm安装：

```
npm install watermark-vue3
```

## 使用方法

1. 引入Watermark组件：

```vue
<template>
  <Watermark :options="options" :visible="true"/>
</template>

<script setup lang="ts">
import Watermark from 'watermark-vue3';

const options = {
  text: '我是水印',
  fontSize: 14,
  fontFamily: 'Microsoft YaHei',
  color: 'rgba(0, 0, 0, 0.3)',
  rotate: -30,
  opacity: 0.5,
  width: 200,
  height: 100,
};
</script>
```

2. 在要添加水印的元素上加上相对或固定定位：

```css
.watermark-wrap {
  position: relative;
}
```

## 属性

| 属性名  | 类型    | 默认值       | 说明                                                                     |
| ------- | ------- | ------------ | ------------------------------------------------------------------------ |
| options | Object  | 见下方默认值 | 水印设置，包括文字、字体大小、字体、颜色、旋转角度、透明度、宽度和高度等 |
| visible | Boolean | true         | 是否显示水印                                                             |

### options属性的默认值

| 属性名     | 类型            | 默认值               | 说明                         |
| ---------- | --------------- | -------------------- | ---------------------------- |
| text       | String \| Array | '我是水印'           | 水印文字，字符串或字符串数组 |
| fontSize   | Number          | 14                   | 字体大小                     |
| fontFamily | String          | 'Microsoft YaHei'    | 字体                         |
| color      | String          | 'rgba(0, 0, 0, 0.3)' | 颜色                         |
| rotate     | Number          | -30                  | 旋转角度，单位为度数         |
| opacity    | Number          | 0.5                  | 透明度                       |
| width      | Number          | 200                  | 宽度                         |
| height     | Number          | 100                  | 高度                         |

## 示例

```vue
<template>
  <div class="watermark-wrap">
    <img src="image.jpg" alt="">
    <Watermark :options="options" :visible="true"/>
  </div>
</template>

<script setup lang="ts">
import Watermark from 'watermark-vue3';

const options = {
  text: ['仅供测试使用', '请勿商用'],
  fontSize: 18,
  fontFamily: 'Arial',
  color: 'rgba(255, 0, 0, 0.2)',
  rotate: -45,
  opacity: 0.6,
  width: 300,
  height: 150,
};
</script>

<style scoped>
.watermark-wrap {
  position: relative;
}
</style>
```