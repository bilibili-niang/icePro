import{r as c,o as d,c as m,a as v,b as n,w as r,d as o,F as f,y as a,I as T}from"./index-47a89f4e.js";import{P as b}from"./preview-364e80fc.js";import"https://cdn.skypack.dev/gsap@3.12.0";function y(e){return e.__sourceCode=`<container>\r
    <ice-button @click="alertMessage">\r
      copy\r
    </ice-button>\r
  </container>`,e.__sourceCodeTitle=" message-normal ",e.__styleCode=null,e.__script=`<script setup>\r
import { iceMessage } from '../../../../index.js'\r
\r
const alertMessage = () => {\r
  iceMessage(\`复制成功\`)\r
}\r
\r
<\/script>`,e}const j={class:"ice-column"},C={__name:"message.preview",setup(e){const l=()=>{a("复制成功")};return(g,i)=>{const p=c("ice-text"),s=c("ice-button"),t=c("container");return d(),m(f,null,[v("div",j,[n(p,null,{default:r(()=>i[0]||(i[0]=[o(" 最基础的使用 ")])),_:1})]),n(t,null,{default:r(()=>[n(s,{onClick:l},{default:r(()=>i[1]||(i[1]=[o(" copy ")])),_:1})]),_:1})],64)}}};typeof y=="function"&&y(C);function k(e){return e.__sourceCode=`<container>\r
    <ice-button @click="alertMessage">\r
      info\r
    </ice-button>\r
    <ice-button @click="alertMessage2">\r
      danger\r
    </ice-button>\r
    <ice-button @click="alertMessage3">\r
      success\r
    </ice-button>\r
    <ice-button @click="alertMessage4">\r
      ready\r
    </ice-button>\r
  </container>`,e.__sourceCodeTitle=" message-color ",e.__styleCode=null,e.__script=`<script setup>\r
import { iceMessage } from '../../../../index.js'\r
\r
const alertMessage = () => {\r
  iceMessage({\r
    message: \`info类型,为默认\`,\r
    type: 'info'\r
  })\r
}\r
const alertMessage2 = () => {\r
  iceMessage({\r
    message: \`danger类型\`,\r
    type: 'danger'\r
  })\r
}\r
const alertMessage3 = () => {\r
  iceMessage({\r
    message: \`success类型\`,\r
    type: 'success'\r
  })\r
}\r
const alertMessage4 = () => {\r
  iceMessage({\r
    message: \`ready类型\`,\r
    type: 'ready'\r
  })\r
}\r
\r
<\/script>`,e}const B={class:"ice-column"},w={__name:"message.type.preview",setup(e){const l=()=>{a({message:"info类型,为默认",type:"info"})},g=()=>{a({message:"danger类型",type:"danger"})},i=()=>{a({message:"success类型",type:"success"})},p=()=>{a({message:"ready类型",type:"ready"})};return(s,t)=>{const M=c("ice-tag"),_=c("ice-text"),u=c("ice-button"),z=c("container");return d(),m(f,null,[v("div",B,[n(_,null,{default:r(()=>[t[1]||(t[1]=o(" 使用 ")),n(M,null,{default:r(()=>t[0]||(t[0]=[o("type")])),_:1}),t[2]||(t[2]=o(" 控制弹窗的类型(语义化) "))]),_:1})]),n(z,null,{default:r(()=>[n(u,{onClick:l},{default:r(()=>t[3]||(t[3]=[o(" info ")])),_:1}),n(u,{onClick:g},{default:r(()=>t[4]||(t[4]=[o(" danger ")])),_:1}),n(u,{onClick:i},{default:r(()=>t[5]||(t[5]=[o(" success ")])),_:1}),n(u,{onClick:p},{default:r(()=>t[6]||(t[6]=[o(" ready ")])),_:1})]),_:1})],64)}}};typeof k=="function"&&k(w);function x(e){return e.__sourceCode=`<container>\r
    <ice-button @click="alertMessage">\r
      xiangrikuihuang\r
    </ice-button>\r
    <ice-button @click="alertMessage2">\r
      biluochunlv\r
    </ice-button>\r
    <ice-button @click="alertMessage3">\r
      yinzhu\r
    </ice-button>\r
  </container>`,e.__sourceCodeTitle=" message-color ",e.__styleCode=null,e.__script=`<script setup>\r
import { iceMessage } from '../../../../index.js'\r
import IceLink from '@/components/text/ice-link.vue'\r
\r
const alertMessage = () => {\r
  iceMessage({\r
    message: \`复制成功\`,\r
    color: 'xiangrikuihuang'\r
  })\r
}\r
const alertMessage2 = () => {\r
  iceMessage({\r
    message: \`复制成功\`,\r
    color: 'biluochunlv'\r
  })\r
}\r
const alertMessage3 = () => {\r
  iceMessage({\r
    message: \`复制成功\`,\r
    color: 'yinzhu'\r
  })\r
}\r
\r
<\/script>`,e}const $={__name:"message.colors.preview",setup(e){const l=()=>{a({message:"复制成功",color:"xiangrikuihuang"})},g=()=>{a({message:"复制成功",color:"biluochunlv"})},i=()=>{a({message:"复制成功",color:"yinzhu"})};return(p,s)=>{const t=c("ice-tag"),M=c("ice-text"),_=c("ice-button"),u=c("container");return d(),m(f,null,[n(M,null,{default:r(()=>[s[2]||(s[2]=o(" 使用 ")),n(t,null,{default:r(()=>s[0]||(s[0]=[o("color")])),_:1}),s[3]||(s[3]=o(" 控制弹窗的颜色,注意type和color是会覆盖的,colors>type, ")),n(T,{href:"/doc/button/colors"},{default:r(()=>s[1]||(s[1]=[o("所有颜色")])),_:1})]),_:1}),n(u,null,{default:r(()=>[n(_,{onClick:l},{default:r(()=>s[4]||(s[4]=[o(" xiangrikuihuang ")])),_:1}),n(_,{onClick:g},{default:r(()=>s[5]||(s[5]=[o(" biluochunlv ")])),_:1}),n(_,{onClick:i},{default:r(()=>s[6]||(s[6]=[o(" yinzhu ")])),_:1})]),_:1})],64)}}};typeof x=="function"&&x($);const F={__name:"index",setup(e){return(l,g)=>(d(),m(f,null,[n(b,{component:C}),n(b,{component:w}),n(b,{component:$})],64))}};export{F as default};
