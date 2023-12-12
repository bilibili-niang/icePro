import{P as g}from"./preview-dac8e0c6.js";import{h as m,r as a,o as b,c as y,a as l,b as n,w as c,d as u,u as d,y as v,t as k,F as B,_ as I,A as S,B as N,k as P}from"./index-35bddd09.js";function f(e){return e.__sourceCode=`<container>\r
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
      <br/>\r
      <ice-text>\r
        禁用\r
        <ice-tag>disabled</ice-tag>\r
        <br/>\r
      </ice-text>\r
      <div class="ice-row">\r
        <ice-input v-model="text3" class="input" disabled placeholder="请输入文字"></ice-input>\r
      </div>\r
    </div>\r
  </container>`,e.__sourceCodeTitle=" input-normal ",e.__styleCode=`<style lang="less" scoped>\r
.input {\r
  margin-right: 1rem;\r
}\r
</style>`,e.__script=`<script setup>\r
import {ref} from "vue";\r
\r
let text = ref("坤坤菜菜子");\r
let text2 = ref("一个真正的鳗");\r
let text3 = ref("iKun铠甲,合体!");\r
<\/script>`,e}const x=e=>(S("data-v-ee248ecb"),e=e(),N(),e),U={class:"ice-column"},F={class:"ice-column"},K={class:"ice-row"},T=x(()=>l("br",null,null,-1)),A={class:"ice-row"},C=x(()=>l("br",null,null,-1)),D=x(()=>l("br",null,null,-1)),E={class:"ice-row"},h={__name:"input.preview",setup(e){let s=m("坤坤菜菜子"),r=m("一个真正的鳗"),o=m("iKun铠甲,合体!");return(j,i)=>{const _=a("ice-text"),p=a("ice-input"),w=a("ice-tag"),V=a("container");return b(),y(B,null,[l("div",U,[n(_,null,{default:c(()=>[u(" 最基础的使用 ")]),_:1})]),n(V,null,{default:c(()=>[l("div",F,[l("div",K,[n(p,{modelValue:d(s),"onUpdate:modelValue":i[0]||(i[0]=t=>v(s)?s.value=t:s=t),class:"input",placeholder:"请输入文字"},null,8,["modelValue"]),n(_,null,{default:c(()=>[u(" 我的名字:"+k(d(s)),1)]),_:1})]),T,l("div",A,[n(p,{modelValue:d(r),"onUpdate:modelValue":i[1]||(i[1]=t=>v(r)?r.value=t:r=t),class:"input",placeholder:"请输入文字"},null,8,["modelValue"])]),C,n(_,null,{default:c(()=>[u(" 禁用 "),n(w,null,{default:c(()=>[u("disabled")]),_:1}),D]),_:1}),l("div",E,[n(p,{modelValue:d(o),"onUpdate:modelValue":i[2]||(i[2]=t=>v(o)?o.value=t:o=t),class:"input",disabled:"",placeholder:"请输入文字"},null,8,["modelValue"])])])]),_:1})],64)}}};typeof f=="function"&&f(h);const R=I(h,[["__scopeId","data-v-ee248ecb"]]),G={__name:"index",setup(e){return(s,r)=>(b(),P(g,{component:R}))}};export{G as default};
