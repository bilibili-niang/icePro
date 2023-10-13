<div align=center>
<img src="http://icepro.icestone.work/src/assets/png/logo.png" width="123px" height="123px" />
</div>
<hr/>

基于 Vue 3 和 Vite，这是一个我为了好玩而编写的ui框架

目前仍在开发中，目标是创建一个我可以在自己的项目中使用的 UI 框架

> 体验[地址](http://icepro.icestone.work/),目前线上版本可能会落后很多

使用方法： 在你的 main.js 文件中导入样式：
```javascript
import common.less
```
然后在你的`main.js`组件中使用：

```javascript
import { createApp } from 'vue'
import App from './App.vue'
import 'icepro/assets/common.less'
import icepro from 'icepro'

const app = createApp(App)

app
.use(icepro)
.mount('#app')
```

> 鸣谢:

感谢 [jw-ui](https://coderyjw.github.io/jw-ui-website/#/home)的源码,让我可以有参考的代码
