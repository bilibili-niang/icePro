<span><div style="text-align: center;">![](src\assets\png\logo.png)</div></span>
<hr/>

基于 Vue 3 和 Vite,为我的个人项目开发的ui框架

> [预览地址](http://icepro.icestone.work/),这个是线上部署版本,可能会落后

> [npm地址](https://www.npmjs.com/package/icepro)

usage:

```shell
// shell
npm i icepro --save -d
```

`main.js`:

```javascript
import {createApp} from 'vue'
import App from './App.vue'
import 'icepro/assets/common.less'
import icepro from 'icepro'

const app = createApp(App)

app
  .use(icepro)
  .mount('#app')
```

> 鸣谢:

> 感谢 [jw-ui](https://coderyjw.github.io/jw-ui-website/#/home)的源码,让我可以有参考的代码

<hr/>

> 更新日志

__*2024.03.16*__  
修复button在某些炫酷效果下的文字颜色不对的bug

__*2024.03.15*__  
新增`colorSelector`颜色选择器


__*2024.02.28*__

version:`1.1.19`  
新增`ice-textarea`输入框组件  
修复`ice-input`组件的占位文字的z-index层级bug  
修改了readme中的image语法,修改部分洋文为中文

__*2023.12.10*__

version:`1.1.10`  
新增语义化标签,`ice-header`


