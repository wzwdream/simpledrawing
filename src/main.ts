import { createApp } from 'vue'
import App from './App.vue'
import './assets/svg/iconfont.js'
import './style.css'
import { createPinia } from 'pinia' // 引入pinia
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate' // 持久化插件
const pinia = createPinia() // 创建 Pinia 实例
pinia.use(piniaPluginPersistedstate)

const app = createApp(App)
app.use(pinia).mount('#app')
