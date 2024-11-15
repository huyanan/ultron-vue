/*
 * @Author: HuYanan
 * @Date: 2021-08-13 10:57:10
 * @LastEditTime: 2021-08-13 14:45:44
 * @LastEditors: HuYanan
 * @Description: 
 * @Version: 0.0.1
 * @FilePath: /ultron-vue/client/src/main.js
 * @Contributors: [HuYanan, other]
 */
import { createApp } from 'vue'
// import ElementPlus from 'element-plus'
// import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css'
import App from './App.vue'

import ElementPlus from 'element-plus/lib/index'
import 'element-plus/dist/index.css'


const app = createApp(App)

app.use(ElementPlus)
app.mount('#app')
