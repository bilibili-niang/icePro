import{i as f,r,o as s,c as x,b as o,w as a,d as c,t as v,F as w,l as V}from"./index-e27d3de1.js";import{P as k}from"./preview-aa1c0d9e.js";import"https://cdn.skypack.dev/gsap@3.12.0";function l(e){return e.__sourceCode=`<container>\r
    <ice-textarea v-model="word"></ice-textarea>\r
    {{ word }}\r
  </container>`,e.__sourceCodeTitle=" textarea-normal ",e.__styleCode=null,e.__script=`<script setup>\r
import {ref} from "vue"\r
\r
const word = ref("但使龙城飞将在,不教胡马度阴山.")\r
\r
<\/script>`,e}const _={__name:"textarea.preview",setup(e){const t=f("但使龙城飞将在,不教胡马度阴山.");return(i,n)=>{const u=r("ice-text"),p=r("ice-textarea"),d=r("container");return s(),x(w,null,[o(u,null,{default:a(()=>[c(" 最基础的 ")]),_:1}),o(d,null,{default:a(()=>[o(p,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=m=>t.value=m)},null,8,["modelValue"]),c(" "+v(t.value),1)]),_:1})],64)}}};typeof l=="function"&&l(_);const g={__name:"index",setup(e){return(t,i)=>(s(),V(k,{component:_}))}};export{g as default};
