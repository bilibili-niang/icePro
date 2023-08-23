import{f as a,r as c,o as m,v as f,w as s,a as k,b as n,d as u,x as d,t as S,u as i,y as B,z as I}from"./index-f38a0360.js";import{P as N}from"./preview-32692264.js";function _(o){return o.__sourceCode=`<show>\r
    <div class="ice-column">\r
      <ice-button @click="drawer=true">展开</ice-button>\r
      <ice-text>\r
        父组件中的值: drawer:{{ drawer }}\r
      </ice-text>\r
\r
      <split></split>\r
      <ice-selector-group v-model="selectorValue">\r
        <ice-selector label=""></ice-selector>\r
      </ice-selector-group>\r
      <ice-input v-model="direction"></ice-input>\r
      <ice-drawer v-model="drawer" :direction="direction">\r
        drawer里面的数据\r
      </ice-drawer>\r
    </div>\r
  </show>`,o.__sourceCodeTitle=" 抽屉-drawer ",o.__styleCode='<style lang="less"></style>',o.__script=`<script setup>\r
import { ref } from 'vue'\r
import IceSelector from '@/components/selector/src/ice-selector.vue'\r
import IceSelectorGroup from '@/components/selector-group/src/ice-selector-group.vue'\r
\r
let direction = ref('left')\r
let drawer = ref(false)\r
\r
const selectorValue = ref('top')\r
\r
<\/script>`,o}const U={class:"ice-column"},w={__name:"drawer.preview",setup(o){let l=a("left"),e=a(!1);const p=a("top");return(C,r)=>{const v=c("ice-button"),V=c("ice-text"),x=c("split"),b=c("ice-input"),g=c("ice-drawer"),y=c("show");return m(),f(y,null,{default:s(()=>[k("div",U,[n(v,{onClick:r[0]||(r[0]=t=>d(e)?e.value=!0:e=!0)},{default:s(()=>[u("展开")]),_:1}),n(V,null,{default:s(()=>[u(" 父组件中的值: drawer:"+S(i(e)),1)]),_:1}),n(x),n(I,{modelValue:p.value,"onUpdate:modelValue":r[1]||(r[1]=t=>p.value=t)},{default:s(()=>[n(B,{label:""})]),_:1},8,["modelValue"]),n(b,{modelValue:i(l),"onUpdate:modelValue":r[2]||(r[2]=t=>d(l)?l.value=t:l=t)},null,8,["modelValue"]),n(g,{modelValue:i(e),"onUpdate:modelValue":r[3]||(r[3]=t=>d(e)?e.value=t:e=t),direction:i(l)},{default:s(()=>[u(" drawer里面的数据 ")]),_:1},8,["modelValue","direction"])])]),_:1})}}};typeof _=="function"&&_(w);const T={__name:"index",setup(o){return(l,e)=>(m(),f(N,{component:w}))}};export{T as default};
