import{r,o as p,c as d,a as h,b as n,w as t,d as s,F as m,M as c,I as z}from"./index-61cb4129.js";import{P as b}from"./preview-b5ce8146.js";function y(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const T={class:"ice-column"},v={__name:"message.preview",setup(e){const o=()=>{c("复制成功")};return(i,u)=>{const _=r("ice-text"),f=r("ice-button"),g=r("container");return p(),d(m,null,[h("div",T,[n(_,null,{default:t(()=>[s(" 最基础的使用 ")]),_:1})]),n(g,null,{default:t(()=>[n(f,{onClick:o},{default:t(()=>[s(" copy ")]),_:1})]),_:1})],64)}}};typeof y=="function"&&y(v);function k(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const j={class:"ice-column"},C={__name:"message.type.preview",setup(e){const o=()=>{c({message:"info类型,为默认",type:"info"})},i=()=>{c({message:"danger类型",type:"danger"})},u=()=>{c({message:"success类型",type:"success"})},_=()=>{c({message:"ready类型",type:"ready"})};return(f,g)=>{const M=r("ice-tag"),l=r("ice-text"),a=r("ice-button"),$=r("container");return p(),d(m,null,[h("div",j,[n(l,null,{default:t(()=>[s(" 使用 "),n(M,null,{default:t(()=>[s("type")]),_:1}),s(" 控制弹窗的类型(语义化) ")]),_:1})]),n($,null,{default:t(()=>[n(a,{onClick:o},{default:t(()=>[s(" info ")]),_:1}),n(a,{onClick:i},{default:t(()=>[s(" danger ")]),_:1}),n(a,{onClick:u},{default:t(()=>[s(" success ")]),_:1}),n(a,{onClick:_},{default:t(()=>[s(" ready ")]),_:1})]),_:1})],64)}}};typeof k=="function"&&k(C);function x(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const w={__name:"message.colors.preview",setup(e){const o=()=>{c({message:"复制成功",color:"xiangrikuihuang"})},i=()=>{c({message:"复制成功",color:"biluochunlv"})},u=()=>{c({message:"复制成功",color:"yinzhu"})};return(_,f)=>{const g=r("ice-tag"),M=r("ice-text"),l=r("ice-button"),a=r("container");return p(),d(m,null,[n(M,null,{default:t(()=>[s(" 使用 "),n(g,null,{default:t(()=>[s("color")]),_:1}),s(" 控制弹窗的颜色,注意type和color是会覆盖的,colors>type, "),n(z,{href:"/doc/button/colors"},{default:t(()=>[s("所有颜色")]),_:1})]),_:1}),n(a,null,{default:t(()=>[n(l,{onClick:o},{default:t(()=>[s(" xiangrikuihuang ")]),_:1}),n(l,{onClick:i},{default:t(()=>[s(" biluochunlv ")]),_:1}),n(l,{onClick:u},{default:t(()=>[s(" yinzhu ")]),_:1})]),_:1})],64)}}};typeof x=="function"&&x(w);const N={__name:"index",setup(e){return(o,i)=>(p(),d(m,null,[n(b,{component:v}),n(b,{component:C}),n(b,{component:w})],64))}};export{N as default};
