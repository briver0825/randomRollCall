import {
    createApp
} from 'vue'
import App from './App.vue'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import "./assets/css/free.css"

// import './assets/css/tailwind.default.css'

import router from './routers/index.js'

createApp(App).use(ElementPlus).use(router).mount('#app') 