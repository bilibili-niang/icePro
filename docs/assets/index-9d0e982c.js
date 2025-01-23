import{k as g,r as t,o as i,c as f,b as r,w as o,d as a,u as d,E as x,t as w,F as v,h as k}from"./index-47a89f4e.js";import{P as y}from"./preview-364e80fc.js";import"https://cdn.skypack.dev/gsap@3.12.0";function c(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const l={__name:"dragge.preview",setup(e){const n=g([{name:"张三",age:21},{name:"李四",age:13}]);return(_,s)=>{const u=t("ice-text"),p=t("ice-row"),m=t("container");return i(),f(v,null,[r(u,{noselect:""},{default:o(()=>s[0]||(s[0]=[a(" 拖动组件,封装了一下 ")])),_:1}),r(m,null,{default:o(()=>[r(p,null,{default:o(()=>[r(d(x),{list:n.value},null,8,["list"]),a(" "+w(n.value),1)]),_:1})]),_:1})],64)}}};typeof c=="function"&&c(l);const h={__name:"index",setup(e){return(n,_)=>(i(),k(y,{component:l}))}};export{h as default};
