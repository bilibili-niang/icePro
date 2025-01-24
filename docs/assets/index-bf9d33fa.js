import{y as f,r as n,o as l,c as x,b as o,w as a,d as c,t as v,F as w,h as V}from"./index-c6aa0d5d.js";import{P as k}from"./preview-25ff2814.js";function s(e){return e.__sourceCode=`<container>\r
    <ice-textarea v-model="word"></ice-textarea>\r
    {{ word }}\r
  </container>`,e.__sourceCodeTitle=" textarea-normal ",e.__styleCode=null,e.__script=`<script setup>\r
import {ref} from "vue"\r
\r
const word = ref("但使龙城飞将在,不教胡马度阴山.")\r
\r
<\/script>`,e}const _={__name:"textarea.preview",setup(e){const t=f("但使龙城飞将在,不教胡马度阴山.");return(i,r)=>{const u=n("ice-text"),p=n("ice-textarea"),d=n("container");return l(),x(w,null,[o(u,null,{default:a(()=>r[1]||(r[1]=[c(" 最基础的 ")])),_:1}),o(d,null,{default:a(()=>[o(p,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=m=>t.value=m)},null,8,["modelValue"]),c(" "+v(t.value),1)]),_:1})],64)}}};typeof s=="function"&&s(_);const b={__name:"index",setup(e){return(t,i)=>(l(),V(k,{component:_}))}};export{b as default};
