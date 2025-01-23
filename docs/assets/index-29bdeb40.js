import{k as m,p as N,r as l,o as b,h as x,w as n,a as U,b as t,d as o,B as s,t as P,u as c}from"./index-47a89f4e.js";import{P as T}from"./preview-364e80fc.js";import"https://cdn.skypack.dev/gsap@3.12.0";function v(a){return a.__sourceCode=`<container>\r
    <div class="ice-column">\r
      <ice-button @click="drawer=true">展开</ice-button>\r
      <ice-text>\r
        父组件中的值: drawer:{{ drawer }}\r
      </ice-text>\r
      <ice-text>\r
        你可以使用\r
        <ice-tag>percent</ice-tag>\r
        传入指定宽度/高度,它的默认宽度/高度为20%,请不要使用过小的百分比\r
      </ice-text>\r
      <ice-column>\r
        <ice-text>尝试修改\r
          <ice-tag>width:</ice-tag>\r
        </ice-text>\r
        <ice-row>\r
          <ice-input v-model="width"></ice-input>\r
          <ice-button @click="percentWidth=width">修改</ice-button>\r
        </ice-row>\r
      </ice-column>\r
\r
      <iceSplit/>\r
\r
      <ice-selector v-model="direction" :list="selectionList"></ice-selector>\r
\r
      <ice-drawer v-model="drawer" :direction="direction" :percent="percentWidth">\r
        <ice-text>\r
          drawer里面的数据\r
        </ice-text>\r
      </ice-drawer>\r
    </div>\r
  </container>`,a.__sourceCodeTitle=" 抽屉-drawer ",a.__styleCode='<style lang="less"></style>',a.__script=`<script setup>\r
import {reactive, ref} from "vue"\r
\r
\r
let direction = ref("left")\r
let drawer = ref(false)\r
\r
let percentWidth = ref("30%")\r
let width = ref("20%")\r
const selectionList = reactive([\r
  {\r
    label: "从左侧展开",\r
    value: "left"\r
  },\r
  {\r
    label: "从右侧展开",\r
    value: "right"\r
  },\r
  {\r
    label: "从顶部展开",\r
    value: "top"\r
  },\r
  {\r
    label: "从底部展开",\r
    value: "bottom"\r
  }\r
])\r
\r
<\/script>`,a}const D={class:"ice-column"},V={__name:"drawer.preview",setup(a){let u=m("left"),i=m(!1),p=m("30%"),d=m("20%");const g=N([{label:"从左侧展开",value:"left"},{label:"从右侧展开",value:"right"},{label:"从顶部展开",value:"top"},{label:"从底部展开",value:"bottom"}]);return(R,e)=>{const f=l("ice-button"),_=l("ice-text"),w=l("ice-tag"),k=l("ice-input"),y=l("ice-row"),B=l("ice-column"),S=l("iceSplit"),W=l("ice-selector"),C=l("ice-drawer"),L=l("container");return b(),x(L,null,{default:n(()=>[U("div",D,[t(f,{onClick:e[0]||(e[0]=r=>s(i)?i.value=!0:i=!0)},{default:n(()=>e[5]||(e[5]=[o("展开")])),_:1}),t(_,null,{default:n(()=>[o(" 父组件中的值: drawer:"+P(c(i)),1)]),_:1}),t(_,null,{default:n(()=>[e[7]||(e[7]=o(" 你可以使用 ")),t(w,null,{default:n(()=>e[6]||(e[6]=[o("percent")])),_:1}),e[8]||(e[8]=o(" 传入指定宽度/高度,它的默认宽度/高度为20%,请不要使用过小的百分比 "))]),_:1}),t(B,null,{default:n(()=>[t(_,null,{default:n(()=>[e[10]||(e[10]=o("尝试修改 ")),t(w,null,{default:n(()=>e[9]||(e[9]=[o("width:")])),_:1})]),_:1}),t(y,null,{default:n(()=>[t(k,{modelValue:c(d),"onUpdate:modelValue":e[1]||(e[1]=r=>s(d)?d.value=r:d=r)},null,8,["modelValue"]),t(f,{onClick:e[2]||(e[2]=r=>s(p)?p.value=c(d):p=c(d))},{default:n(()=>e[11]||(e[11]=[o("修改")])),_:1})]),_:1})]),_:1}),t(S),t(W,{modelValue:c(u),"onUpdate:modelValue":e[3]||(e[3]=r=>s(u)?u.value=r:u=r),list:g},null,8,["modelValue","list"]),t(C,{modelValue:c(i),"onUpdate:modelValue":e[4]||(e[4]=r=>s(i)?i.value=r:i=r),direction:c(u),percent:c(p)},{default:n(()=>[t(_,null,{default:n(()=>e[12]||(e[12]=[o(" drawer里面的数据 ")])),_:1})]),_:1},8,["modelValue","direction","percent"])])]),_:1})}}};typeof v=="function"&&v(V);const A={__name:"index",setup(a){return(u,i)=>(b(),x(T,{component:V}))}};export{A as default};
