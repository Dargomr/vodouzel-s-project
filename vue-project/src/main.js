import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import '@/assets/css/1440px.css'
import '@/assets/css/768px.css'
import '@/assets/css/375px.css'



const app = createApp(App)
app.use(router)
app.mount('#app')

