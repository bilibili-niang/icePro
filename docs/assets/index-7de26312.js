import{x as f,r as n,o as i,c as x,b as t,w as c,d as r,F as d,y as w,k as B}from"./index-b8fee99f.js";import{P as g}from"./preview-b4316df3.js";import"https://cdn.skypack.dev/gsap@3.12.0";const _=f({__name:"iceMessageBox.preview",setup(e){const o=()=>{w("你好啊")};return(a,k)=>{const l=n("ice-text"),u=n("ice-button"),p=n("ice-column"),m=n("container");return i(),x(d,null,[t(l,null,{default:c(()=>[r("消息弹窗组件")]),_:1}),t(m,null,{default:c(()=>[t(p,null,{default:c(()=>[t(u,{onClick:o},{default:c(()=>[r("看看消息 ")]),_:1})]),_:1})]),_:1})],64)}}});function s(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}typeof s=="function"&&s(_);const M={__name:"index",setup(e){return(o,a)=>(i(),B(g,{component:_}))}};export{M as default};