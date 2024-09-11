import{i as x,r as c,o as m,c as v,b as o,w as l,d as n,t as g,F as h,l as b}from"./index-e7d85970.js";import{P as d}from"./preview-67288d84.js";import"https://cdn.skypack.dev/gsap@3.12.0";function f(e){return e.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-text>\r
        colorValue: {{ colorValue }}\r
      </ice-text>\r
      <color-selector v-model="colorValue"></color-selector>\r
    </ice-column>\r
  </container>`,e.__sourceCodeTitle=" color-selector ",e.__styleCode=null,e.__script=`<script setup>\r
import {ref} from "vue"\r
\r
const colorValue = ref("")\r
<\/script>`,e}const k={__name:"colorSelector.normal.preview",setup(e){const t=x("");return(p,r)=>{const u=c("ice-text"),a=c("color-selector"),_=c("ice-column"),s=c("container");return m(),v(h,null,[o(u,null,{default:l(()=>[n("默认使用方法")]),_:1}),o(s,null,{default:l(()=>[o(_,null,{default:l(()=>[o(u,null,{default:l(()=>[n(" colorValue: "+g(t.value),1)]),_:1}),o(a,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=i=>t.value=i)},null,8,["modelValue"])]),_:1})]),_:1})],64)}}};typeof f=="function"&&f(k);function V(e){return e.__sourceCode=`<container>\r
    <ice-text>传入\r
      <ice-tag>chinese</ice-tag>\r
      实现开启,默认关闭\r
    </ice-text>\r
    <ice-column>\r
      <ice-text>\r
        当前选择的颜色: {{ colorValue }}\r
      </ice-text>\r
      <color-selector v-model="colorValue" chinese></color-selector>\r
    </ice-column>\r
  </container>`,e.__sourceCodeTitle=" color-selector 中国传统色 ",e.__styleCode=null,e.__script=`<script setup>\r
import {ref} from "vue"\r
\r
const colorValue = ref("")\r
<\/script>`,e}const w={__name:"colorSelector.chinese.preview",setup(e){const t=x("");return(p,r)=>{const u=c("ice-tag"),a=c("ice-text"),_=c("color-selector"),s=c("ice-column"),i=c("container");return m(),b(i,null,{default:l(()=>[o(a,null,{default:l(()=>[n("传入 "),o(u,null,{default:l(()=>[n("chinese")]),_:1}),n(" 实现开启,默认关闭 ")]),_:1}),o(s,null,{default:l(()=>[o(a,null,{default:l(()=>[n(" 当前选择的颜色: "+g(t.value),1)]),_:1}),o(_,{modelValue:t.value,"onUpdate:modelValue":r[0]||(r[0]=y=>t.value=y),chinese:""},null,8,["modelValue"])]),_:1})]),_:1})}}};typeof V=="function"&&V(w);const $={__name:"index",setup(e){return(t,p)=>(m(),v(h,null,[o(d,{component:k}),o(d,{component:w})],64))}};export{$ as default};
