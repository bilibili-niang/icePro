import{r as e,o as d,c as _,a as h,b as n,w as r,d as o,A as u,F as x}from"./index-b8fee99f.js";import{P as f}from"./preview-b4316df3.js";import"https://cdn.skypack.dev/gsap@3.12.0";function p(t){return t.__sourceCode=`<container>\r
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
<\/script>`,t}const T={class:"ice-column"},w={__name:"menu.preview",setup(t){const c=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(a,l)=>{const s=e("ice-text"),i=e("container");return d(),_(x,null,[h("div",T,[n(s,null,{default:r(()=>[o(" 最基础的使用 ")]),_:1})]),n(i,null,{default:r(()=>[n(u,{list:c})]),_:1})],64)}}};typeof p=="function"&&p(w);function b(t){return t.__sourceCode=`<container>\r
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
<\/script>`,t}const B={class:"ice-column"},y={__name:"menuDirections.preview",setup(t){const c=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(a,l)=>{const s=e("ice-text"),i=e("container");return d(),_(x,null,[h("div",B,[n(s,null,{default:r(()=>[o(" 不同的方向: ")]),_:1})]),n(i,null,{default:r(()=>[n(u,{list:c,direction:"row"})]),_:1})],64)}}};typeof b=="function"&&b(y);function g(t){return t.__sourceCode=`<container>\r
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
<\/script>`,t}const N={class:"ice-column"},k={__name:"menu.border.preview",setup(t){const c=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(a,l)=>{const s=e("ice-tag"),i=e("ice-text"),m=e("container");return d(),_(x,null,[h("div",N,[n(i,null,{default:r(()=>[o(" 支持"),n(s,null,{default:r(()=>[o("border")]),_:1}),o("的传入,是否显示border ")]),_:1})]),n(m,null,{default:r(()=>[n(u,{list:c,border:""})]),_:1})],64)}}};typeof g=="function"&&g(k);function v(t){return t.__sourceCode=`<container>\r
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
<\/script>`,t}const V={class:"ice-column"},I={__name:"menu.nofold.preview",setup(t){const c=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]},{text:"表单",children:[{text:"输入框",href:"doc/input"}]}];return(a,l)=>{const s=e("ice-tag"),i=e("ice-text"),m=e("container");return d(),_(x,null,[h("div",V,[n(i,null,{default:r(()=>[o(" 支持 "),n(s,null,{default:r(()=>[o("nofold")]),_:1}),o(" 的传入,是否折叠,默认折叠 ")]),_:1})]),n(m,null,{default:r(()=>[n(u,{list:c,nofold:""})]),_:1})],64)}}};typeof v=="function"&&v(I);function $(t){return t.__sourceCode=`<container>\r
    <ice-menu :list="items" color="muguahuang"></ice-menu>\r
    <ice-menu :list="items" color="jiguanghong"></ice-menu>\r
  </container>`,t.__sourceCodeTitle=" menu-border ",t.__styleCode=null,t.__script=`<script setup>\r
import IceMenu from '@/components/menu/ice-menu.vue'\r
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
<\/script>`,t}const j={class:"ice-column"},M={__name:"menu.colors.preview",setup(t){const c=[{text:"基础组件",children:[{text:"button 按钮"},{text:"colors 颜色"},{text:"tools 工具"},{text:"card 卡片"},{text:"text 文字"}]},{text:"反馈",children:[{text:"message 消息弹窗"}]},{text:"菜单容器",children:[{text:"导航菜单"}]}];return(a,l)=>{const s=e("ice-tag"),i=e("ice-text"),m=e("container");return d(),_(x,null,[h("div",j,[n(i,null,{default:r(()=>[o(" 支持 "),n(s,null,{default:r(()=>[o("color")]),_:1}),o(" 的传入,还有bug,你不要在一个组件里用多个color变量 ")]),_:1})]),n(m,null,{default:r(()=>[n(u,{list:c,color:"muguahuang"}),n(u,{list:c,color:"jiguanghong"})]),_:1})],64)}}};typeof $=="function"&&$(M);const D={__name:"index",setup(t){return(c,a)=>{const l=e("ice-text");return d(),_(x,null,[n(f,{component:w}),n(f,{component:y}),n(f,{component:k}),n(f,{component:I}),n(f,{component:M}),n(l,null,{default:r(()=>[o(" 当然也支持横向导航栏 ")]),_:1})],64)}}};export{D as default};
