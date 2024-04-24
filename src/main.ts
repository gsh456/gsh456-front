import { createApp } from 'vue'
//import './style.css'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// import App from './App.vue'
import login from './views/login.vue'

const app = createApp(login)
app.use(ElementPlus)
app.mount('#app')
