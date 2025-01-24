import './assets/variables.less'
import {createApp} from "vue"
import App from "./App.vue"
import "./assets/common.less"
import route from "./router/index"
import icepro from "../index"
import {findColor} from "./utils/tools.js"
import { createPinia } from 'pinia'

const app = createApp(App)
const pinia = createPinia()

/*const keys = Object.keys(icepro.components)
keys.map(item => {
  console.log(icepro.components[item])
})*/

icepro.install(app)
app.config.globalProperties.findColor = findColor
app
    .use(route)
    .use(pinia)
    .mount("#app")
