简介：

vue3 版本的 leaflet 组件, leaflet 版本基于 @1.9.3

##### 安装

```bash
npm i vuleaflet -S
```

##### 使用

在`main.js`中引入并全局注册

```js
import Vuleaflet from 'vuleaflet';
import 'vuleaflet/lib/style.css';

app.use(Vuleaflet);
```

在需要使用的组件中使用

```vue
<script setup>
const onReady = (mapInstance) => {
	console.log(mapInstance);
	console.log('L', L);
};
</script>

<template>
	<div class="wrapper">
		<VuLeaflet @onReady="onReady" />
	</div>
</template>

<style scoped>
.wrapper {
	width: 1200px;
	height: 400px;
	margin: 100px auto;
}
</style>
```

##### 属性

| 属性名        | 类型            | 默认值                     | 说明                                                   |
| ------------- | --------------- | -------------------------- | ------------------------------------------------------ |
| zoom          | Number          | 5                          | 地图缩放级别                                           |
| center        | Array \| Object | { lat: 36.58, lng: 98.97 } | 地图中心点                                             |
| showBaseLayer | Boolean         | true                       | 是否加载地图，默认使用天地图影像                       |
| config        | Object          | {}                         | 其他额外参数，透传 leaflet 初始化参数的 `Options` 选项 |

##### 方法

| 方法名称 | 说明                                         | 回调参数                |
| -------- | -------------------------------------------- | ----------------------- |
| onReady  | 底图初始化完成后的回调，第一个参数为地图实例 | `Function(mapInstance)` |
