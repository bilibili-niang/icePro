import{i as m,p as L,r as l,o as b,l as x,w as t,a as N,b as e,d as c,A as s,t as U,u as o}from"./index-9145f539.js";import{P}from"./preview-50ceab38.js";import"https://cdn.skypack.dev/gsap@3.12.0";function v(a){return a.__sourceCode=`<container>\r
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
<\/script>`,a}const T={class:"ice-column"},V={__name:"drawer.preview",setup(a){let u=m("left"),i=m(!1),_=m("30%"),d=m("20%");const g=L([{label:"从左侧展开",value:"left"},{label:"从右侧展开",value:"right"},{label:"从顶部展开",value:"top"},{label:"从底部展开",value:"bottom"}]);return(A,n)=>{const f=l("ice-button"),p=l("ice-text"),w=l("ice-tag"),k=l("ice-input"),h=l("ice-row"),y=l("ice-column"),S=l("iceSplit"),W=l("ice-selector"),B=l("ice-drawer"),C=l("container");return b(),x(C,null,{default:t(()=>[N("div",T,[e(f,{onClick:n[0]||(n[0]=r=>s(i)?i.value=!0:i=!0)},{default:t(()=>[c("展开")]),_:1}),e(p,null,{default:t(()=>[c(" 父组件中的值: drawer:"+U(o(i)),1)]),_:1}),e(p,null,{default:t(()=>[c(" 你可以使用 "),e(w,null,{default:t(()=>[c("percent")]),_:1}),c(" 传入指定宽度/高度,它的默认宽度/高度为20%,请不要使用过小的百分比 ")]),_:1}),e(y,null,{default:t(()=>[e(p,null,{default:t(()=>[c("尝试修改 "),e(w,null,{default:t(()=>[c("width:")]),_:1})]),_:1}),e(h,null,{default:t(()=>[e(k,{modelValue:o(d),"onUpdate:modelValue":n[1]||(n[1]=r=>s(d)?d.value=r:d=r)},null,8,["modelValue"]),e(f,{onClick:n[2]||(n[2]=r=>s(_)?_.value=o(d):_=o(d))},{default:t(()=>[c("修改")]),_:1})]),_:1})]),_:1}),e(S),e(W,{modelValue:o(u),"onUpdate:modelValue":n[3]||(n[3]=r=>s(u)?u.value=r:u=r),list:g},null,8,["modelValue","list"]),e(B,{modelValue:o(i),"onUpdate:modelValue":n[4]||(n[4]=r=>s(i)?i.value=r:i=r),direction:o(u),percent:o(_)},{default:t(()=>[e(p,null,{default:t(()=>[c(" drawer里面的数据 ")]),_:1})]),_:1},8,["modelValue","direction","percent"])])]),_:1})}}};typeof v=="function"&&v(V);const q={__name:"index",setup(a){return(u,i)=>(b(),x(P,{component:V}))}};export{q as default};
