import {createApp} from 'vue'
import App from './App.vue'
import './assets/common.less'
import route from './router/index'
import icepro from '../index'
import {findColor} from "./hooks/tools.js";

const app = createApp(App)

// console.log(icepro.components)

// const keys = Object.keys(icepro.components)

/*keys.map(item => {
    console.log(icePro.components[item])
})*/

icepro.install(app)
app.config.globalProperties.findColor = findColor
app
    .use(route)
    .mount('#app')
