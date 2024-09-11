import{h as x,r as c,o as m,c as v,b as o,w as t,d as n,t as g,F as h,k as b}from"./index-b8fee99f.js";import{P as d}from"./preview-b4316df3.js";import"https://cdn.skypack.dev/gsap@3.12.0";function f(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const k={__name:"colorSelector.normal.preview",setup(e){const l=x("");return(p,r)=>{const u=c("ice-text"),a=c("color-selector"),_=c("ice-column"),s=c("container");return m(),v(h,null,[o(u,null,{default:t(()=>[n("默认使用方法")]),_:1}),o(s,null,{default:t(()=>[o(_,null,{default:t(()=>[o(u,null,{default:t(()=>[n(" colorValue: "+g(l.value),1)]),_:1}),o(a,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=i=>l.value=i)},null,8,["modelValue"])]),_:1})]),_:1})],64)}}};typeof f=="function"&&f(k);function V(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const w={__name:"colorSelector.chinese.preview",setup(e){const l=x("");return(p,r)=>{const u=c("ice-tag"),a=c("ice-text"),_=c("color-selector"),s=c("ice-column"),i=c("container");return m(),b(i,null,{default:t(()=>[o(a,null,{default:t(()=>[n("传入 "),o(u,null,{default:t(()=>[n("chinese")]),_:1}),n(" 实现开启,默认关闭 ")]),_:1}),o(s,null,{default:t(()=>[o(a,null,{default:t(()=>[n(" 当前选择的颜色: "+g(l.value),1)]),_:1}),o(_,{modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=y=>l.value=y),chinese:""},null,8,["modelValue"])]),_:1})]),_:1})}}};typeof V=="function"&&V(w);const $={__name:"index",setup(e){return(l,p)=>(m(),v(h,null,[o(d,{component:k}),o(d,{component:w})],64))}};export{$ as default};
