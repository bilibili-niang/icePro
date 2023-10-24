import{h as _,p as S,r as n,o as f,k as m,w as l,a as B,b as r,d as a,y as d,t as L,u as s}from"./index-61cb4129.js";import{P as N}from"./preview-b5ce8146.js";function p(t){return t.__sourceCode=`<container>\r
    <div class="ice-column">\r
      <ice-button @click="drawer=true">展开</ice-button>\r
      <ice-text>\r
        父组件中的值: drawer:{{ drawer }}\r
      </ice-text>\r
      <ice-text>\r
        你可以使用\r
        <ice-tag>percent</ice-tag>\r
        传入指定宽度/高度,它的默认宽度/高度为20%\r
      </ice-text>\r
\r
      <iceSplit/>\r
\r
      <ice-selector v-model="direction" :list="selectionList"></ice-selector>\r
\r
      <ice-drawer v-model="drawer" :direction="direction" percent="30%">\r
        <ice-text>\r
          drawer里面的数据\r
        </ice-text>\r
      </ice-drawer>\r
    </div>\r
  </container>`,t.__sourceCodeTitle=" 抽屉-drawer ",t.__styleCode='<style lang="less"></style>',t.__script=`<script setup>\r
import {reactive, ref} from 'vue'\r
\r
\r
let direction = ref('left')\r
let drawer = ref(false)\r
\r
const selectionList = reactive([\r
  {\r
    label: '从左侧展开',\r
    value: 'left'\r
  },\r
  {\r
    label: '从右侧展开',\r
    value: 'right'\r
  },\r
  {\r
    label: '从顶部展开',\r
    value: 'top'\r
  },\r
  {\r
    label: '从底部展开',\r
    value: 'bottom'\r
  }\r
])\r
\r
<\/script>`,t}const C={class:"ice-column"},v={__name:"drawer.preview",setup(t){let c=_("left"),e=_(!1);const w=S([{label:"从左侧展开",value:"left"},{label:"从右侧展开",value:"right"},{label:"从顶部展开",value:"top"},{label:"从底部展开",value:"bottom"}]);return(P,o)=>{const b=n("ice-button"),u=n("ice-text"),x=n("ice-tag"),V=n("iceSplit"),g=n("ice-selector"),k=n("ice-drawer"),y=n("container");return f(),m(y,null,{default:l(()=>[B("div",C,[r(b,{onClick:o[0]||(o[0]=i=>d(e)?e.value=!0:e=!0)},{default:l(()=>[a("展开")]),_:1}),r(u,null,{default:l(()=>[a(" 父组件中的值: drawer:"+L(s(e)),1)]),_:1}),r(u,null,{default:l(()=>[a(" 你可以使用 "),r(x,null,{default:l(()=>[a("percent")]),_:1}),a(" 传入指定宽度/高度,它的默认宽度/高度为20% ")]),_:1}),r(V),r(g,{modelValue:s(c),"onUpdate:modelValue":o[1]||(o[1]=i=>d(c)?c.value=i:c=i),list:w},null,8,["modelValue","list"]),r(k,{modelValue:s(e),"onUpdate:modelValue":o[2]||(o[2]=i=>d(e)?e.value=i:e=i),direction:s(c),percent:"30%"},{default:l(()=>[r(u,null,{default:l(()=>[a(" drawer里面的数据 ")]),_:1})]),_:1},8,["modelValue","direction"])])]),_:1})}}};typeof p=="function"&&p(v);const h={__name:"index",setup(t){return(c,e)=>(f(),m(N,{component:v}))}};export{h as default};
