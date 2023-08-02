import { createRouter, createWebHistory } from 'vue-router'
import index from '@/pages/index.vue'

const routes = [
    {
        path: '/',
        name: 'index',
        component: index
    },
    {
        path: "/doc",
        component: () => import('../pages/Doc.vue'),
        children: [
            {
                path: "button",
                name: 'button按钮',
                component: () => import('../pages/doc/button/index.vue')
            },
            {
                path: 'button/colors',
                name: 'colors',
                component: () => import('../pages/doc/button/colors.vue')
            },
            {
                path: "tools",
                name: '工具',
                component: () => import('../pages/doc/tools/index.vue'),
            },
            {
                path: 'card',
                component: () => import('../pages/doc/card/index.vue'),
            },
            {
                path: 'text',
                component: () => import('../pages/doc/text/index.vue'),
            },
            {
                path: 'message',
                component: () => import('../pages/doc/message/index.vue'),
            },
            {
                path: 'menu',
                component: () => import('../pages/doc/menu/index.vue'),
            },
            {
                path: 'input',
                component: () => import('../pages/doc/input/index.vue'),
            }
        ],
    },

]

const router = createRouter({
    history: createWebHistory('/'),
    routes,
})

export default router
