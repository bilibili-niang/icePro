import{_ as h,r as t,o as _,c as a,a as m,d as r,b as e,w as c,F as u}from"./index-9145f539.js";import{P as f}from"./preview-50ceab38.js";import"https://cdn.skypack.dev/gsap@3.12.0";function p(n){return n.__sourceCode=`<container>\r
    <ice-column>\r
\r
      <ice-header size='s'>\r
        <ice-tag>s</ice-tag>\r
        这里是头部,文章标题\r
      </ice-header>\r
\r
      <ice-header>\r
        <ice-tag>n</ice-tag>\r
        这里是头部,文章标题\r
      </ice-header>\r
\r
      <ice-header size='l'>\r
        <ice-tag>l</ice-tag>\r
        这里是头部,文章标题\r
      </ice-header>\r
    </ice-column>\r
  </container>`,n.__sourceCodeTitle=" header-normal ",n.__styleCode=null,n.__script=null,n}const $={},y={class:"ice-column"};function T(n,s){const o=t("ice-tag"),l=t("ice-header"),i=t("ice-column"),d=t("container");return _(),a(u,null,[m("div",y,[r(" 默认由三种size,任君选择,默认为 "),e(o,null,{default:c(()=>[r("n")]),_:1})]),e(d,null,{default:c(()=>[e(i,null,{default:c(()=>[e(l,{size:"s"},{default:c(()=>[e(o,null,{default:c(()=>[r("s")]),_:1}),r(" 这里是头部,文章标题 ")]),_:1}),e(l,null,{default:c(()=>[e(o,null,{default:c(()=>[r("n")]),_:1}),r(" 这里是头部,文章标题 ")]),_:1}),e(l,{size:"l"},{default:c(()=>[e(o,null,{default:c(()=>[r("l")]),_:1}),r(" 这里是头部,文章标题 ")]),_:1})]),_:1})]),_:1})],64)}typeof p=="function"&&p($);const k=h($,[["render",T]]);function g(n){return n.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-header>\r
        默认主题\r
      </ice-header>\r
      <ice-header color="wanshoujuhuang">\r
        默认主题\r
      </ice-header>\r
      <ice-header color="shihong">\r
        默认主题\r
      </ice-header>\r
    </ice-column>\r
  </container>`,n.__sourceCodeTitle=" header-colors ",n.__styleCode=null,n.__script=`<script setup>\r
<\/script>`,n}const v={},z=m("div",{class:"ice-column"}," 支持color传入 ",-1);function P(n,s){const o=t("ice-header"),l=t("ice-column"),i=t("container");return _(),a(u,null,[z,e(i,null,{default:c(()=>[e(l,null,{default:c(()=>[e(o,null,{default:c(()=>[r(" 默认主题 ")]),_:1}),e(o,{color:"wanshoujuhuang"},{default:c(()=>[r(" 默认主题 ")]),_:1}),e(o,{color:"shihong"},{default:c(()=>[r(" 默认主题 ")]),_:1})]),_:1})]),_:1})],64)}typeof g=="function"&&g(v);const b=h(v,[["render",P]]);function x(n){return n.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-header>这句话可以被选中</ice-header>\r
      <ice-header noselect>这句话可以不被选中</ice-header>\r
    </ice-column>\r
  </container>`,n.__sourceCodeTitle=" header-noselect ",n.__styleCode=null,n.__script=null,n}const w={},B={class:"ice-column"};function H(n,s){const o=t("iceTag"),l=t("ice-header"),i=t("ice-column"),d=t("container");return _(),a(u,null,[m("div",B,[r(" 使用 "),e(o,null,{default:c(()=>[r("noselect")]),_:1}),r(" 来控制是否可以选中 ")]),e(d,null,{default:c(()=>[e(i,null,{default:c(()=>[e(l,null,{default:c(()=>[r("这句话可以被选中")]),_:1}),e(l,{noselect:""},{default:c(()=>[r("这句话可以不被选中")]),_:1})]),_:1})]),_:1})],64)}typeof x=="function"&&x(w);const N=h(w,[["render",H]]),E={__name:"index",setup(n){return(s,o)=>(_(),a(u,null,[e(f,{component:k}),e(f,{component:b}),e(f,{component:N})],64))}};export{E as default};
