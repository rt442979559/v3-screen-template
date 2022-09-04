import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
const app = createApp(App)

//* 自定义指令
import { hljsFn } from './directive/dir' 
hljsFn(app)

//* 全局公共组件
import { installComponents } from './components'
installComponents(app)

//* 注册依赖
app.use(router)
app.use(ElementPlus)
app.mount('#app')
