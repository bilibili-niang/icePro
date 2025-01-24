import{P as y}from"./preview-25ff2814.js";import{y as c,r as p,o as b,c as k,a as l,b as n,w as u,d as _,u as s,Q as v,t as B,F as U,_ as j,h as N}from"./index-c6aa0d5d.js";function f(r){return r.__sourceCode=`<container>\r
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
  </container>`,r.__sourceCodeTitle=" input-normal ",r.__styleCode=`<style lang="less" scoped>\r
.input {\r
  margin-right: 1rem;\r
}\r
</style>`,r.__script=`<script setup>\r
import { ref } from 'vue'\r
\r
let text = ref('坤坤菜菜子')\r
let text2 = ref('一个真正的鳗')\r
let text3 = ref('iKun铠甲,合体!')\r
let obj = ref({\r
  text: '测试文字'\r
})\r
<\/script>`,r}const P={class:"ice-column"},F={class:"ice-column"},K={class:"ice-row"},T={class:"ice-row"},C={class:"ice-row"},D={class:"ice-row"},V={__name:"input.preview",setup(r){let i=c("坤坤菜菜子"),o=c("一个真正的鳗"),a=c("iKun铠甲,合体!"),x=c({text:"测试文字"});return(I,e)=>{const m=p("ice-text"),d=p("ice-input"),w=p("ice-tag"),g=p("container");return b(),k(U,null,[l("div",P,[n(m,null,{default:u(()=>e[4]||(e[4]=[_(" 最基础的使用 ")])),_:1})]),n(g,null,{default:u(()=>[l("div",F,[l("div",K,[n(d,{modelValue:s(i),"onUpdate:modelValue":e[0]||(e[0]=t=>v(i)?i.value=t:i=t),class:"input",placeholder:"请输入文字"},null,8,["modelValue"]),n(m,null,{default:u(()=>[_(" 我的名字:"+B(s(i)),1)]),_:1})]),e[8]||(e[8]=l("br",null,null,-1)),l("div",T,[n(d,{modelValue:s(o),"onUpdate:modelValue":e[1]||(e[1]=t=>v(o)?o.value=t:o=t),class:"input",placeholder:"请输入文字"},null,8,["modelValue"])]),e[9]||(e[9]=l("br",null,null,-1)),n(m,null,{default:u(()=>[e[6]||(e[6]=_(" 禁用 ")),n(w,null,{default:u(()=>e[5]||(e[5]=[_("disabled")])),_:1}),e[7]||(e[7]=l("br",null,null,-1))]),_:1}),l("div",C,[n(d,{modelValue:s(a),"onUpdate:modelValue":e[2]||(e[2]=t=>v(a)?a.value=t:a=t),class:"input",disabled:"",placeholder:"请输入文字"},null,8,["modelValue"])]),l("div",D,[n(d,{modelValue:s(x).text,"onUpdate:modelValue":e[3]||(e[3]=t=>s(x).text=t),class:"input",placeholder:"对象属性修改"},null,8,["modelValue"])])])]),_:1})],64)}}};typeof f=="function"&&f(V);const E=j(V,[["__scopeId","data-v-be9c8fe4"]]),S={__name:"index",setup(r){return(i,o)=>(b(),N(y,{component:E}))}};export{S as default};
