import{z as d,r as t,o as _,c as x,b as o,w as r,d as s,F as w,A as B,h as g}from"./index-47a89f4e.js";import{P as b}from"./preview-364e80fc.js";import"https://cdn.skypack.dev/gsap@3.12.0";const a=d({__name:"iceMessageBox.preview",setup(e){const c=()=>{B("你好啊")};return(l,n)=>{const u=t("ice-text"),p=t("ice-button"),m=t("ice-column"),f=t("container");return _(),x(w,null,[o(u,null,{default:r(()=>n[0]||(n[0]=[s("消息弹窗组件")])),_:1}),o(f,null,{default:r(()=>[o(m,null,{default:r(()=>[o(p,{onClick:c},{default:r(()=>n[1]||(n[1]=[s("看看消息 ")])),_:1})]),_:1})]),_:1})],64)}}});function i(e){return e.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-button\r
        @click="showPreview"\r
      >看看消息\r
      </ice-button>\r
    </ice-column>\r
  </container>`,e.__sourceCodeTitle=" iceMessageBox ",e.__styleCode=null,e.__script=`<script lang="ts" setup>\r
import { iceMessageBox } from '../../../../index'\r
\r
const showPreview = () => {\r
  iceMessageBox('你好啊')\r
\r
}\r
\r
<\/script>`,e}typeof i=="function"&&i(a);const P={__name:"index",setup(e){return(c,l)=>(_(),g(b,{component:a}))}};export{P as default};
