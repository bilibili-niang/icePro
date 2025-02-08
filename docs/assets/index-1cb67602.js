import{a as c,o as p,b as d,d as v,f as e,w as s,g as o,F as f,M as a,I as T}from"./index-c04fac71.js";import{P as b}from"./preview-e981285a.js";const k=r=>{r.__sourceCodeTitle=" message-normal ",r.__sourceCode=`<ice-button @click="alertMessage">\r
      copy\r
    </ice-button>`,r.__script=`import { iceMessage } from '../../../../index.js'\r
\r
const alertMessage = () => {\r
  iceMessage(\`复制成功\`)\r
}`},j={class:"ice-column"},C={__name:"message.preview",setup(r){const l=()=>{a("复制成功")};return(g,i)=>{const m=c("ice-text"),t=c("ice-button"),n=c("container");return p(),d(f,null,[v("div",j,[e(m,null,{default:s(()=>i[0]||(i[0]=[o(" 最基础的使用 ")])),_:1})]),e(n,null,{default:s(()=>[e(t,{onClick:l},{default:s(()=>i[1]||(i[1]=[o(" copy ")])),_:1})]),_:1})],64)}}};typeof k=="function"&&k(C);const y=r=>{r.__sourceCodeTitle=" message-color ",r.__sourceCode=`<ice-button @click="alertMessage">\r
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
    </ice-button>`,r.__script=`import { iceMessage } from '../../../../index.js'\r
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
}`},B={class:"ice-column"},w={__name:"message.type.preview",setup(r){const l=()=>{a({message:"info类型,为默认",type:"info"})},g=()=>{a({message:"danger类型",type:"danger"})},i=()=>{a({message:"success类型",type:"success"})},m=()=>{a({message:"ready类型",type:"ready"})};return(t,n)=>{const M=c("ice-tag"),_=c("ice-text"),u=c("ice-button"),z=c("container");return p(),d(f,null,[v("div",B,[e(_,null,{default:s(()=>[n[1]||(n[1]=o(" 使用 ")),e(M,null,{default:s(()=>n[0]||(n[0]=[o("type")])),_:1}),n[2]||(n[2]=o(" 控制弹窗的类型(语义化) "))]),_:1})]),e(z,null,{default:s(()=>[e(u,{onClick:l},{default:s(()=>n[3]||(n[3]=[o(" info ")])),_:1}),e(u,{onClick:g},{default:s(()=>n[4]||(n[4]=[o(" danger ")])),_:1}),e(u,{onClick:i},{default:s(()=>n[5]||(n[5]=[o(" success ")])),_:1}),e(u,{onClick:m},{default:s(()=>n[6]||(n[6]=[o(" ready ")])),_:1})]),_:1})],64)}}};typeof y=="function"&&y(w);const x=r=>{r.__sourceCodeTitle=" message-color ",r.__sourceCode=`<ice-button @click="alertMessage">\r
      xiangrikuihuang\r
    </ice-button>\r
    <ice-button @click="alertMessage2">\r
      biluochunlv\r
    </ice-button>\r
    <ice-button @click="alertMessage3">\r
      yinzhu\r
    </ice-button>`,r.__script=`import { iceMessage } from '../../../../index.js'\r
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
}`},$={__name:"message.colors.preview",setup(r){const l=()=>{a({message:"复制成功",color:"xiangrikuihuang"})},g=()=>{a({message:"复制成功",color:"biluochunlv"})},i=()=>{a({message:"复制成功",color:"yinzhu"})};return(m,t)=>{const n=c("ice-tag"),M=c("ice-text"),_=c("ice-button"),u=c("container");return p(),d(f,null,[e(M,null,{default:s(()=>[t[2]||(t[2]=o(" 使用 ")),e(n,null,{default:s(()=>t[0]||(t[0]=[o("color")])),_:1}),t[3]||(t[3]=o(" 控制弹窗的颜色,注意type和color是会覆盖的,colors>type, ")),e(T,{href:"/doc/button/colors"},{default:s(()=>t[1]||(t[1]=[o("所有颜色")])),_:1})]),_:1}),e(u,null,{default:s(()=>[e(_,{onClick:l},{default:s(()=>t[4]||(t[4]=[o(" xiangrikuihuang ")])),_:1}),e(_,{onClick:g},{default:s(()=>t[5]||(t[5]=[o(" biluochunlv ")])),_:1}),e(_,{onClick:i},{default:s(()=>t[6]||(t[6]=[o(" yinzhu ")])),_:1})]),_:1})],64)}}};typeof x=="function"&&x($);const V={__name:"index",setup(r){return(l,g)=>(p(),d(f,null,[e(b,{component:C}),e(b,{component:w}),e(b,{component:$})],64))}};export{V as default};
