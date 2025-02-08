import { createRouter, createWebHashHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'index',
    component: () => import('../pages/index.vue')
  },
  {
    path: '/thirdComponents',
    name: 'thirdComponents',
    redirect: '/thirdComponents/randomPixels',
    component: () => import('../pages/thirdComponents/index.vue'),
    children: [
      {
        path: 'randomPixels',
        name: 'randomPixels',
        component: () => import('../pages/thirdComponents/randomPixels/index.vue')
      }
    ]
  },
  {
    path: '/advancedComponent',
    name: 'advancedComponent',
    component: () => import('../pages/advancedComponent/index.vue'),
    redirect: '/advancedComponent/misalignedCard',
    children: [
      {
        path: 'misalignedCard',
        name: 'misalignedCard',
        component: () => import('../pages/advancedComponent/misalignedCard/index.vue')
      }
    ]
  },
  {
    path: '/doc',
    name: 'docIndex',
    component: () => import('../pages/Doc.vue'),
    redirect: '/doc/button',
    children: [
      {
        path: 'button',
        name: 'button',
        component: () => import('../pages/doc/button/index.vue')
      },
      {
        path: 'colors',
        name: 'colors',
        component: () => import('../pages/doc/button/colors.vue')
      },
      {
        path: 'tools',
        name: 'tools',
        component: () => import('../pages/doc/tools/index.vue')
      },
      {
        path: 'card',
        component: () => import('../pages/doc/card/index.vue')
      },
      {
        path: 'split',
        component: () => import('../pages/doc/split/index.vue')
      },
      {
        path: 'text',
        component: () => import('../pages/doc/text/index.vue')
      },
      {
        path: 'message',
        component: () => import('../pages/doc/message/index.vue')
      },
      {
        path: 'iceMessageBox',
        component: () => import('../pages/doc/iceMessageBox/index.vue')
      },
      {
        path: 'drawer',
        component: () => import('../pages/doc/drawer/index.vue')
      },
      {
        path: 'menu',
        component: () => import('../pages/doc/menu/index.vue')
      },
      {
        path: 'input',
        component: () => import('../pages/doc/input/index.vue')
      },
      {
        path: 'textarea',
        component: () => import('../pages/doc/textarea/index.vue')
      },
      {
        path: 'container',
        component: () => import('../pages/doc/container/index.vue')
      }, {
        path: 'tag',
        component: () => import('../pages/doc/tag/index.vue')
      }, {
        path: 'avatar',
        component: () => import('../pages/doc/avatar/index.vue')
      },
      {
        path: 'shrinkBar',
        component: () => import('../pages/doc/shrinkBar/index.vue')
      },
      {
        path: 'link',
        component: () => import('../pages/doc/link/index.vue')
      },
      {
        path: 'header',
        component: () => import('../pages/doc/header/index.vue')
      },
      {
        path: 'colorSelector',
        component: () => import('../pages/doc/colorSelector/index.vue')
      },
      {
        path: 'selector',
        component: () => import('../pages/doc/selector/index.vue')
      },
      {
        path: 'pagination',
        component: () => import('../pages/doc/pagination/index.vue')
      },
      {
        path: 'imgPreview',
        component: () => import('../pages/doc/iceImgPreview/index.vue')
      },
      {
        path: 'inlineStyle',
        component: () => import('../pages/doc/inlineStyle/index.vue')
      },
      {
        path: 'tabs',
        component: () => import('../pages/doc/tabs/index.vue')
      },
      {
        path: 'dragAndDrop',
        component: () => import('../pages/doc/dragAndDrop/index.vue')
      }
    ]
  }
]

console.log('router-----------------')
console.log(routes)

const router = createRouter({
  // history: createWebHistory("/"),
  history: createWebHashHistory('/icePro/'),
  routes
})

export default router
