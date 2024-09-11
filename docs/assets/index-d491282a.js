import{i as o,r as n,o as m,c as b,b as r,w as t,d as s,u as v,F as d,l as P}from"./index-e27d3de1.js";import{P as h}from"./preview-aa1c0d9e.js";import"https://cdn.skypack.dev/gsap@3.12.0";const R=""+new URL("bac1-5b7ba7b7.png",import.meta.url).href,x=""+new URL("bac2-6f17878a.png",import.meta.url).href,L=""+new URL("bac3-692ee665.png",import.meta.url).href,k=""+new URL("ding-12281ddf.png",import.meta.url).href;function a(e){return e.__sourceCode=`<container>\r
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
<\/script>`,e}const l={__name:"imgPreview.preview",setup(e){let c=o(),i=o([R,x,L,k]);const u=()=>{c.value.show(i.value)};return(U,I)=>{const _=n("ice-text"),p=n("ice-button"),f=n("ice-column"),g=n("iceImgPreview"),w=n("container");return m(),b(d,null,[r(_,null,{default:t(()=>[s("图片预览组件")]),_:1}),r(w,null,{default:t(()=>[r(f,null,{default:t(()=>[r(p,{onClick:u},{default:t(()=>[s("点击查看")]),_:1})]),_:1}),r(g,{ref_key:"imgPreviewRef",ref:c,imgUrls:v(i),closeIconRight:""},null,8,["imgUrls"])]),_:1})],64)}}};typeof a=="function"&&a(l);const F={__name:"index",setup(e){return(c,i)=>(m(),P(h,{component:l}))}};export{F as default};
