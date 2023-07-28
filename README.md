> Based on Vue 3, Vite UI. It's a UI that I wrote for fun, but it's not something serious.

Currently still in development, the goal is to create a UI framework that I can use for my own projects, even though it's just for fun.

`usage`:  
use it in you `main.js`:

import common.less

and

```vue
import { createApp } from 'vue'
import App from './App.vue'
import 'icepro/assets/common.less'
import icepro from 'icepro'

const app = createApp(App)

app
    .use(icepro)
    .mount('#app')
```



