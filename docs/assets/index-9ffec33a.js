import{r as x,a as t,o as m,b as v,f as o,w as n,g as r,t as g,F as k,j as B}from"./index-c04fac71.js";import{P as f}from"./preview-e981285a.js";const d=l=>{l.__sourceCodeTitle=" color-selector ",l.__sourceCode=`<ice-column>\r
      <ice-text>\r
        colorValue: {{ colorValue }}\r
      </ice-text>\r
      <color-selector v-model="colorValue"></color-selector>\r
    </ice-column>`,l.__script=`import {ref} from "vue"\r
\r
const colorValue = ref("")`},w={__name:"colorSelector.normal.preview",setup(l){const c=x("");return(p,e)=>{const u=t("ice-text"),s=t("color-selector"),a=t("ice-column"),_=t("container");return m(),v(k,null,[o(u,null,{default:n(()=>e[1]||(e[1]=[r("默认使用方法")])),_:1}),o(_,null,{default:n(()=>[o(a,null,{default:n(()=>[o(u,null,{default:n(()=>[r(" colorValue: "+g(c.value),1)]),_:1}),o(s,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=i=>c.value=i)},null,8,["modelValue"])]),_:1})]),_:1})],64)}}};typeof d=="function"&&d(w);const V=l=>{l.__sourceCodeTitle=" color-selector 中国传统色 ",l.__sourceCode=`<ice-text>传入\r
      <ice-tag>chinese</ice-tag>\r
      实现开启,默认关闭\r
    </ice-text>\r
    <ice-column>\r
      <ice-text>\r
        当前选择的颜色: {{ colorValue }}\r
      </ice-text>\r
      <color-selector v-model="colorValue" chinese></color-selector>\r
    </ice-column>`,l.__script=`import {ref} from "vue"\r
\r
const colorValue = ref("")`},b={__name:"colorSelector.chinese.preview",setup(l){const c=x("");return(p,e)=>{const u=t("ice-tag"),s=t("ice-text"),a=t("color-selector"),_=t("ice-column"),i=t("container");return m(),B(i,null,{default:n(()=>[o(s,null,{default:n(()=>[e[2]||(e[2]=r("传入 ")),o(u,null,{default:n(()=>e[1]||(e[1]=[r("chinese")])),_:1}),e[3]||(e[3]=r(" 实现开启,默认关闭 "))]),_:1}),o(_,null,{default:n(()=>[o(s,null,{default:n(()=>[r(" 当前选择的颜色: "+g(c.value),1)]),_:1}),o(a,{modelValue:c.value,"onUpdate:modelValue":e[0]||(e[0]=y=>c.value=y),chinese:""},null,8,["modelValue"])]),_:1})]),_:1})}}};typeof V=="function"&&V(b);const $={__name:"index",setup(l){return(c,p)=>(m(),v(k,null,[o(f,{component:w}),o(f,{component:b})],64))}};export{$ as default};
