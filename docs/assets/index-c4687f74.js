import{k as x,r as l,o as m,c as v,b as t,w as n,d as c,t as g,F as k,h as B}from"./index-47a89f4e.js";import{P as d}from"./preview-364e80fc.js";import"https://cdn.skypack.dev/gsap@3.12.0";function f(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const w={__name:"colorSelector.normal.preview",setup(e){const r=x("");return(p,o)=>{const u=l("ice-text"),s=l("color-selector"),i=l("ice-column"),a=l("container");return m(),v(k,null,[t(u,null,{default:n(()=>o[1]||(o[1]=[c("默认使用方法")])),_:1}),t(a,null,{default:n(()=>[t(i,null,{default:n(()=>[t(u,null,{default:n(()=>[c(" colorValue: "+g(r.value),1)]),_:1}),t(s,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=_=>r.value=_)},null,8,["modelValue"])]),_:1})]),_:1})],64)}}};typeof f=="function"&&f(w);function V(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const y={__name:"colorSelector.chinese.preview",setup(e){const r=x("");return(p,o)=>{const u=l("ice-tag"),s=l("ice-text"),i=l("color-selector"),a=l("ice-column"),_=l("container");return m(),B(_,null,{default:n(()=>[t(s,null,{default:n(()=>[o[2]||(o[2]=c("传入 ")),t(u,null,{default:n(()=>o[1]||(o[1]=[c("chinese")])),_:1}),o[3]||(o[3]=c(" 实现开启,默认关闭 "))]),_:1}),t(a,null,{default:n(()=>[t(s,null,{default:n(()=>[c(" 当前选择的颜色: "+g(r.value),1)]),_:1}),t(i,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=b=>r.value=b),chinese:""},null,8,["modelValue"])]),_:1})]),_:1})}}};typeof V=="function"&&V(y);const F={__name:"index",setup(e){return(r,p)=>(m(),v(k,null,[t(d,{component:w}),t(d,{component:y})],64))}};export{F as default};
