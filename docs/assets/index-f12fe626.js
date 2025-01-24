import{y as s,r as n,o as l,c as v,b as r,w as i,d as a,u as d,F as P,h}from"./index-c6aa0d5d.js";import{P as R}from"./preview-25ff2814.js";const x=""+new URL("bac1-5b7ba7b7.png",import.meta.url).href,L=""+new URL("bac2-6f17878a.png",import.meta.url).href,k=""+new URL("bac3-692ee665.png",import.meta.url).href,U=""+new URL("ding-12281ddf.png",import.meta.url).href;function m(e){return e.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-button @click="showPreview">点击查看</ice-button>\r
    </ice-column>\r
    <iceImgPreview ref="imgPreviewRef" :imgUrls="imgList" closeIconRight />\r
  </container>`,e.__sourceCodeTitle=" iceImgPreview ",e.__styleCode=null,e.__script=`<script setup>\r
import { ref } from 'vue'\r
import bac1 from '@/assets/png/bac1.png'\r
import bac2 from '@/assets/png/bac2.png'\r
import bac3 from '@/assets/png/bac3.png'\r
import ding from '@/assets/png/ding.png'\r
\r
let imgPreviewRef = ref()\r
let imgList = ref([\r
  bac1, bac2, bac3, ding\r
])\r
const showPreview = () => {\r
  imgPreviewRef.value.show(imgList.value)\r
}\r
<\/script>`,e}const u={__name:"imgPreview.preview",setup(e){let c=s(),o=s([x,L,k,U]);const p=()=>{c.value.show(o.value)};return(I,t)=>{const _=n("ice-text"),f=n("ice-button"),g=n("ice-column"),w=n("iceImgPreview"),b=n("container");return l(),v(P,null,[r(_,null,{default:i(()=>t[0]||(t[0]=[a("图片预览组件")])),_:1}),r(b,null,{default:i(()=>[r(g,null,{default:i(()=>[r(f,{onClick:p},{default:i(()=>t[1]||(t[1]=[a("点击查看")])),_:1})]),_:1}),r(w,{ref_key:"imgPreviewRef",ref:c,imgUrls:d(o),closeIconRight:""},null,8,["imgUrls"])]),_:1})],64)}}};typeof m=="function"&&m(u);const C={__name:"index",setup(e){return(c,o)=>(l(),h(R,{component:u}))}};export{C as default};
