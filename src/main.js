import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index.js'
import axios from "axios";

const app = createApp(App)

axios.defaults.baseURL = "http://localhost:8080"
axios.defaults.headers.common["Authorization"] = "Bearer hallo"
axios.defaults.headers.common["Content-Type"] = "application/json"

app.use(createPinia())
app.use(router)

app.mount('#app')
