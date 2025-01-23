import{k as f,r as o,o as l,c as x,b as n,w as a,d as c,t as v,F as w,h as k}from"./index-47a89f4e.js";import{P as V}from"./preview-364e80fc.js";import"https://cdn.skypack.dev/gsap@3.12.0";function s(e){return e.__sourceCode=`<container>\r
    <ice-textarea v-model="word"></ice-textarea>\r
    {{ word }}\r
  </container>`,e.__sourceCodeTitle=" textarea-normal ",e.__styleCode=null,e.__script=`<script setup>\r
import {ref} from "vue"\r
\r
const word = ref("但使龙城飞将在,不教胡马度阴山.")\r
\r
<\/script>`,e}const _={__name:"textarea.preview",setup(e){const t=f("但使龙城飞将在,不教胡马度阴山.");return(i,r)=>{const u=o("ice-text"),p=o("ice-textarea"),d=o("container");return l(),x(w,null,[n(u,null,{default:a(()=>r[1]||(r[1]=[c(" 最基础的 ")])),_:1}),n(d,null,{default:a(()=>[n(p,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=m=>t.value=m)},null,8,["modelValue"]),c(" "+v(t.value),1)]),_:1})],64)}}};typeof s=="function"&&s(_);const g={__name:"index",setup(e){return(t,i)=>(l(),k(V,{component:_}))}};export{g as default};
