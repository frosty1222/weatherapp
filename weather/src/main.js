import { createApp } from 'vue'
import Vue from 'vue'
import App from './App.vue'
import moment from 'moment-timezone'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
moment.tz.setDefault('Asia/Bangkok')
const app = createApp(App)
app.use(router)
app.use(VueAxios,axios)
app.mount('#app')

