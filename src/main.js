import { createApp } from 'vue'
import App from './App.vue'
import './assets/common.less'
import route from './router/index'
import icepro from '../index'

const app = createApp(App)
icepro.install(app)

app
    .use(route)
    .mount('#app')
