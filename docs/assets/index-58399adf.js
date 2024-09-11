import{h as f,m as b,r as n,o as _,c as x,a,b as t,w as l,d as i,F as V,k}from"./index-b8fee99f.js";import{P as h}from"./preview-b4316df3.js";import"https://cdn.skypack.dev/gsap@3.12.0";function u(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const w={class:"ice-column"},y={class:"column"},v={__name:"selector.preview",setup(e){const r=f("3"),c=b([{label:"西瓜",value:"1"},{label:"葡萄",value:"2"},{label:"桃子",value:"3"},{label:"猕猴桃",value:"4"}]);return(B,o)=>{const s=n("ice-text"),d=n("ice-selector"),m=n("container");return _(),x(V,null,[a("div",w,[t(s,null,{default:l(()=>[i(" selector ")]),_:1})]),t(m,null,{default:l(()=>[a("div",y,[t(s,null,{default:l(()=>[i("下面这个是选择器")]),_:1}),t(d,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=p=>r.value=p),list:c},null,8,["modelValue","list"])])]),_:1})],64)}}};typeof u=="function"&&u(v);const P={__name:"index",setup(e){return(r,c)=>(_(),k(h,{component:v}))}};export{P as default};
