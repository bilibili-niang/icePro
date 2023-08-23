import{r as c,o as u,c as i,a as f,b as t,w as n,d as o,h as a,F as _,_ as k,A as S,B,n as M,u as p,q as g}from"./index-f38a0360.js";import{P as x}from"./preview-32692264.js";function b(e){return e.__sourceCode=`<show>\r
    <ice-menu :list="items"></ice-menu>\r
  </show>`,e.__sourceCodeTitle=" menu-normal ",e.__styleCode=null,e.__script=`<script setup>\r
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
<\/script>`,e}const j={class:"ice-column"},$={__name:"menu.preview",setup(e){const r=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(d,m)=>{const s=c("ice-text"),l=c("show");return u(),i(_,null,[f("div",j,[t(s,null,{default:n(()=>[o(" 最基础的使用 ")]),_:1})]),t(l,null,{default:n(()=>[t(a,{list:r})]),_:1})],64)}}};typeof b=="function"&&b($);const N={name:"iceTag"},V=Object.assign(N,{props:{type:{type:String,default:"normal"},round:{type:Boolean,default:!1},color:{type:String,default:""},size:{type:String},href:{type:String,default:""}},setup(e){return(r,d)=>(u(),i("div",{class:B(["ice-tag noselect",[e.type,e.round?"round":"defaultRound",e.color?"btn-colors":"default-color",e.size?`size-${e.size}`:"size-normal"]]),style:M({"--hover-color":p(g)(e.color).color,"--color":p(g)(e.color).hover})},[S(r.$slots,"default",{},void 0,!0)],6))}}),h=k(V,[["__scopeId","data-v-ea4e0234"]]);function v(e){return e.__sourceCode=`<show>\r
    <ice-menu :list="items" border></ice-menu>\r
  </show>`,e.__sourceCodeTitle=" menu-border ",e.__styleCode=null,e.__script=`<script setup>\r
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
<\/script>`,e}const F={class:"ice-column"},T={__name:"menu.border.preview",setup(e){const r=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]}];return(d,m)=>{const s=c("ice-text"),l=c("show");return u(),i(_,null,[f("div",F,[t(s,null,{default:n(()=>[o(" 支持"),t(h,null,{default:n(()=>[o("border")]),_:1}),o("的传入,是否显示border ")]),_:1})]),t(l,null,{default:n(()=>[t(a,{list:r,border:""})]),_:1})],64)}}};typeof v=="function"&&v(T);function w(e){return e.__sourceCode=`<show>\r
    <ice-menu :list="items" nofold></ice-menu>\r
  </show>`,e.__sourceCodeTitle=" menu-nofold ",e.__styleCode=null,e.__script=`<script setup>\r
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
<\/script>`,e}const P={class:"ice-column"},I={__name:"menu.nofold.preview",setup(e){const r=[{text:"基础组件",children:[{text:"button 按钮",href:"/doc/button"},{text:"colors 颜色",href:"/doc/button/colors"},{text:"tools 工具",href:"/doc/tools"},{text:"card 卡片",href:"/doc/card"},{text:"text 文字",href:"/doc/text"}]},{text:"反馈",children:[{text:"message 消息弹窗",href:"/doc/message"}]},{text:"菜单容器",children:[{text:"导航菜单",href:"/doc/menu"}]},{text:"表单",children:[{text:"输入框",href:"doc/input"}]}];return(d,m)=>{const s=c("ice-text"),l=c("show");return u(),i(_,null,[f("div",P,[t(s,null,{default:n(()=>[o(" 支持 "),t(h,null,{default:n(()=>[o("nofold")]),_:1}),o(" 的传入,是否折叠,默认折叠 ")]),_:1})]),t(l,null,{default:n(()=>[t(a,{list:r,nofold:""})]),_:1})],64)}}};typeof w=="function"&&w(I);function y(e){return e.__sourceCode=`<show>\r
    <ice-menu :list="items" color="muguahuang"></ice-menu>\r
    <ice-menu :list="items" color="jiguanghong"></ice-menu>\r
  </show>`,e.__sourceCodeTitle=" menu-border ",e.__styleCode=null,e.__script=`<script setup>\r
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
<\/script>`,e}const q={class:"ice-column"},z={__name:"menu.colors.preview",setup(e){const r=[{text:"基础组件",children:[{text:"button 按钮"},{text:"colors 颜色"},{text:"tools 工具"},{text:"card 卡片"},{text:"text 文字"}]},{text:"反馈",children:[{text:"message 消息弹窗"}]},{text:"菜单容器",children:[{text:"导航菜单"}]}];return(d,m)=>{const s=c("ice-text"),l=c("show");return u(),i(_,null,[f("div",q,[t(s,null,{default:n(()=>[o(" 支持 "),t(h,null,{default:n(()=>[o("color")]),_:1}),o(" 的传入,还有bug,你不要在一个组件里用多个color变量 ")]),_:1})]),t(l,null,{default:n(()=>[t(a,{list:r,color:"muguahuang"}),t(a,{list:r,color:"jiguanghong"})]),_:1})],64)}}};typeof y=="function"&&y(z);const O={__name:"index",setup(e){return(r,d)=>(u(),i(_,null,[t(x,{component:$}),t(x,{component:T}),t(x,{component:I}),t(x,{component:z})],64))}};export{O as default};
