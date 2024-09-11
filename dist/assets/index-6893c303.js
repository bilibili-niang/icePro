import{h as f,r,o as l,c as x,b as o,w as a,d as c,t as v,F as w,k}from"./index-b8fee99f.js";import{P as V}from"./preview-b4316df3.js";import"https://cdn.skypack.dev/gsap@3.12.0";function s(e){return e.__sourceCode=`<container>\r
    <ice-textarea v-model="word"></ice-textarea>\r
    {{ word }}\r
  </container>`,e.__sourceCodeTitle=" textarea-normal ",e.__styleCode=null,e.__script=`<script setup>\r
import {ref} from "vue"\r
\r
const word = ref("但使龙城飞将在,不教胡马度阴山.")\r
\r
<\/script>`,e}const _={__name:"textarea.preview",setup(e){const t=f("但使龙城飞将在,不教胡马度阴山.");return(i,n)=>{const u=r("ice-text"),p=r("ice-textarea"),d=r("container");return l(),x(w,null,[o(u,null,{default:a(()=>[c(" 最基础的 ")]),_:1}),o(d,null,{default:a(()=>[o(p,{modelValue:t.value,"onUpdate:modelValue":n[0]||(n[0]=m=>t.value=m)},null,8,["modelValue"]),c(" "+v(t.value),1)]),_:1})],64)}}};typeof s=="function"&&s(_);const g={__name:"index",setup(e){return(t,i)=>(l(),k(V,{component:_}))}};export{g as default};
