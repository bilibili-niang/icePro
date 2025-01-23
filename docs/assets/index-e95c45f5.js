import{r as e,o as x,c as _,a as h,b as r,w as o,d as c,C as d,F as m}from"./index-47a89f4e.js";import{P as a}from"./preview-364e80fc.js";import"https://cdn.skypack.dev/gsap@3.12.0";function p(t){return t.__sourceCode=`<container>\r
    <ice-menu :list="items"></ice-menu>\r
  </container>`,t.__sourceCodeTitle=" menu-normal ",t.__styleCode=null,t.__script=`<script setup>\r
import IceMenu from '@/components/menu/ice-menu.vue'\r
\r
const items = [\r
  {\r
    text: '基础组件',\r
    children: [\r
      {\r
        text: 'button 按钮',\r
        href: '/doc/button'\r
      },\r
      {\r
        text: 'colors 颜色',\r
        href: '/doc/button/colors'\r
      },\r
      {\r
        text: 'tools 工具',\r
        href: '/doc/tools'\r
      },\r
      {\r
        text: 'card 卡片',\r
        href: '/doc/card'\r
      },\r
      {\r
        text: 'text 文字',\r
        href: '/doc/text'\r
      }\r
    ]\r
  },\r
  {\r
    text: '反馈',\r
    children: [\r
      {\r
        text: 'message 消息弹窗',\r
        href: '/doc/message'\r
      }\r
    ]\r
  },\r
  {\r
    text: '菜单容器',\r
    children: [\r
      {\r
        text: '导航菜单',\r
        href: '/doc/menu'\r
      }\r
    ]\r
  }\r
]\r
<\/script>`,t}const T={class:"ice-column"},w={__name:"menu.preview",setup(t){const s=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(u,n)=>{const i=e("ice-text"),l=e("container");return x(),_(m,null,[h("div",T,[r(i,null,{default:o(()=>n[0]||(n[0]=[c(" 最基础的使用 ")])),_:1})]),r(l,null,{default:o(()=>[r(d,{list:s})]),_:1})],64)}}};typeof p=="function"&&p(w);function b(t){return t.__sourceCode=`<container>\r
    <ice-menu :list="items" direction="row"></ice-menu>\r
  </container>`,t.__sourceCodeTitle=" menu-normal ",t.__styleCode=null,t.__script=`<script setup>\r
import IceMenu from '@/components/menu/ice-menu.vue'\r
\r
const items = [\r
  {\r
    text: '基础组件',\r
    children: [\r
      {\r
        text: 'button 按钮',\r
        href: '/doc/button'\r
      },\r
      {\r
        text: 'colors 颜色',\r
        href: '/doc/button/colors'\r
      },\r
      {\r
        text: 'tools 工具',\r
        href: '/doc/tools'\r
      },\r
      {\r
        text: 'card 卡片',\r
        href: '/doc/card'\r
      },\r
      {\r
        text: 'text 文字',\r
        href: '/doc/text'\r
      }\r
    ]\r
  },\r
  {\r
    text: '反馈',\r
    children: [\r
      {\r
        text: 'message 消息弹窗',\r
        href: '/doc/message'\r
      }\r
    ]\r
  },\r
  {\r
    text: '菜单容器',\r
    children: [\r
      {\r
        text: '导航菜单',\r
        href: '/doc/menu'\r
      }\r
    ]\r
  }\r
]\r
<\/script>`,t}const B={class:"ice-column"},y={__name:"menuDirections.preview",setup(t){const s=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(u,n)=>{const i=e("ice-text"),l=e("container");return x(),_(m,null,[h("div",B,[r(i,null,{default:o(()=>n[0]||(n[0]=[c(" 不同的方向: ")])),_:1})]),r(l,null,{default:o(()=>[r(d,{list:s,direction:"row"})]),_:1})],64)}}};typeof b=="function"&&b(y);function g(t){return t.__sourceCode=`<container>\r
    <ice-menu :list="items" border></ice-menu>\r
  </container>`,t.__sourceCodeTitle=" menu-border ",t.__styleCode=null,t.__script=`<script setup>\r
import IceMenu from '@/components/menu/ice-menu.vue'\r
\r
const items = [\r
  {\r
    text: '基础组件',\r
    children: [\r
      {\r
        text: 'button 按钮',\r
        href: '/doc/button'\r
      },\r
      {\r
        text: 'colors 颜色',\r
        href: '/doc/button/colors'\r
      },\r
      {\r
        text: 'tools 工具',\r
        href: '/doc/tools'\r
      },\r
      {\r
        text: 'card 卡片',\r
        href: '/doc/card'\r
      },\r
      {\r
        text: 'text 文字',\r
        href: '/doc/text'\r
      }\r
    ]\r
  },\r
  {\r
    text: '反馈',\r
    children: [\r
      {\r
        text: 'message 消息弹窗',\r
        href: '/doc/message'\r
      }\r
    ]\r
  },\r
  {\r
    text: '菜单容器',\r
    children: [\r
      {\r
        text: '导航菜单',\r
        href: '/doc/menu'\r
      }\r
    ]\r
  }\r
]\r
<\/script>`,t}const N={class:"ice-column"},k={__name:"menu.border.preview",setup(t){const s=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(u,n)=>{const i=e("ice-tag"),l=e("ice-text"),f=e("container");return x(),_(m,null,[h("div",N,[r(l,null,{default:o(()=>[n[1]||(n[1]=c(" 支持")),r(i,null,{default:o(()=>n[0]||(n[0]=[c("border")])),_:1}),n[2]||(n[2]=c("的传入,是否显示border "))]),_:1})]),r(f,null,{default:o(()=>[r(d,{list:s,border:""})]),_:1})],64)}}};typeof g=="function"&&g(k);function v(t){return t.__sourceCode=`<container>\r
    <ice-menu :list="items" nofold></ice-menu>\r
  </container>`,t.__sourceCodeTitle=" menu-nofold ",t.__styleCode=null,t.__script=`<script setup>\r
import IceMenu from '@/components/menu/ice-menu.vue'\r
\r
const items = [\r
  {\r
    text: '基础组件',\r
    children: [\r
      {\r
        text: 'button 按钮',\r
        href: '/doc/button'\r
      },\r
      {\r
        text: 'colors 颜色',\r
        href: '/doc/button/colors'\r
      },\r
      {\r
        text: 'tools 工具',\r
        href: '/doc/tools'\r
      },\r
      {\r
        text: 'card 卡片',\r
        href: '/doc/card'\r
      },\r
      {\r
        text: 'text 文字',\r
        href: '/doc/text'\r
      }\r
    ]\r
  },\r
  {\r
    text: '反馈',\r
    children: [\r
      {\r
        text: 'message 消息弹窗',\r
        href: '/doc/message'\r
      }\r
    ]\r
  },\r
  {\r
    text: '菜单容器',\r
    children: [\r
      {\r
        text: '导航菜单',\r
        href: '/doc/menu'\r
      }\r
    ]\r
  },\r
  {\r
    text: '表单',\r
    children: [\r
      {\r
        text:'输入框',\r
        href:'doc/input'\r
      }\r
    ]\r
  }\r
]\r
<\/script>`,t}const V={class:"ice-column"},I={__name:"menu.nofold.preview",setup(t){const s=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]},{text:"表单",children:[{text:"输入框",href:"doc/input"}]}];return(u,n)=>{const i=e("ice-tag"),l=e("ice-text"),f=e("container");return x(),_(m,null,[h("div",V,[r(l,null,{default:o(()=>[n[1]||(n[1]=c(" 支持 ")),r(i,null,{default:o(()=>n[0]||(n[0]=[c("nofold")])),_:1}),n[2]||(n[2]=c(" 的传入,是否折叠,默认折叠 "))]),_:1})]),r(f,null,{default:o(()=>[r(d,{list:s,nofold:""})]),_:1})],64)}}};typeof v=="function"&&v(I);function $(t){return t.__sourceCode=`<container>\r
    <ice-menu :list="items" color="muguahuang"></ice-menu>\r
    <ice-menu :list="items" color="jiguanghong"></ice-menu>\r
  </container>`,t.__sourceCodeTitle=" menu-border ",t.__styleCode=null,t.__script=`<script setup>\r
import IceMenu from '~/components/menu/ice-menu.vue'\r
\r
const items = [\r
  {\r
    text: '基础组件',\r
    children: [\r
      {\r
        text: 'button 按钮'\r
      },\r
      {\r
        text: 'colors 颜色'\r
      },\r
      {\r
        text: 'tools 工具'\r
      },\r
      {\r
        text: 'card 卡片'\r
      },\r
      {\r
        text: 'text 文字'\r
      }\r
    ]\r
  },\r
  {\r
    text: '反馈',\r
    children: [\r
      {\r
        text: 'message 消息弹窗'\r
      }\r
    ]\r
  },\r
  {\r
    text: '菜单容器',\r
    children: [\r
      {\r
        text: '导航菜单'\r
      }\r
    ]\r
  }\r
]\r
<\/script>`,t}const j={class:"ice-column"},M={__name:"menu.colors.preview",setup(t){const s=[{text:"基础组件",children:[{text:"button 按钮"},{text:"colors 颜色"},{text:"tools 工具"},{text:"card 卡片"},{text:"text 文字"}]},{text:"反馈",children:[{text:"message 消息弹窗"}]},{text:"菜单容器",children:[{text:"导航菜单"}]}];return(u,n)=>{const i=e("ice-tag"),l=e("ice-text"),f=e("container");return x(),_(m,null,[h("div",j,[r(l,null,{default:o(()=>[n[1]||(n[1]=c(" 支持 ")),r(i,null,{default:o(()=>n[0]||(n[0]=[c("color")])),_:1}),n[2]||(n[2]=c(" 的传入,还有bug,你不要在一个组件里用多个color变量 "))]),_:1})]),r(f,null,{default:o(()=>[r(d,{list:s,color:"muguahuang"}),r(d,{list:s,color:"jiguanghong"})]),_:1})],64)}}};typeof $=="function"&&$(M);const E={__name:"index",setup(t){return(s,u)=>{const n=e("ice-text");return x(),_(m,null,[r(a,{component:w}),r(a,{component:y}),r(a,{component:k}),r(a,{component:I}),r(a,{component:M}),r(n,null,{default:o(()=>u[0]||(u[0]=[c(" 当然也支持横向导航栏 ")])),_:1})],64)}}};export{E as default};
