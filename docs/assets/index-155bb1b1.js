import{i as f,p as b,r as l,o as _,c as x,a,b as t,w as n,d as i,F as V,l as k}from"./index-e27d3de1.js";import{P as w}from"./preview-aa1c0d9e.js";import"https://cdn.skypack.dev/gsap@3.12.0";function u(e){return e.__sourceCode=`<container>\r
    <div class="column">\r
      <ice-text>下面这个是选择器</ice-text>\r
      <ice-selector v-model="value" :list="selectionList"></ice-selector>\r
    </div>\r
  </container>`,e.__sourceCodeTitle=" selector-normal ",e.__styleCode=`<style scoped>\r
\r
</style>`,e.__script=`<script setup>\r
import { ref, reactive } from 'vue'\r
\r
const value = ref('3')\r
const selectionList = reactive([\r
  {\r
    label: '西瓜',\r
    value: '1'\r
  },\r
  {\r
    label: '葡萄',\r
    value: '2'\r
  },\r
  {\r
    label: '桃子',\r
    value: '3'\r
  },\r
  {\r
    label: '猕猴桃',\r
    value: '4'\r
  }\r
])\r
\r
<\/script>`,e}const y={class:"ice-column"},B={class:"column"},v={__name:"selector.preview",setup(e){const r=f("3"),c=b([{label:"西瓜",value:"1"},{label:"葡萄",value:"2"},{label:"桃子",value:"3"},{label:"猕猴桃",value:"4"}]);return(h,o)=>{const s=l("ice-text"),d=l("ice-selector"),m=l("container");return _(),x(V,null,[a("div",y,[t(s,null,{default:n(()=>[i(" selector ")]),_:1})]),t(m,null,{default:n(()=>[a("div",B,[t(s,null,{default:n(()=>[i("下面这个是选择器")]),_:1}),t(d,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=p=>r.value=p),list:c},null,8,["modelValue","list"])])]),_:1})],64)}}};typeof u=="function"&&u(v);const P={__name:"index",setup(e){return(r,c)=>(_(),k(w,{component:v}))}};export{P as default};
