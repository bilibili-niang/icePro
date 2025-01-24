import{P as v}from"./preview-25ff2814.js";import{l as x}from"./logo-d4fec688.js";import{r,o as _,c as f,b as e,w as o,d as i,a as g,u as k,F as p,y as j,G as B,g as N,t as V}from"./index-c6aa0d5d.js";function b(t){return t.__sourceCode=`<container>\r
    <div class="ice-column">\r
      <ice-avatar :src="imgUrl"></ice-avatar>\r
      <ice-text>加载出错,使用默认占位符:</ice-text>\r
      <ice-avatar :src="logo"></ice-avatar>\r
    </div>\r
  </container>`,t.__sourceCodeTitle="头像",t.__styleCode=null,t.__script=`<script setup>\r
import logo from '@/assets/png/logo.png'\r
import imgUrl from '/src/assets/png/logo.png'\r
<\/script>`,t}const z={class:"ice-column"},T={__name:"avatar.preview",setup(t){return(a,c)=>{const n=r("iceTag"),l=r("ice-text"),s=r("ice-avatar"),u=r("container");return _(),f(p,null,[e(l,null,{default:o(()=>[c[1]||(c[1]=i(" 使用 ")),e(n,null,{default:o(()=>c[0]||(c[0]=[i("src")])),_:1}),c[2]||(c[2]=i(" 传入 "))]),_:1}),e(u,null,{default:o(()=>[g("div",z,[e(s,{src:k(x)},null,8,["src"]),e(l,null,{default:o(()=>c[3]||(c[3]=[i("加载出错,使用默认占位符:")])),_:1}),e(s,{src:k(x)},null,8,["src"])])]),_:1})],64)}}};typeof b=="function"&&b(T);function w(t){return t.__sourceCode=`<container>\r
    <div class="ice-column">\r
      <ice-avatar :src="imgUrl" block></ice-avatar>\r
      <ice-avatar :src="imgUrl"></ice-avatar>\r
    </div>\r
  </container>`,t.__sourceCodeTitle="头像-block",t.__styleCode=null,t.__script=`<script setup>\r
import {ref} from "vue"\r
\r
const imgUrl = ref("http://blog.icestone.work/default.png")\r
// const imgUrl = "src/assets/png/default.png"\r
<\/script>`,t}const F={class:"ice-column"},U={__name:"avatar.block.preview",setup(t){const a=j("http://blog.icestone.work/default.png");return(c,n)=>{const l=r("iceTag"),s=r("ice-text"),u=r("ice-avatar"),d=r("container");return _(),f(p,null,[e(s,null,{default:o(()=>[n[1]||(n[1]=i(" 使用 ")),e(l,null,{default:o(()=>n[0]||(n[0]=[i("block")])),_:1}),n[2]||(n[2]=i(" 控制显示的边框 "))]),_:1}),e(d,null,{default:o(()=>[g("div",F,[e(u,{src:a.value,block:""},null,8,["src"]),e(u,{src:a.value},null,8,["src"])])]),_:1})],64)}}};typeof w=="function"&&w(U);function y(t){return t.__sourceCode=`<container>\r
    <div class="ice-row">\r
      <div v-for="fit in fits" :key="fit" class="ice-column">\r
        <ice-avatar :fit="fit" :src="imgUrl" block size="120"></ice-avatar>\r
        <ice-text>\r
          {{ fit }}\r
        </ice-text>\r
      </div>\r
    </div>\r
  </container>`,t.__sourceCodeTitle="头像-fit",t.__styleCode=null,t.__script=`<script setup>\r
import { reactive } from 'vue'\r
// 你可能会很熟悉,因为图片是我从element plus抄过来的,这个fit属性也是\r
const imgUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'\r
const fits = reactive(['fill', 'contain', 'cover', 'none', 'scale-down'])<\/script>`,t}const P={class:"ice-row"},D="https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg",$={__name:"avatar.fit.preview",setup(t){const a=B(["fill","contain","cover","none","scale-down"]);return(c,n)=>{const l=r("iceTag"),s=r("ice-text"),u=r("ice-avatar"),d=r("container");return _(),f(p,null,[e(s,null,{default:o(()=>[n[1]||(n[1]=i(" 使用 ")),e(l,null,{default:o(()=>n[0]||(n[0]=[i("fit")])),_:1}),n[2]||(n[2]=i(" 控制显示的图片 "))]),_:1}),e(d,null,{default:o(()=>[g("div",P,[(_(!0),f(p,null,N(a,m=>(_(),f("div",{key:m,class:"ice-column"},[e(u,{fit:m,src:D,block:"",size:"120"},null,8,["fit"]),e(s,null,{default:o(()=>[i(V(m),1)]),_:2},1024)]))),128))])]),_:1})],64)}}};typeof y=="function"&&y($);const S={__name:"index",setup(t){return(a,c)=>(_(),f(p,null,[e(v,{component:T}),e(v,{component:U}),e(v,{component:$})],64))}};export{S as default};
