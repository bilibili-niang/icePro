import{P as v}from"./preview-98cf666a.js";import{l as x}from"./logo-d4fec688.js";import{a as o,o as u,b as f,f as t,w as c,g as s,d as g,u as k,F as p,r as j,O as B,C,t as N}from"./index-a45b4aa7.js";const b=e=>{e.__sourceCodeTitle="头像",e.__sourceCode=`<div class="ice-column">\r
      <ice-avatar :src="imgUrl"></ice-avatar>\r
      <ice-text>加载出错,使用默认占位符:</ice-text>\r
      <ice-avatar :src="logo"></ice-avatar>\r
    </div>`,e.__script=`import logo from '@/assets/png/logo.png'\r
import imgUrl from '/src/assets/png/logo.png'`},V={class:"ice-column"},U={__name:"avatar.preview",setup(e){return(i,r)=>{const n=o("iceTag"),l=o("ice-text"),a=o("ice-avatar"),_=o("container");return u(),f(p,null,[t(l,null,{default:c(()=>[r[1]||(r[1]=s(" 使用 ")),t(n,null,{default:c(()=>r[0]||(r[0]=[s("src")])),_:1}),r[2]||(r[2]=s(" 传入 "))]),_:1}),t(_,null,{default:c(()=>[g("div",V,[t(a,{src:k(x)},null,8,["src"]),t(l,null,{default:c(()=>r[3]||(r[3]=[s("加载出错,使用默认占位符:")])),_:1}),t(a,{src:k(x)},null,8,["src"])])]),_:1})],64)}}};typeof b=="function"&&b(U);const w=e=>{e.__sourceCodeTitle="头像-block",e.__sourceCode=`<div class="ice-column">\r
      <ice-avatar :src="imgUrl" block></ice-avatar>\r
      <ice-avatar :src="imgUrl"></ice-avatar>\r
    </div>`,e.__script=`import {ref} from "vue"\r
\r
const imgUrl = ref("http://blog.icestone.work/default.png")\r
// const imgUrl = "src/assets/png/default.png"`},z={class:"ice-column"},$={__name:"avatar.block.preview",setup(e){const i=j("http://blog.icestone.work/default.png");return(r,n)=>{const l=o("iceTag"),a=o("ice-text"),_=o("ice-avatar"),m=o("container");return u(),f(p,null,[t(a,null,{default:c(()=>[n[1]||(n[1]=s(" 使用 ")),t(l,null,{default:c(()=>n[0]||(n[0]=[s("block")])),_:1}),n[2]||(n[2]=s(" 控制显示的边框 "))]),_:1}),t(m,null,{default:c(()=>[g("div",z,[t(_,{src:i.value,block:""},null,8,["src"]),t(_,{src:i.value},null,8,["src"])])]),_:1})],64)}}};typeof w=="function"&&w($);const T=e=>{e.__sourceCodeTitle="头像-fit",e.__sourceCode=`<div class="ice-row">\r
      <div v-for="fit in fits" :key="fit" class="ice-column">\r
        <ice-avatar :fit="fit" :src="imgUrl" block size="120"></ice-avatar>\r
        <ice-text>\r
          {{ fit }}\r
        </ice-text>\r
      </div>\r
    </div>`,e.__script=`import { reactive } from 'vue'\r
// 你可能会很熟悉,因为图片是我从element plus抄过来的,这个fit属性也是\r
const imgUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\r
const fits = reactive(['fill', 'contain', 'cover', 'none', 'scale-down'])`},F={class:"ice-row"},P="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",y={__name:"avatar.fit.preview",setup(e){const i=B(["fill","contain","cover","none","scale-down"]);return(r,n)=>{const l=o("iceTag"),a=o("ice-text"),_=o("ice-avatar"),m=o("container");return u(),f(p,null,[t(a,null,{default:c(()=>[n[1]||(n[1]=s(" 使用 ")),t(l,null,{default:c(()=>n[0]||(n[0]=[s("fit")])),_:1}),n[2]||(n[2]=s(" 控制显示的图片 "))]),_:1}),t(m,null,{default:c(()=>[g("div",F,[(u(!0),f(p,null,C(i,d=>(u(),f("div",{key:d,class:"ice-column"},[t(_,{fit:d,src:P,block:"",size:"120"},null,8,["fit"]),t(a,null,{default:c(()=>[s(N(d),1)]),_:2},1024)]))),128))])]),_:1})],64)}}};typeof T=="function"&&T(y);const O={__name:"index",setup(e){return(i,r)=>(u(),f(p,null,[t(v,{component:U}),t(v,{component:$}),t(v,{component:y})],64))}};export{O as default};
