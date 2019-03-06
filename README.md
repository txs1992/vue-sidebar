<h1 align="center">
	vue-menu-sidebar
</h1>

<p align="center">
  <a href="http://img.shields.io/travis/txs1992/vue-menu-sidebar.svg">
    <img src="http://img.shields.io/travis/txs1992/vue-menu-sidebar.svg" />
  </a>
  <a href="https://img.shields.io/npm/dt/vue-menu-sidebar.svg">
    <img src="https://img.shields.io/npm/dt/vue-menu-sidebar.svg" />
  </a>
  <a href="https://img.shields.io/npm/dm/vue-menu-sidebar.svg">
    <img src="https://img.shields.io/npm/dm/vue-menu-sidebar.svg" />
  </a>
  <a href="https://img.shields.io/npm/v/vue-menu-sidebar.svg">
    <img src="https://img.shields.io/npm/v/vue-menu-sidebar.svg" />
  </a>
  <a href="https://img.shields.io/npm/l/vue-menu-sidebar.svg">
    <img src="https://img.shields.io/npm/l/vue-menu-sidebar.svg" />
  </a>
  <a href="https://img.shields.io/node/v/passport.svg">
    <img src="https://img.shields.io/node/v/passport.svg" />
  </a>
</p>

## 使用示例
[CDN 引入查看在线示例](https://codepen.io/taoxusheng/pen/MxJwmm)

```vue
<template>
	<div>
		<menu-sidebar : visible ="visible"></menu-sidebar>
	</div>
</template>

<script>
import MenuSidebar from 'vue-menu-sidebar'

export default {
	data() {
		return {
			visible: true
		}
	},

	components: {
		MenuSidebar
	}
}
</script>
```


## 属性配置

| 属性 | 描述 | 类型 | 默认值 |
| ---- | ---- | ---- | ---- |
| visible | 控制 sidebar 组件是否展开，默认折叠。 | Boolean | false |
| width | sidebar 组件内容区的宽度，默认 300 像素 | String | 300px |
| placement | sidebar 组件展示位置，默认左侧 | String | left |
