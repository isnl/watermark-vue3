# watermark-vue3

A lightweight Vue3 component for adding custom watermarks to web pages.

## Introduction

watermark-vue3 is a lightweight component based on Vue3 that allows you to add custom watermarks to your web pages. With this component, you can freely set watermark text, font size, font, color, rotation angle, opacity, width and height parameters to easily achieve the watermark effect.

## Installation

Install via npm:

```
npm install watermark-vue3
```

## Usage

1. Import Watermark component:

```vue
<template>
  <Watermark :options="options" :visible="true"/>
</template>

<script setup lang="ts">
import Watermark from 'watermark-vue3';

const options = {
  text: 'This is a watermark',
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

2. Add relative or fixed positioning to the element where you want to add watermark:

```css
.watermark-wrap {
  position: relative;
}
```

## Props

| Name    | Type    | Default                  | Description                                                                                                 |
| ------- | ------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| options | Object  | See default values below | Watermark settings, including text, font size, font, color, rotation angle, opacity, width and height, etc. |
| visible | Boolean | true                     | Whether the watermark is visible                                                                            |

### Default values for `options` prop

| Name       | Type            | Default              | Description                                            |
| ---------- | --------------- | -------------------- | ------------------------------------------------------ |
| text       | String \| Array | 'I am a watermark'   | Watermark text, can be a string or an array of strings |
| fontSize   | Number          | 14                   | Font size                                              |
| fontFamily | String          | 'Microsoft YaHei'    | Font                                                   |
| color      | String          | 'rgba(0, 0, 0, 0.3)' | Color                                                  |
| rotate     | Number          | -30                  | Rotation angle in degrees                              |
| opacity    | Number          | 0.5                  | Opacity                                                |
| width      | Number          | 200                  | Width                                                  |
| height     | Number          | 100                  | Height                                                 |

## Example

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
  text: ['For testing only', 'Not for commercial use'],
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