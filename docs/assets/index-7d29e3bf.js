import{P as v}from"./preview-aa1c0d9e.js";import{l as x}from"./logo-d4fec688.js";import{r as c,o as l,c as _,b as t,w as n,d as r,a as g,u as k,F as u,i as $,p as j,k as B,t as N}from"./index-e27d3de1.js";import"https://cdn.skypack.dev/gsap@3.12.0";function b(e){return e.__sourceCode=`<container>\r
    <div class="ice-column">\r
      <ice-avatar :src="imgUrl"></ice-avatar>\r
      <ice-text>加载出错,使用默认占位符:</ice-text>\r
      <ice-avatar :src="logo"></ice-avatar>\r
    </div>\r
  </container>`,e.__sourceCodeTitle="头像",e.__styleCode=null,e.__script=`<script setup>\r
import logo from '@/assets/png/logo.png'\r
import imgUrl from '/src/assets/png/logo.png'\r
<\/script>`,e}const V={class:"ice-column"},T={__name:"avatar.preview",setup(e){return(o,p)=>{const f=c("iceTag"),i=c("ice-text"),a=c("ice-avatar"),s=c("container");return l(),_(u,null,[t(i,null,{default:n(()=>[r(" 使用 "),t(f,null,{default:n(()=>[r("src")]),_:1}),r(" 传入 ")]),_:1}),t(s,null,{default:n(()=>[g("div",V,[t(a,{src:k(x)},null,8,["src"]),t(i,null,{default:n(()=>[r("加载出错,使用默认占位符:")]),_:1}),t(a,{src:k(x)},null,8,["src"])])]),_:1})],64)}}};typeof b=="function"&&b(T);function h(e){return e.__sourceCode=`<container>\r
    <div class="ice-column">\r
      <ice-avatar :src="imgUrl" block></ice-avatar>\r
      <ice-avatar :src="imgUrl"></ice-avatar>\r
    </div>\r
  </container>`,e.__sourceCodeTitle="头像-block",e.__styleCode=null,e.__script=`<script setup>\r
import {ref} from "vue"\r
\r
const imgUrl = ref("http://blog.icestone.work/default.png")\r
// const imgUrl = "src/assets/png/default.png"\r
<\/script>`,e}const z={class:"ice-column"},U={__name:"avatar.block.preview",setup(e){const o=$("http://blog.icestone.work/default.png");return(p,f)=>{const i=c("iceTag"),a=c("ice-text"),s=c("ice-avatar"),d=c("container");return l(),_(u,null,[t(a,null,{default:n(()=>[r(" 使用 "),t(i,null,{default:n(()=>[r("block")]),_:1}),r(" 控制显示的边框 ")]),_:1}),t(d,null,{default:n(()=>[g("div",z,[t(s,{src:o.value,block:""},null,8,["src"]),t(s,{src:o.value},null,8,["src"])])]),_:1})],64)}}};typeof h=="function"&&h(U);function w(e){return e.__sourceCode=`<container>\r
    <div class="ice-row">\r
      <div v-for="fit in fits" :key="fit" class="ice-column">\r
        <ice-avatar :fit="fit" :src="imgUrl" block size="120"></ice-avatar>\r
        <ice-text>\r
          {{ fit }}\r
        </ice-text>\r
      </div>\r
    </div>\r
  </container>`,e.__sourceCodeTitle="头像-fit",e.__styleCode=null,e.__script=`<script setup>\r
import { reactive } from 'vue'\r
// 你可能会很熟悉,因为图片是我从element plus抄过来的,这个fit属性也是\r
const imgUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\r
const fits = reactive(['fill', 'contain', 'cover', 'none', 'scale-down'])<\/script>`,e}const F={class:"ice-row"},P="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",y={__name:"avatar.fit.preview",setup(e){const o=j(["fill","contain","cover","none","scale-down"]);return(p,f)=>{const i=c("iceTag"),a=c("ice-text"),s=c("ice-avatar"),d=c("container");return l(),_(u,null,[t(a,null,{default:n(()=>[r(" 使用 "),t(i,null,{default:n(()=>[r("fit")]),_:1}),r(" 控制显示的图片 ")]),_:1}),t(d,null,{default:n(()=>[g("div",F,[(l(!0),_(u,null,B(o,m=>(l(),_("div",{key:m,class:"ice-column"},[t(s,{fit:m,src:P,block:"",size:"120"},null,8,["fit"]),t(a,null,{default:n(()=>[r(N(m),1)]),_:2},1024)]))),128))])]),_:1})],64)}}};typeof w=="function"&&w(y);const q={__name:"index",setup(e){return(o,p)=>(l(),_(u,null,[t(v,{component:T}),t(v,{component:U}),t(v,{component:y})],64))}};export{q as default};
