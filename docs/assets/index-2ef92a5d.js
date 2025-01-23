import{P as v}from"./preview-364e80fc.js";import{k as s,r as p,o as f,c as S,a as z,b as t,w as a,d as c,t as u,u as o,D as V,B as k,F as B,h as w}from"./index-47a89f4e.js";import"https://cdn.skypack.dev/gsap@3.12.0";function m(e){return e.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-text>pageIndex:{{ pageIndex }}</ice-text>\r
      <ice-text>totalSIze:{{ totalSIze }}</ice-text>\r
      <ice-text>step:{{ step }}</ice-text>\r
      <ice-pagination v-model="pageIndex" :step="step" :total="totalSIze" next prev/>\r
    </ice-column>\r
  </container>`,e.__sourceCodeTitle=" ice-pagination ",e.__styleCode=null,e.__script=`<script setup>\r
import icePagination from "@/components/pagination/src/ice-pagination.vue"\r
import {ref} from "vue"\r
\r
let pageIndex = ref(1)\r
let totalSIze = ref(157)\r
let step = ref(15)\r
// totalSIze.value = parseInt(Math.random(100) * 100);\r
<\/script>`,e}const y={class:"ice-column"},x={__name:"pagination.preview",setup(e){let n=s(1),i=s(157),_=s(15);return(N,r)=>{const l=p("ice-text"),g=p("ice-column"),I=p("container");return f(),S(B,null,[z("div",y,[t(l,null,{default:a(()=>r[1]||(r[1]=[c(" 分页器 ")])),_:1})]),t(I,null,{default:a(()=>[t(g,null,{default:a(()=>[t(l,null,{default:a(()=>[c("pageIndex:"+u(o(n)),1)]),_:1}),t(l,null,{default:a(()=>[c("totalSIze:"+u(o(i)),1)]),_:1}),t(l,null,{default:a(()=>[c("step:"+u(o(_)),1)]),_:1}),t(V,{modelValue:o(n),"onUpdate:modelValue":r[0]||(r[0]=d=>k(n)?n.value=d:n=d),step:o(_),total:o(i),next:"",prev:""},null,8,["modelValue","step","total"])]),_:1})]),_:1})],64)}}};typeof m=="function"&&m(x);const D={__name:"index",setup(e){return(n,i)=>(f(),w(v,{component:x}))}};export{D as default};
