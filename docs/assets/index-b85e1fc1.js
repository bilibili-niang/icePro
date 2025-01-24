import{y as f,G as b,r as l,o as _,c as x,a as c,b as r,w as o,d as i,F as V,h as y}from"./index-c6aa0d5d.js";import{P as k}from"./preview-25ff2814.js";function u(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const w={class:"ice-column"},B={class:"column"},v={__name:"selector.preview",setup(e){const n=f("3"),s=b([{label:"西瓜",value:"1"},{label:"葡萄",value:"2"},{label:"桃子",value:"3"},{label:"猕猴桃",value:"4"}]);return(L,t)=>{const a=l("ice-text"),d=l("ice-selector"),m=l("container");return _(),x(V,null,[c("div",w,[r(a,null,{default:o(()=>t[1]||(t[1]=[i(" selector ")])),_:1})]),r(m,null,{default:o(()=>[c("div",B,[r(a,null,{default:o(()=>t[2]||(t[2]=[i("下面这个是选择器")])),_:1}),r(d,{modelValue:n.value,"onUpdate:modelValue":t[0]||(t[0]=p=>n.value=p),list:s},null,8,["modelValue","list"])])]),_:1})],64)}}};typeof u=="function"&&u(v);const P={__name:"index",setup(e){return(n,s)=>(_(),y(k,{component:v}))}};export{P as default};
