<div align=center>
<img src="http://icepro.icestone.work/src/assets/png/logo.png" width="123px" height="123px" />
</div>
<hr/>

基于 Vue 3 和 Vite,为我的个人项目开发的ui框架

> experience [address](http://icepro.icestone.work/),The current online version may lag far behind

> [npm address](https://www.npmjs.com/package/icepro)

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


__*2023.12.10*__

新增语义化标签,`ice-header`
