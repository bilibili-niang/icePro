import{y as x,r as t,o as m,c as v,b as l,w as n,d as c,t as g,F as y,h as B}from"./index-c6aa0d5d.js";import{P as d}from"./preview-25ff2814.js";function f(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const k={__name:"colorSelector.normal.preview",setup(e){const r=x("");return(p,o)=>{const u=t("ice-text"),s=t("color-selector"),i=t("ice-column"),a=t("container");return m(),v(y,null,[l(u,null,{default:n(()=>o[1]||(o[1]=[c("默认使用方法")])),_:1}),l(a,null,{default:n(()=>[l(i,null,{default:n(()=>[l(u,null,{default:n(()=>[c(" colorValue: "+g(r.value),1)]),_:1}),l(s,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=_=>r.value=_)},null,8,["modelValue"])]),_:1})]),_:1})],64)}}};typeof f=="function"&&f(k);function V(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const w={__name:"colorSelector.chinese.preview",setup(e){const r=x("");return(p,o)=>{const u=t("ice-tag"),s=t("ice-text"),i=t("color-selector"),a=t("ice-column"),_=t("container");return m(),B(_,null,{default:n(()=>[l(s,null,{default:n(()=>[o[2]||(o[2]=c("传入 ")),l(u,null,{default:n(()=>o[1]||(o[1]=[c("chinese")])),_:1}),o[3]||(o[3]=c(" 实现开启,默认关闭 "))]),_:1}),l(a,null,{default:n(()=>[l(s,null,{default:n(()=>[c(" 当前选择的颜色: "+g(r.value),1)]),_:1}),l(i,{modelValue:r.value,"onUpdate:modelValue":o[0]||(o[0]=b=>r.value=b),chinese:""},null,8,["modelValue"])]),_:1})]),_:1})}}};typeof V=="function"&&V(w);const $={__name:"index",setup(e){return(r,p)=>(m(),v(y,null,[l(d,{component:k}),l(d,{component:w})],64))}};export{$ as default};
