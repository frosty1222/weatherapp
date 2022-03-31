import { createRouter, createWebHistory } from 'vue-router'

import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'
import Weather from '@/components/Weather.vue'
const routes = [
    {
        path: '/',
        component: Weather
    },
    {
        path: '/login',
        component: Login
    },
    {
        path: '/register',
        component: Register
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router