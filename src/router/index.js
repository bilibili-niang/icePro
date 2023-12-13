import {createRouter, createWebHistory} from "vue-router";

const routes = [
  {
    path: "/",
    name: "index",
    component: () => import("../pages/index.vue")
  },
  {
    path: "/doc",
    component: () => import("../pages/Doc.vue"),
    // redirect: "/doc/button",
    children: [
      {
        path: "button",
        name: "button按钮",
        component: () => import("../pages/doc/button/index.vue")
      },
      {
        path: "button/colors",
        name: "colors",
        component: () => import("../pages/doc/button/colors.vue")
      },
      {
        path: "tools",
        name: "工具",
        component: () => import("../pages/doc/tools/index.vue"),
      },
      {
        path: "card",
        component: () => import("../pages/doc/card/index.vue"),
      },
      {
        path: "text",
        component: () => import("../pages/doc/text/index.vue"),
      },
      {
        path: "message",
        component: () => import("../pages/doc/message/index.vue"),
      },
      {
        path: "drawer",
        component: () => import("../pages/doc/drawer/index.vue"),
      },
      {
        path: "menu",
        component: () => import("../pages/doc/menu/index.vue"),
      },
      {
        path: "input",
        component: () => import("../pages/doc/input/index.vue"),
      },
      {
        path: "container",
        component: () => import("../pages/doc/container/index.vue"),
      }, {
        path: "tag",
        component: () => import("../pages/doc/tag/index.vue"),
      }, {
        path: "avatar",
        component: () => import("../pages/doc/avatar/index.vue"),
      },
      {
        path: "shrinkBar",
        component: () => import("../pages/doc/shrinkBar/index.vue"),
      },
      {
        path: "link",
        component: () => import("../pages/doc/link/index.vue"),
      },
      {
        path: "header",
        component: () => import("../pages/doc/header/index.vue"),
      },
      {
        path: "selector",
        component: () => import("../pages/doc/selector/index.vue"),
      },
      {
        path: "pagination",
        component: () => import("../pages/doc/pagination/index.vue"),
      },
      {
        path: "imgPreview",
        component: () => import("../pages/doc/iceImgPreview/index.vue"),
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory("/"),
  routes,
});

export default router;
