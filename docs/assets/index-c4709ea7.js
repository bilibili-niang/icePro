import{P as v}from"./preview-db753740.js";import{i,r as s,o as f,c as S,a as z,b as t,w as a,d as l,t as p,u as o,E as V,A as k,F as w,l as B}from"./index-4b3e608d.js";import"https://cdn.skypack.dev/gsap@3.12.0";function m(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const h={class:"ice-column"},x={__name:"pagination.preview",setup(e){let n=i(1),c=i(157),u=i(15);return(y,_)=>{const r=s("ice-text"),g=s("ice-column"),I=s("container");return f(),S(w,null,[z("div",h,[t(r,null,{default:a(()=>[l(" 分页器 ")]),_:1})]),t(I,null,{default:a(()=>[t(g,null,{default:a(()=>[t(r,null,{default:a(()=>[l("pageIndex:"+p(o(n)),1)]),_:1}),t(r,null,{default:a(()=>[l("totalSIze:"+p(o(c)),1)]),_:1}),t(r,null,{default:a(()=>[l("step:"+p(o(u)),1)]),_:1}),t(V,{modelValue:o(n),"onUpdate:modelValue":_[0]||(_[0]=d=>k(n)?n.value=d:n=d),step:o(u),total:o(c),next:"",prev:""},null,8,["modelValue","step","total"])]),_:1})]),_:1})],64)}}};typeof m=="function"&&m(x);const E={__name:"index",setup(e){return(n,c)=>(f(),B(v,{component:x}))}};export{E as default};
