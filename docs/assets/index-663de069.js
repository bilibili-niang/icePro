import{P as v}from"./preview-dac8e0c6.js";import{h as i,r as s,o as f,c as S,a as z,b as t,w as a,d as l,t as p,u as o,C as V,y as k,F as h,k as w}from"./index-35bddd09.js";function m(e){return e.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-text>pageIndex:{{ pageIndex }}</ice-text>\r
      <ice-text>totalSIze:{{ totalSIze }}</ice-text>\r
      <ice-text>step:{{ step }}</ice-text>\r
      <ice-pagination v-model="pageIndex" :step="step" :total="totalSIze" next prev/>\r
    </ice-column>\r
  </container>`,e.__sourceCodeTitle=" ice-pagination ",e.__styleCode=null,e.__script=`<script setup>\r
import icePagination from "@/components/pagination/src/ice-pagination.vue";\r
import {ref} from "vue";\r
\r
let pageIndex = ref(1);\r
let totalSIze = ref(157);\r
let step = ref(15);\r
// totalSIze.value = parseInt(Math.random(100) * 100);\r
<\/script>`,e}const y={class:"ice-column"},x={__name:"pagination.preview",setup(e){let n=i(1),c=i(157),u=i(15);return(B,_)=>{const r=s("ice-text"),g=s("ice-column"),I=s("container");return f(),S(h,null,[z("div",y,[t(r,null,{default:a(()=>[l(" 分页器 ")]),_:1})]),t(I,null,{default:a(()=>[t(g,null,{default:a(()=>[t(r,null,{default:a(()=>[l("pageIndex:"+p(o(n)),1)]),_:1}),t(r,null,{default:a(()=>[l("totalSIze:"+p(o(c)),1)]),_:1}),t(r,null,{default:a(()=>[l("step:"+p(o(u)),1)]),_:1}),t(V,{modelValue:o(n),"onUpdate:modelValue":_[0]||(_[0]=d=>k(n)?n.value=d:n=d),step:o(u),total:o(c),next:"",prev:""},null,8,["modelValue","step","total"])]),_:1})]),_:1})],64)}}};typeof m=="function"&&m(x);const b={__name:"index",setup(e){return(n,c)=>(f(),w(v,{component:x}))}};export{b as default};
