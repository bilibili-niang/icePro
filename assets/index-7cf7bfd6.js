import{h as i,r as n,o as l,c as v,b as r,w as c,d as o,u as d,F as P,k as b}from"./index-35bddd09.js";import{P as h}from"./preview-dac8e0c6.js";function a(e){return e.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-button @click="showPreview">点击查看</ice-button>\r
    </ice-column>\r
    <iceImgPreview ref="imgPreviewRef" :imgUrls="imgList" closeIconRight/>\r
  </container>`,e.__sourceCodeTitle=" ice-img-preview ",e.__styleCode=null,e.__script=`<script setup>\r
import {ref} from "vue";\r
\r
let imgPreviewRef = ref();\r
let imgList = ref([\r
  "/src/assets/png/bac1.png",\r
  "/src/assets/png/bac2.png",\r
  "/src/assets/png/bac3.png",\r
  "/src/assets/png/ding.png",\r
]);\r
const showPreview = () => {\r
  imgPreviewRef.value.show(imgList.value);\r
};\r
<\/script>`,e}const _={__name:"imgPreview.preview",setup(e){let t=i(),s=i(["/src/assets/png/bac1.png","/src/assets/png/bac2.png","/src/assets/png/bac3.png","/src/assets/png/ding.png"]);const g=()=>{t.value.show(s.value)};return(k,x)=>{const u=n("ice-text"),p=n("ice-button"),m=n("ice-column"),f=n("iceImgPreview"),w=n("container");return l(),v(P,null,[r(u,null,{default:c(()=>[o("图片预览组件")]),_:1}),r(w,null,{default:c(()=>[r(m,null,{default:c(()=>[r(p,{onClick:g},{default:c(()=>[o("点击查看")]),_:1})]),_:1}),r(f,{ref_key:"imgPreviewRef",ref:t,imgUrls:d(s),closeIconRight:""},null,8,["imgUrls"])]),_:1})],64)}}};typeof a=="function"&&a(_);const L={__name:"index",setup(e){return(t,s)=>(l(),b(h,{component:_}))}};export{L as default};
