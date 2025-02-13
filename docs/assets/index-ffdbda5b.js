import{r as f,C as b,a as r,o as _,b as x,d as c,f as t,w as o,g as i,F as V,j as k}from"./index-d051d01d.js";import{P as w}from"./preview-6e362995.js";const u=l=>{l.__sourceCodeTitle=" selector-normal ",l.__sourceCode=`<div class="column">\r
      <ice-text>下面这个是选择器</ice-text>\r
      <ice-selector v-model="value" :list="selectionList"></ice-selector>\r
    </div>`,l.__script=`import { ref, reactive } from 'vue'\r
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
])`},B={class:"ice-column"},C={class:"column"},v={__name:"selector.preview",setup(l){const n=f("3"),s=b([{label:"西瓜",value:"1"},{label:"葡萄",value:"2"},{label:"桃子",value:"3"},{label:"猕猴桃",value:"4"}]);return(L,e)=>{const a=r("ice-text"),m=r("ice-selector"),d=r("container");return _(),x(V,null,[c("div",B,[t(a,null,{default:o(()=>e[1]||(e[1]=[i(" selector ")])),_:1})]),t(d,null,{default:o(()=>[c("div",C,[t(a,null,{default:o(()=>e[2]||(e[2]=[i("下面这个是选择器")])),_:1}),t(m,{modelValue:n.value,"onUpdate:modelValue":e[0]||(e[0]=p=>n.value=p),list:s},null,8,["modelValue","list"])])]),_:1})],64)}}};typeof u=="function"&&u(v);const F={__name:"index",setup(l){return(n,s)=>(_(),k(w,{component:v}))}};export{F as default};
