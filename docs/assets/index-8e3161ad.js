import{r as s,a as n,o as l,b as v,f as r,w as o,g as a,u as d,F as P,j as R}from"./index-c04fac71.js";import{P as h}from"./preview-e981285a.js";const x=""+new URL("bac1-5b7ba7b7.png",import.meta.url).href,L=""+new URL("bac2-6f17878a.png",import.meta.url).href,k=""+new URL("bac3-692ee665.png",import.meta.url).href,U=""+new URL("ding-12281ddf.png",import.meta.url).href,m=e=>{e.__sourceCodeTitle=" iceImgPreview ",e.__sourceCode=`<ice-column>\r
      <ice-button @click="showPreview">点击查看</ice-button>\r
    </ice-column>\r
    <iceImgPreview ref="imgPreviewRef" :imgUrls="imgList" closeIconRight />`,e.__script=`import { ref } from 'vue'\r
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
}`},p={__name:"imgPreview.preview",setup(e){let i=s(),c=s([x,L,k,U]);const g=()=>{i.value.show(c.value)};return(I,t)=>{const u=n("ice-text"),f=n("ice-button"),_=n("ice-column"),w=n("iceImgPreview"),b=n("container");return l(),v(P,null,[r(u,null,{default:o(()=>t[0]||(t[0]=[a("图片预览组件")])),_:1}),r(b,null,{default:o(()=>[r(_,null,{default:o(()=>[r(f,{onClick:g},{default:o(()=>t[1]||(t[1]=[a("点击查看")])),_:1})]),_:1}),r(w,{ref_key:"imgPreviewRef",ref:i,imgUrls:d(c),closeIconRight:""},null,8,["imgUrls"])]),_:1})],64)}}};typeof m=="function"&&m(p);const y={__name:"index",setup(e){return(i,c)=>(l(),R(h,{component:p}))}};export{y as default};
