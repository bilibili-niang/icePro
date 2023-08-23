import{P as v}from"./preview-32692264.js";import{f as a,r,o as d,c as w,a as h,b as o,w as u,d as V,u as i,x as _,F as y,_ as g,v as k}from"./index-f38a0360.js";function p(e){return e.__sourceCode=`<show>\r
    <ice-input class="input" v-model="text" placeholder="请输入文字"></ice-input>\r
    <ice-input class="input" v-model="text2" placeholder="请输入文字"></ice-input>\r
  </show>`,e.__sourceCodeTitle=" input-normal ",e.__styleCode=`<style scoped lang="less">\r
.input {\r
  margin-right: 1rem;\r
}\r
</style>`,e.__script=`<script setup>\r
import { ref } from 'vue'\r
\r
let text = ref('')\r
let text2 = ref('一个真正的鳗')\r
<\/script>`,e}const B={class:"ice-column"},m={__name:"input.preview",setup(e){let t=a(""),n=a("一个真正的鳗");return(P,l)=>{const f=r("ice-text"),c=r("ice-input"),x=r("show");return d(),w(y,null,[h("div",B,[o(f,null,{default:u(()=>[V(" 最基础的使用 ")]),_:1})]),o(x,null,{default:u(()=>[o(c,{class:"input",modelValue:i(t),"onUpdate:modelValue":l[0]||(l[0]=s=>_(t)?t.value=s:t=s),placeholder:"请输入文字"},null,8,["modelValue"]),o(c,{class:"input",modelValue:i(n),"onUpdate:modelValue":l[1]||(l[1]=s=>_(n)?n.value=s:n=s),placeholder:"请输入文字"},null,8,["modelValue"])]),_:1})],64)}}};typeof p=="function"&&p(m);const N=g(m,[["__scopeId","data-v-f7cc7e59"]]),T={__name:"index",setup(e){return(t,n)=>(d(),k(v,{component:N}))}};export{T as default};
