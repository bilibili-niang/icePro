import{_ as m,r as c,o as s,c as d,a as p,d as t,b as n,w as o,F as a}from"./index-c6aa0d5d.js";import{P as f}from"./preview-25ff2814.js";function g(r){return r.__sourceCode=`<container>\r
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
  </container>`,r.__sourceCodeTitle=" header-normal ",r.__styleCode=null,r.__script=null,r}const w={},y={class:"ice-column"};function T(r,e){const l=c("ice-tag"),i=c("ice-header"),u=c("ice-column"),_=c("container");return s(),d(a,null,[p("div",y,[e[1]||(e[1]=t(" 默认由三种size,任君选择,默认为 ")),n(l,null,{default:o(()=>e[0]||(e[0]=[t("n")])),_:1})]),n(_,null,{default:o(()=>[n(u,null,{default:o(()=>[n(i,{size:"s"},{default:o(()=>[n(l,null,{default:o(()=>e[2]||(e[2]=[t("s")])),_:1}),e[3]||(e[3]=t(" 这里是头部,文章标题 "))]),_:1}),n(i,null,{default:o(()=>[n(l,null,{default:o(()=>e[4]||(e[4]=[t("n")])),_:1}),e[5]||(e[5]=t(" 这里是头部,文章标题 "))]),_:1}),n(i,{size:"l"},{default:o(()=>[n(l,null,{default:o(()=>e[6]||(e[6]=[t("l")])),_:1}),e[7]||(e[7]=t(" 这里是头部,文章标题 "))]),_:1})]),_:1})]),_:1})],64)}typeof g=="function"&&g(w);const k=m(w,[["render",T]]);function x(r){return r.__sourceCode=`<container>\r
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
  </container>`,r.__sourceCodeTitle=" header-colors ",r.__styleCode=null,r.__script=`<script setup>\r
<\/script>`,r}const $={};function z(r,e){const l=c("ice-header"),i=c("ice-column"),u=c("container");return s(),d(a,null,[e[3]||(e[3]=p("div",{class:"ice-column"}," 支持color传入 ",-1)),n(u,null,{default:o(()=>[n(i,null,{default:o(()=>[n(l,null,{default:o(()=>e[0]||(e[0]=[t(" 默认主题 ")])),_:1}),n(l,{color:"wanshoujuhuang"},{default:o(()=>e[1]||(e[1]=[t(" 默认主题 ")])),_:1}),n(l,{color:"shihong"},{default:o(()=>e[2]||(e[2]=[t(" 默认主题 ")])),_:1})]),_:1})]),_:1})],64)}typeof x=="function"&&x($);const P=m($,[["render",z]]);function v(r){return r.__sourceCode=`<container>\r
    <ice-column>\r
      <ice-header>这句话可以被选中</ice-header>\r
      <ice-header noselect>这句话可以不被选中</ice-header>\r
    </ice-column>\r
  </container>`,r.__sourceCodeTitle=" header-noselect ",r.__styleCode=null,r.__script=null,r}const h={},b={class:"ice-column"};function B(r,e){const l=c("iceTag"),i=c("ice-header"),u=c("ice-column"),_=c("container");return s(),d(a,null,[p("div",b,[e[1]||(e[1]=t(" 使用 ")),n(l,null,{default:o(()=>e[0]||(e[0]=[t("noselect")])),_:1}),e[2]||(e[2]=t(" 来控制是否可以选中 "))]),n(_,null,{default:o(()=>[n(u,null,{default:o(()=>[n(i,null,{default:o(()=>e[3]||(e[3]=[t("这句话可以被选中")])),_:1}),n(i,{noselect:""},{default:o(()=>e[4]||(e[4]=[t("这句话可以不被选中")])),_:1})]),_:1})]),_:1})],64)}typeof v=="function"&&v(h);const H=m(h,[["render",B]]),j={__name:"index",setup(r){return(e,l)=>(s(),d(a,null,[n(f,{component:k}),n(f,{component:P}),n(f,{component:H})],64))}};export{j as default};
