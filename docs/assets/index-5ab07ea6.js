import{i as c,o as g,c as p,a as k,b as s,w as n,F as d,d as t,M as o}from"./index-2a43d906.js";import{P as M}from"./preview-bd009eef.js";function h(e){return e.__sourceCode=`<show>\r
    <ice-button @click="alertMessage">\r
      copy\r
    </ice-button>\r
  </show>`,e.__sourceCodeTitle=" message-normal ",e.__styleCode=null,e.__script=`<script setup>\r
import { iceMessage } from '../../../../index.js'\r
\r
const alertMessage = () => {\r
  iceMessage(\`复制成功\`)\r
}\r
\r
<\/script>`,e}const T={class:"ice-column"},x={__name:"message.preview",setup(e){const r=()=>{o("复制成功")};return(i,m)=>{const a=c("ice-text"),_=c("ice-button"),l=c("show");return g(),p(d,null,[k("div",T,[s(a,null,{default:n(()=>[t(" 最基础的使用 ")]),_:1})]),s(l,null,{default:n(()=>[s(_,{onClick:r},{default:n(()=>[t(" copy ")]),_:1})]),_:1})],64)}}};typeof h=="function"&&h(x);function y(e){return e.__sourceCode=`<show>\r
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
  </show>`,e.__sourceCodeTitle=" message-color ",e.__styleCode=null,e.__script=`<script setup>\r
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
<\/script>`,e}const j={class:"ice-column"},w={__name:"message.type.preview",setup(e){const r=()=>{o({message:"info类型,为默认",type:"info"})},i=()=>{o({message:"danger类型",type:"danger"})},m=()=>{o({message:"success类型",type:"success"})},a=()=>{o({message:"ready类型",type:"ready"})};return(_,l)=>{const f=c("ice-tag"),$=c("ice-text"),u=c("ice-button"),C=c("show");return g(),p(d,null,[k("div",j,[s($,null,{default:n(()=>[t(" 使用 "),s(f,null,{default:n(()=>[t("color")]),_:1}),t(" 控制弹窗的color ")]),_:1})]),s(C,null,{default:n(()=>[s(u,{onClick:r},{default:n(()=>[t(" info ")]),_:1}),s(u,{onClick:i},{default:n(()=>[t(" danger ")]),_:1}),s(u,{onClick:m},{default:n(()=>[t(" success ")]),_:1}),s(u,{onClick:a},{default:n(()=>[t(" ready ")]),_:1})]),_:1})],64)}}};typeof y=="function"&&y(w);function b(e){return e.__sourceCode=`<show>\r
    <ice-button @click="alertMessage">\r
      xiangrikuihuang\r
    </ice-button>\r
  </show>`,e.__sourceCodeTitle=" message-normal ",e.__styleCode=null,e.__script=`<script setup>\r
import { iceMessage } from '../../../../index.js'\r
\r
const alertMessage = () => {\r
  iceMessage({\r
    message: \`复制成功\`,\r
    color: 'xiangrikuihuang'\r
  })\r
}\r
\r
<\/script>`,e}const v={__name:"message.colors.preview",setup(e){const r=()=>{o({message:"复制成功",color:"xiangrikuihuang"})};return(i,m)=>{const a=c("ice-tag"),_=c("ice-text"),l=c("ice-button"),f=c("show");return g(),p(d,null,[s(_,null,{default:n(()=>[t(" 使用 "),s(a,null,{default:n(()=>[t("color")]),_:1}),t(" 控制弹窗的颜色 ")]),_:1}),s(f,null,{default:n(()=>[s(l,{onClick:r},{default:n(()=>[t(" xiangrikuihuang ")]),_:1})]),_:1})],64)}}};typeof b=="function"&&b(v);const V={__name:"index",setup(e){return(r,i)=>(g(),p(d,null,[s(M,{component:x}),s(M,{component:w}),s(M,{component:v})],64))}};export{V as default};
