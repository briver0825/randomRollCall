import {
    createRouter,
    createWebHashHistory
} from 'vue-router'

import Home from '@/views/home/index.vue'

const routes = [{
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/random',
        name: 'Random',
        component: () => import('@/views/random/index.vue')
    }
]

const router = new createRouter({
    history: createWebHashHistory(),
    routes
})

export default router