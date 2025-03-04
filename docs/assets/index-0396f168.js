import{P as v}from"./preview-98cf666a.js";import{r as i,a as p,o as f,b as S,d as z,f as e,w as n,g as c,t as u,u as a,Q as V,N as k,F as w,j as B}from"./index-a45b4aa7.js";const d=o=>{o.__sourceCodeTitle=" ice-pagination ",o.__sourceCode=`<ice-column>\r
      <ice-text>pageIndex:{{ pageIndex }}</ice-text>\r
      <ice-text>totalSIze:{{ totalSIze }}</ice-text>\r
      <ice-text>step:{{ step }}</ice-text>\r
      <ice-pagination v-model="pageIndex" :step="step" :total="totalSIze" next prev/>\r
    </ice-column>`,o.__script=`import icePagination from "@/components/pagination/src/ice-pagination.vue"\r
import {ref} from "vue"\r
\r
let pageIndex = ref(1)\r
let totalSIze = ref(157)\r
let step = ref(15)\r
// totalSIze.value = parseInt(Math.random(100) * 100);`},N={class:"ice-column"},x={__name:"pagination.preview",setup(o){let t=i(1),s=i(157),_=i(15);return(P,l)=>{const r=p("ice-text"),g=p("ice-column"),I=p("container");return f(),S(w,null,[z("div",N,[e(r,null,{default:n(()=>l[1]||(l[1]=[c(" 分页器 ")])),_:1})]),e(I,null,{default:n(()=>[e(g,null,{default:n(()=>[e(r,null,{default:n(()=>[c("pageIndex:"+u(a(t)),1)]),_:1}),e(r,null,{default:n(()=>[c("totalSIze:"+u(a(s)),1)]),_:1}),e(r,null,{default:n(()=>[c("step:"+u(a(_)),1)]),_:1}),e(V,{modelValue:a(t),"onUpdate:modelValue":l[0]||(l[0]=m=>k(t)?t.value=m:t=m),step:a(_),total:a(s),next:"",prev:""},null,8,["modelValue","step","total"])]),_:1})]),_:1})],64)}}};typeof d=="function"&&d(x);const C={__name:"index",setup(o){return(t,s)=>(f(),B(v,{component:x}))}};export{C as default};
