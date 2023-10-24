import{r as c,o as i,c as u,a as f,b as t,w as r,d as o,z as a,F as _,_ as S,A as B,n as j,s as N,u as p,v as g}from"./index-61cb4129.js";import{P as x}from"./preview-b5ce8146.js";function b(e){return e.__sourceCode=`<container>\r
    <ice-menu :list="items"></ice-menu>\r
  </container>`,e.__sourceCodeTitle=" menu-normal ",e.__styleCode=null,e.__script=`<script setup>\r
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
<\/script>`,e}const V={class:"ice-column"},I={__name:"menu.preview",setup(e){const n=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(d,m)=>{const s=c("ice-text"),l=c("container");return i(),u(_,null,[f("div",V,[t(s,null,{default:r(()=>[o(" 最基础的使用 ")]),_:1})]),t(l,null,{default:r(()=>[t(a,{list:n})]),_:1})],64)}}};typeof b=="function"&&b(I);function v(e){return e.__sourceCode=`<container>\r
    <ice-menu :list="items" direction="row"></ice-menu>\r
  </container>`,e.__sourceCodeTitle=" menu-normal ",e.__styleCode=null,e.__script=`<script setup>\r
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
<\/script>`,e}const F={class:"ice-column"},w={__name:"menuDirections.preview",setup(e){const n=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(d,m)=>{const s=c("ice-text"),l=c("container");return i(),u(_,null,[f("div",F,[t(s,null,{default:r(()=>[o(" 不同的方向: ")]),_:1})]),t(l,null,{default:r(()=>[t(a,{list:n,direction:"row"})]),_:1})],64)}}};typeof v=="function"&&v(w);const P={name:"iceTag"},A=Object.assign(P,{props:{type:{type:String,default:"normal"},round:{type:Boolean,default:!1},color:{type:String,default:""},size:{type:String},href:{type:String,default:""}},setup(e){return(n,d)=>(i(),u("div",{class:j([[e.type,e.round?"round":"defaultRound",e.color?"btn-colors":"default-color",e.size?`size-${e.size}`:"size-normal"],"ice-tag noselect"]),style:N({"--hover-color":p(g)(e.color).color,"--color":p(g)(e.color).hover})},[B(n.$slots,"default",{},void 0,!0)],6))}}),h=S(A,[["__scopeId","data-v-5e26db12"]]);function y(e){return e.__sourceCode=`<container>\r
    <ice-menu :list="items" border></ice-menu>\r
  </container>`,e.__sourceCodeTitle=" menu-border ",e.__styleCode=null,e.__script=`<script setup>\r
import IceMenu from '@/components/menu/ice-menu.vue'\r
import IceTag from '@/components/tools/ice-tag.vue'\r
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
<\/script>`,e}const D={class:"ice-column"},z={__name:"menu.border.preview",setup(e){const n=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(d,m)=>{const s=c("ice-text"),l=c("container");return i(),u(_,null,[f("div",D,[t(s,null,{default:r(()=>[o(" 支持"),t(h,null,{default:r(()=>[o("border")]),_:1}),o("的传入,是否显示border ")]),_:1})]),t(l,null,{default:r(()=>[t(a,{list:n,border:""})]),_:1})],64)}}};typeof y=="function"&&y(z);function $(e){return e.__sourceCode=`<container>\r
    <ice-menu :list="items" nofold></ice-menu>\r
  </container>`,e.__sourceCodeTitle=" menu-nofold ",e.__styleCode=null,e.__script=`<script setup>\r
import IceMenu from '@/components/menu/ice-menu.vue'\r
import IceTag from '@/components/tools/ice-tag.vue'\r
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
<\/script>`,e}const E={class:"ice-column"},k={__name:"menu.nofold.preview",setup(e){const n=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]},{text:"表单",children:[{text:"输入框",href:"doc/input"}]}];return(d,m)=>{const s=c("ice-text"),l=c("container");return i(),u(_,null,[f("div",E,[t(s,null,{default:r(()=>[o(" 支持 "),t(h,null,{default:r(()=>[o("nofold")]),_:1}),o(" 的传入,是否折叠,默认折叠 ")]),_:1})]),t(l,null,{default:r(()=>[t(a,{list:n,nofold:""})]),_:1})],64)}}};typeof $=="function"&&$(k);function T(e){return e.__sourceCode=`<container>\r
    <ice-menu :list="items" color="muguahuang"></ice-menu>\r
    <ice-menu :list="items" color="jiguanghong"></ice-menu>\r
  </container>`,e.__sourceCodeTitle=" menu-border ",e.__styleCode=null,e.__script=`<script setup>\r
import IceMenu from '@/components/menu/ice-menu.vue'\r
import IceTag from '@/components/tools/ice-tag.vue'\r
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
<\/script>`,e}const O={class:"ice-column"},M={__name:"menu.colors.preview",setup(e){const n=[{text:"基础组件",children:[{text:"button 按钮"},{text:"colors 颜色"},{text:"tools 工具"},{text:"card 卡片"},{text:"text 文字"}]},{text:"反馈",children:[{text:"message 消息弹窗"}]},{text:"菜单容器",children:[{text:"导航菜单"}]}];return(d,m)=>{const s=c("ice-text"),l=c("container");return i(),u(_,null,[f("div",O,[t(s,null,{default:r(()=>[o(" 支持 "),t(h,null,{default:r(()=>[o("color")]),_:1}),o(" 的传入,还有bug,你不要在一个组件里用多个color变量 ")]),_:1})]),t(l,null,{default:r(()=>[t(a,{list:n,color:"muguahuang"}),t(a,{list:n,color:"jiguanghong"})]),_:1})],64)}}};typeof T=="function"&&T(M);const G={__name:"index",setup(e){return(n,d)=>(i(),u(_,null,[t(x,{component:I}),t(x,{component:w}),t(x,{component:z}),t(x,{component:k}),t(x,{component:M})],64))}};export{G as default};
