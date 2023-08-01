import{P as h}from"./preview-bd009eef.js";import{_ as p,i as c,o as s,c as a,b as e,w as o,d as t,F as d,a as b,I as y}from"./index-2a43d906.js";function v(n){return n.__sourceCode=`<show>\r
    <ice-button>primary</ice-button>\r
    <ice-button type="danger">danger</ice-button>\r
    <ice-button type="info">info</ice-button>\r
    <ice-button type="success">success</ice-button>\r
    <ice-button type="simple">simple</ice-button>\r
    <iceButton type="ready">ready</iceButton>\r
  </show>`,n.__sourceCodeTitle="按钮-基础",n.__styleCode="<style lang='less' scoped></style>",n.__script=`<script setup>\r
\r
<\/script>`,n}const T={};function N(n,f){const i=c("iceTag"),l=c("ice-text"),r=c("ice-button"),u=c("iceButton"),_=c("show");return s(),a(d,null,[e(l,null,{default:o(()=>[t(" 使用 "),e(i,null,{default:o(()=>[t("type")]),_:1}),t(" 来控制基础样式,下面是几个主要的语义化按钮 ")]),_:1}),e(_,null,{default:o(()=>[e(r,null,{default:o(()=>[t("primary")]),_:1}),e(r,{type:"danger"},{default:o(()=>[t("danger")]),_:1}),e(r,{type:"info"},{default:o(()=>[t("info")]),_:1}),e(r,{type:"success"},{default:o(()=>[t("success")]),_:1}),e(r,{type:"simple"},{default:o(()=>[t("simple")]),_:1}),e(u,{type:"ready"},{default:o(()=>[t("ready")]),_:1})]),_:1})],64)}typeof v=="function"&&v(T);const I=p(T,[["render",N]]);function m(n){return n.__sourceCode=`<show>\r
    <ice-button hover>primary</ice-button>\r
    <ice-button hover type="shadow-r-b">hover</ice-button>\r
    <ice-button hover type="shadow-r-t">hover</ice-button>\r
    <ice-button hover type="shadow-inner">hover</ice-button>\r
    <ice-button hover type="shadow-lt-rb">hover</ice-button>\r
    <ice-button hover type="shadow-inner-lt-rb">hover</ice-button>\r
  </show>`,n.__sourceCodeTitle=" 按钮-hover-朴素 ",n.__styleCode=null,n.__script=`<script setup>\r
\r
<\/script>`,n}const $={},V={class:"ice-column"};function j(n,f){const i=c("iceTag"),l=c("ice-text"),r=c("ice-button"),u=c("show");return s(),a(d,null,[b("div",V,[e(l,null,{default:o(()=>[t(" 使用 "),e(i,null,{default:o(()=>[t("hover")]),_:1}),t(" 控制为hover类型,传入type使用不同样式 ")]),_:1})]),e(u,null,{default:o(()=>[e(r,{hover:""},{default:o(()=>[t("primary")]),_:1}),e(r,{hover:"",type:"shadow-r-b"},{default:o(()=>[t("hover")]),_:1}),e(r,{hover:"",type:"shadow-r-t"},{default:o(()=>[t("hover")]),_:1}),e(r,{hover:"",type:"shadow-inner"},{default:o(()=>[t("hover")]),_:1}),e(r,{hover:"",type:"shadow-lt-rb"},{default:o(()=>[t("hover")]),_:1}),e(r,{hover:"",type:"shadow-inner-lt-rb"},{default:o(()=>[t("hover")]),_:1})]),_:1})],64)}typeof m=="function"&&m($);const q=p($,[["render",j]]);function w(n){return n.__sourceCode=`<show>\r
    <ice-button hover fill="fill">primary</ice-button>\r
    <ice-button hover fill="fill-l">fill to left</ice-button>\r
  </show>`,n.__sourceCodeTitle=" 按钮-hover-fill ",n.__styleCode=null,n.__script=`<script setup>\r
\r
<\/script>`,n}const k={},F={class:"ice-row"};function H(n,f){const i=c("iceTag"),l=c("ice-text"),r=c("ice-button"),u=c("show");return s(),a(d,null,[b("div",F,[e(l,null,{default:o(()=>[t(" 使用 "),e(i,null,{default:o(()=>[t("fill")]),_:1}),t(" 控制为fill类型 ")]),_:1})]),e(u,null,{default:o(()=>[e(r,{hover:"",fill:"fill"},{default:o(()=>[t("primary")]),_:1}),e(r,{hover:"",fill:"fill-l"},{default:o(()=>[t("fill to left")]),_:1})]),_:1})],64)}typeof w=="function"&&w(k);const L=p(k,[["render",H]]);function g(n){return n.__sourceCode=`<show>\r
    <ice-button hover type="ready shadow-lt-rb">ready</ice-button>\r
    <ice-button hover type="simple shadow-inner">simple</ice-button>\r
  </show>`,n.__sourceCodeTitle=" 按钮-混合 ",n.__styleCode=null,n.__script=null,n}const z={},E={class:"ice-column"};function M(n,f){const i=c("iceTag"),l=c("ice-text"),r=c("ice-button"),u=c("show");return s(),a(d,null,[b("div",E,[e(l,null,{default:o(()=>[t(" 使用 "),e(i,null,{default:o(()=>[t("hover")]),_:1}),t(" 传入多个可选值(有点麻烦) ")]),_:1})]),e(u,null,{default:o(()=>[e(r,{hover:"",type:"ready shadow-lt-rb"},{default:o(()=>[t("ready")]),_:1}),e(r,{hover:"",type:"simple shadow-inner"},{default:o(()=>[t("simple")]),_:1})]),_:1})],64)}typeof g=="function"&&g(z);const A=p(z,[["render",M]]);function x(n){return n.__sourceCode=`<show>\r
    <ice-button color="xiancaizi">苋菜紫</ice-button>\r
    <ice-button color="lizong">栗棕</ice-button>\r
    <ice-button color="qinglian">青莲</ice-button>\r
    <ice-button color="wumeizi">乌梅紫</ice-button>\r
    <ice-button color="yejuzi">野菊紫</ice-button>\r
    <ice-button color="honglan">虹蓝</ice-button>\r
  </show>`,n.__sourceCodeTitle=" 按钮-hover-colors ",n.__styleCode=null,n.__script=`<script setup>\r
import IceLink from '@/components/text/ice-link.vue'\r
<\/script>`,n}const D={class:"ice-column"},B={__name:"button-hover-colors.preview",setup(n){return(f,i)=>{const l=c("iceTag"),r=c("ice-text"),u=c("ice-tag"),_=c("ice-button"),P=c("show");return s(),a(d,null,[b("div",D,[e(r,null,{default:o(()=>[t(" 使用 "),e(l,null,{default:o(()=>[t("color")]),_:1}),t(" 控制字体颜色和hover的颜色, "),e(y,{href:"/doc/button/colors"},{default:o(()=>[t("所有颜色")]),_:1})]),_:1}),e(r,null,{default:o(()=>[t(" 或者查看所有 "),e(u,null,{default:o(()=>[t("color")]),_:1}),t(" 的支持 "),e(y,{href:"/doc/button/colors"},{default:o(()=>[t("colors")]),_:1})]),_:1})]),e(P,null,{default:o(()=>[e(_,{color:"xiancaizi"},{default:o(()=>[t("苋菜紫")]),_:1}),e(_,{color:"lizong"},{default:o(()=>[t("栗棕")]),_:1}),e(_,{color:"qinglian"},{default:o(()=>[t("青莲")]),_:1}),e(_,{color:"wumeizi"},{default:o(()=>[t("乌梅紫")]),_:1}),e(_,{color:"yejuzi"},{default:o(()=>[t("野菊紫")]),_:1}),e(_,{color:"honglan"},{default:o(()=>[t("虹蓝")]),_:1})]),_:1})],64)}}};typeof x=="function"&&x(B);const K={__name:"index",setup(n){return(f,i)=>(s(),a(d,null,[e(h,{component:I}),e(h,{component:B}),e(h,{component:q}),e(h,{component:L}),e(h,{component:A})],64))}};export{K as default};
