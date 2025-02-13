import{P as y}from"./preview-6e362995.js";import{r as c,a as p,o as b,b as j,d as l,f as n,w as u,g as _,u as r,P as v,t as k,F as B,_ as P,j as U}from"./index-d051d01d.js";const f=i=>{i.__sourceCodeTitle=" input-normal ",i.__sourceCode=`<div class="ice-column">\r
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
    </div>`,i.__script=`import { ref } from 'vue'\r
\r
let text = ref('坤坤菜菜子')\r
let text2 = ref('一个真正的鳗')\r
let text3 = ref('iKun铠甲,合体!')\r
let obj = ref({\r
  text: '测试文字'\r
})`,i.__styleCode=`.input {\r
  margin-right: 1rem;\r
}`},N={class:"ice-column"},C={class:"ice-column"},F={class:"ice-row"},K={class:"ice-row"},T={class:"ice-row"},D={class:"ice-row"},V={__name:"input.preview",setup(i){let o=c("坤坤菜菜子"),s=c("一个真正的鳗"),a=c("iKun铠甲,合体!"),x=c({text:"测试文字"});return(I,e)=>{const m=p("ice-text"),d=p("ice-input"),w=p("ice-tag"),g=p("container");return b(),j(B,null,[l("div",N,[n(m,null,{default:u(()=>e[4]||(e[4]=[_(" 最基础的使用 ")])),_:1})]),n(g,null,{default:u(()=>[l("div",C,[l("div",F,[n(d,{modelValue:r(o),"onUpdate:modelValue":e[0]||(e[0]=t=>v(o)?o.value=t:o=t),class:"input",placeholder:"请输入文字"},null,8,["modelValue"]),n(m,null,{default:u(()=>[_(" 我的名字:"+k(r(o)),1)]),_:1})]),e[8]||(e[8]=l("br",null,null,-1)),l("div",K,[n(d,{modelValue:r(s),"onUpdate:modelValue":e[1]||(e[1]=t=>v(s)?s.value=t:s=t),class:"input",placeholder:"请输入文字"},null,8,["modelValue"])]),e[9]||(e[9]=l("br",null,null,-1)),n(m,null,{default:u(()=>[e[6]||(e[6]=_(" 禁用 ")),n(w,null,{default:u(()=>e[5]||(e[5]=[_("disabled")])),_:1}),e[7]||(e[7]=l("br",null,null,-1))]),_:1}),l("div",T,[n(d,{modelValue:r(a),"onUpdate:modelValue":e[2]||(e[2]=t=>v(a)?a.value=t:a=t),class:"input",disabled:"",placeholder:"请输入文字"},null,8,["modelValue"])]),l("div",D,[n(d,{modelValue:r(x).text,"onUpdate:modelValue":e[3]||(e[3]=t=>r(x).text=t),class:"input",placeholder:"对象属性修改"},null,8,["modelValue"])])])]),_:1})],64)}}};typeof f=="function"&&f(V);const E=P(V,[["__scopeId","data-v-be9c8fe4"]]),q={__name:"index",setup(i){return(o,s)=>(b(),U(y,{component:E}))}};export{q as default};
