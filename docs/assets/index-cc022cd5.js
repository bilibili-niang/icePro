import{i as m,r as t,o as s,c as g,b as r,w as a,d as c,u as f,t as d,F as x,G as w,l as v}from"./index-e27d3de1.js";import{P as y}from"./preview-aa1c0d9e.js";import"https://cdn.skypack.dev/gsap@3.12.0";function o(e){return e.__sourceCode=`<container>\r
    <ice-row>\r
      <iceDragger :list="list" />\r
      {{ list }}\r
    </ice-row>\r
  </container>`,e.__sourceCodeTitle=" 拖拽-dragger ",e.__styleCode=`<style scoped lang="less">\r
\r
</style>`,e.__script=`<script setup>\r
import { ref } from 'vue'\r
import iceDragger from '../../../components/dragger/index.js'\r
\r
const list = ref([{\r
  name: '张三',\r
  age: 21\r
}, {\r
  name: '李四',\r
  age: 13\r
}])\r
<\/script>`,e}const i={__name:"dragge.preview",setup(e){const n=m([{name:"张三",age:21},{name:"李四",age:13}]);return(l,k)=>{const _=t("ice-text"),u=t("ice-row"),p=t("container");return s(),g(x,null,[r(_,{noselect:""},{default:a(()=>[c(" 拖动组件,封装了一下 ")]),_:1}),r(p,null,{default:a(()=>[r(u,null,{default:a(()=>[r(f(w),{list:n.value},null,8,["list"]),c(" "+d(n.value),1)]),_:1})]),_:1})],64)}}};typeof o=="function"&&o(i);const b={__name:"index",setup(e){return(n,l)=>(s(),v(y,{component:i}))}};export{b as default};
