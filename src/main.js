import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'

const app = createApp(App)
const pinia = createPinia({})

import '@/assets/css/global.css'

// import '@/assets/css/1440px.css'
// import '@/assets/css/768px.css'
// import '@/assets/css/375px.css'
app.use(pinia)
app.use(router)
app.mount('#app')
