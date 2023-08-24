import{P as v}from"./preview-f5aef03e.js";import{i as U}from"./logo-14c7b78c.js";import{r as t,o as l,c as _,b as c,w as r,d as n,a as g,u as y,F as u,f as $,k as j,l as B,t as N}from"./index-d84a2405.js";function h(e){return e.__sourceCode=`<show>\r
    <div class="ice-column">\r
      <ice-avatar :src="imgUrl"></ice-avatar>\r
      <ice-text>加载出错,使用默认占位符:</ice-text>\r
      <ice-avatar src="@/src/assets/png/logo.png"></ice-avatar>\r
    </div>\r
  </show>`,e.__sourceCodeTitle="头像",e.__styleCode=null,e.__script=`<script setup>\r
import imgUrl from "/src/assets/png/logo.png"<\/script>`,e}const V={class:"ice-column"},k={__name:"avatar.preview",setup(e){return(a,f)=>{const p=t("iceTag"),o=t("ice-text"),s=t("ice-avatar"),i=t("show");return l(),_(u,null,[c(o,null,{default:r(()=>[n(" 使用 "),c(p,null,{default:r(()=>[n("src")]),_:1}),n(" 传入 ")]),_:1}),c(i,null,{default:r(()=>[g("div",V,[c(s,{src:y(U)},null,8,["src"]),c(o,null,{default:r(()=>[n("加载出错,使用默认占位符:")]),_:1}),c(s,{src:"@/src/assets/png/logo.png"})])]),_:1})],64)}}};typeof h=="function"&&h(k);function w(e){return e.__sourceCode=`<show>\r
    <div class="ice-column">\r
      <ice-avatar :src="imgUrl" block></ice-avatar>\r
      <ice-avatar :src="imgUrl"></ice-avatar>\r
    </div>\r
  </show>`,e.__sourceCodeTitle="头像-block",e.__styleCode=null,e.__script=`<script setup>\r
import { ref } from 'vue'\r
\r
const imgUrl = ref('http://blog.icestone.work/default.png')\r
\r
<\/script>`,e}const z={class:"ice-column"},b={__name:"avatar.block.preview",setup(e){const a=$("http://blog.icestone.work/default.png");return(f,p)=>{const o=t("iceTag"),s=t("ice-text"),i=t("ice-avatar"),d=t("show");return l(),_(u,null,[c(s,null,{default:r(()=>[n(" 使用 "),c(o,null,{default:r(()=>[n("block")]),_:1}),n(" 控制显示的边框 ")]),_:1}),c(d,null,{default:r(()=>[g("div",z,[c(i,{src:a.value,block:""},null,8,["src"]),c(i,{src:a.value},null,8,["src"])])]),_:1})],64)}}};typeof w=="function"&&w(b);function x(e){return e.__sourceCode=`<show>\r
    <div class="ice-row">\r
      <div v-for="fit in fits" :key="fit" class="ice-column">\r
        <ice-avatar :src="imgUrl" size="120" :fit="fit" block></ice-avatar>\r
        <ice-text>\r
          {{ fit }}\r
        </ice-text>\r
      </div>\r
    </div>\r
  </show>`,e.__sourceCodeTitle="头像-fit",e.__styleCode=null,e.__script=`<script setup>\r
import { reactive } from 'vue'\r
// 你可能会很熟悉,因为图片是我从element plus抄过来的,这个fit属性也是\r
const imgUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\r
const fits = reactive(['fill', 'contain', 'cover', 'none', 'scale-down'])<\/script>`,e}const F={class:"ice-row"},P="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",T={__name:"avatar.fit.preview",setup(e){const a=j(["fill","contain","cover","none","scale-down"]);return(f,p)=>{const o=t("iceTag"),s=t("ice-text"),i=t("ice-avatar"),d=t("show");return l(),_(u,null,[c(s,null,{default:r(()=>[n(" 使用 "),c(o,null,{default:r(()=>[n("fit")]),_:1}),n(" 控制显示的图片 ")]),_:1}),c(d,null,{default:r(()=>[g("div",F,[(l(!0),_(u,null,B(a,m=>(l(),_("div",{key:m,class:"ice-column"},[c(i,{src:P,size:"120",fit:m,block:""},null,8,["fit"]),c(s,null,{default:r(()=>[n(N(m),1)]),_:2},1024)]))),128))])]),_:1})],64)}}};typeof x=="function"&&x(T);const S={__name:"index",setup(e){return(a,f)=>(l(),_(u,null,[c(v,{component:k}),c(v,{component:b}),c(v,{component:T})],64))}};export{S as default};
