import{P as y}from"./preview-67288d84.js";import{i as u,r as p,o as h,c as k,a as n,b as l,w as c,d as _,u as r,A as v,t as B,F as I,_ as S,C as U,D as j,l as N}from"./index-e7d85970.js";import"https://cdn.skypack.dev/gsap@3.12.0";function b(e){return e.__sourceCode=`<container>\r
    <div class="ice-column">\r
      <div class="ice-row">\r
        <ice-input v-model="text" class="input" placeholder="请输入文字"></ice-input>\r
        <ice-text>\r
          我的名字:{{ text }}\r
        </ice-text>\r
      </div>\r
      <br />\r
      <div class="ice-row">\r
        <ice-input v-model="text2" class="input" placeholder="请输入文字"></ice-input>\r
      </div>\r
      <br />\r
      <ice-text>\r
        禁用\r
        <ice-tag>disabled</ice-tag>\r
        <br />\r
      </ice-text>\r
      <div class="ice-row">\r
        <ice-input v-model="text3" class="input" disabled placeholder="请输入文字"></ice-input>\r
      </div>\r
      <div class="ice-row">\r
        <ice-input v-model="obj.text" class="input" placeholder="对象属性修改"></ice-input>\r
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
let text3 = ref('iKun铠甲,合体!')\r
let obj = ref({\r
  text: '测试文字'\r
})\r
<\/script>`,e}const x=e=>(U("data-v-be9c8fe4"),e=e(),j(),e),P={class:"ice-column"},C={class:"ice-column"},D={class:"ice-row"},F=x(()=>n("br",null,null,-1)),K={class:"ice-row"},T=x(()=>n("br",null,null,-1)),A=x(()=>n("br",null,null,-1)),E={class:"ice-row"},R={class:"ice-row"},w={__name:"input.preview",setup(e){let o=u("坤坤菜菜子"),s=u("一个真正的鳗"),a=u("iKun铠甲,合体!"),f=u({text:"测试文字"});return(z,i)=>{const m=p("ice-text"),d=p("ice-input"),V=p("ice-tag"),g=p("container");return h(),k(I,null,[n("div",P,[l(m,null,{default:c(()=>[_(" 最基础的使用 ")]),_:1})]),l(g,null,{default:c(()=>[n("div",C,[n("div",D,[l(d,{modelValue:r(o),"onUpdate:modelValue":i[0]||(i[0]=t=>v(o)?o.value=t:o=t),class:"input",placeholder:"请输入文字"},null,8,["modelValue"]),l(m,null,{default:c(()=>[_(" 我的名字:"+B(r(o)),1)]),_:1})]),F,n("div",K,[l(d,{modelValue:r(s),"onUpdate:modelValue":i[1]||(i[1]=t=>v(s)?s.value=t:s=t),class:"input",placeholder:"请输入文字"},null,8,["modelValue"])]),T,l(m,null,{default:c(()=>[_(" 禁用 "),l(V,null,{default:c(()=>[_("disabled")]),_:1}),A]),_:1}),n("div",E,[l(d,{modelValue:r(a),"onUpdate:modelValue":i[2]||(i[2]=t=>v(a)?a.value=t:a=t),class:"input",disabled:"",placeholder:"请输入文字"},null,8,["modelValue"])]),n("div",R,[l(d,{modelValue:r(f).text,"onUpdate:modelValue":i[3]||(i[3]=t=>r(f).text=t),class:"input",placeholder:"对象属性修改"},null,8,["modelValue"])])])]),_:1})],64)}}};typeof b=="function"&&b(w);const q=S(w,[["__scopeId","data-v-be9c8fe4"]]),L={__name:"index",setup(e){return(o,s)=>(h(),N(y,{component:q}))}};export{L as default};
