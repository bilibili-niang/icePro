import{i,r as n,o as l,c as v,b as r,w as t,d as o,u as P,F as d,l as b}from"./index-9145f539.js";import{P as h}from"./preview-50ceab38.js";import"https://cdn.skypack.dev/gsap@3.12.0";function a(e){return e.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-button @click="showPreview">点击查看</ice-button>\r
    </ice-column>\r
    <iceImgPreview ref="imgPreviewRef" :imgUrls="imgList" closeIconRight />\r
  </container>`,e.__sourceCodeTitle=" iceImgPreview ",e.__styleCode=null,e.__script=`<script setup>\r
import { ref } from 'vue'\r
\r
let imgPreviewRef = ref()\r
let imgList = ref([\r
  '/src/assets/png/bac1.png',\r
  '/src/assets/png/bac2.png',\r
  '/src/assets/png/bac3.png',\r
  '/src/assets/png/ding.png'\r
])\r
const showPreview = () => {\r
  imgPreviewRef.value.show(imgList.value)\r
}\r
<\/script>`,e}const _={__name:"imgPreview.preview",setup(e){let c=i(),s=i(["/src/assets/png/bac1.png","/src/assets/png/bac2.png","/src/assets/png/bac3.png","/src/assets/png/ding.png"]);const g=()=>{c.value.show(s.value)};return(x,k)=>{const u=n("ice-text"),m=n("ice-button"),p=n("ice-column"),f=n("iceImgPreview"),w=n("container");return l(),v(d,null,[r(u,null,{default:t(()=>[o("图片预览组件")]),_:1}),r(w,null,{default:t(()=>[r(p,null,{default:t(()=>[r(m,{onClick:g},{default:t(()=>[o("点击查看")]),_:1})]),_:1}),r(f,{ref_key:"imgPreviewRef",ref:c,imgUrls:P(s),closeIconRight:""},null,8,["imgUrls"])]),_:1})],64)}}};typeof a=="function"&&a(_);const y={__name:"index",setup(e){return(c,s)=>(l(),b(h,{component:_}))}};export{y as default};
