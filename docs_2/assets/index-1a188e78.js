import{P as w}from"./preview-b5ce8146.js";import{h as p,r as l,o as v,c as V,a as r,b as s,w as i,d,u as a,y as m,t as y,F as g,_ as k,B,C as b,k as I}from"./index-61cb4129.js";function f(e){return e.__sourceCode=`<container>\r
    <div class="ice-column">\r
      <div class="ice-row">\r
        <ice-input v-model="text" class="input" placeholder="请输入文字"></ice-input>\r
        <ice-text>\r
          我的名字:{{ text }}\r
        </ice-text>\r
      </div>\r
      <br/>\r
      <div class="ice-row">\r
        <ice-input v-model="text2" class="input" placeholder="请输入文字"></ice-input>\r
      </div>\r
    </div>\r
  </container>`,e.__sourceCodeTitle=" input-normal ",e.__styleCode=`<style lang="less" scoped>\r
.input {\r
  margin-right: 1rem;\r
}\r
</style>`,e.__script=`<script setup>\r
import { ref } from 'vue'\r
\r
let text = ref('坤坤菜菜子')\r
let text2 = ref('一个真正的鳗')\r
<\/script>`,e}const S=e=>(B("data-v-8a90cc5f"),e=e(),b(),e),N={class:"ice-column"},P={class:"ice-column"},C={class:"ice-row"},F=S(()=>r("br",null,null,-1)),T={class:"ice-row"},x={__name:"input.preview",setup(e){let t=p("坤坤菜菜子"),n=p("一个真正的鳗");return(D,o)=>{const _=l("ice-text"),u=l("ice-input"),h=l("container");return v(),V(g,null,[r("div",N,[s(_,null,{default:i(()=>[d(" 最基础的使用 ")]),_:1})]),s(h,null,{default:i(()=>[r("div",P,[r("div",C,[s(u,{modelValue:a(t),"onUpdate:modelValue":o[0]||(o[0]=c=>m(t)?t.value=c:t=c),class:"input",placeholder:"请输入文字"},null,8,["modelValue"]),s(_,null,{default:i(()=>[d(" 我的名字:"+y(a(t)),1)]),_:1})]),F,r("div",T,[s(u,{modelValue:a(n),"onUpdate:modelValue":o[1]||(o[1]=c=>m(n)?n.value=c:n=c),class:"input",placeholder:"请输入文字"},null,8,["modelValue"])])])]),_:1})],64)}}};typeof f=="function"&&f(x);const U=k(x,[["__scopeId","data-v-8a90cc5f"]]),j={__name:"index",setup(e){return(t,n)=>(v(),I(w,{component:U}))}};export{j as default};
