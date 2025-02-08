import{_ as m,a as c,o as u,b as d,d as p,g as r,f as n,w as o,F as a}from"./index-c04fac71.js";import{P as f}from"./preview-e981285a.js";const g=t=>{t.__sourceCodeTitle=" header-normal ",t.__sourceCode=`<ice-column>\r
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
    </ice-column>`},w={},C={class:"ice-column"};function T(t,e){const l=c("ice-tag"),i=c("ice-header"),s=c("ice-column"),_=c("container");return u(),d(a,null,[p("div",C,[e[1]||(e[1]=r(" 默认由三种size,任君选择,默认为 ")),n(l,null,{default:o(()=>e[0]||(e[0]=[r("n")])),_:1})]),n(_,null,{default:o(()=>[n(s,null,{default:o(()=>[n(i,{size:"s"},{default:o(()=>[n(l,null,{default:o(()=>e[2]||(e[2]=[r("s")])),_:1}),e[3]||(e[3]=r(" 这里是头部,文章标题 "))]),_:1}),n(i,null,{default:o(()=>[n(l,null,{default:o(()=>e[4]||(e[4]=[r("n")])),_:1}),e[5]||(e[5]=r(" 这里是头部,文章标题 "))]),_:1}),n(i,{size:"l"},{default:o(()=>[n(l,null,{default:o(()=>e[6]||(e[6]=[r("l")])),_:1}),e[7]||(e[7]=r(" 这里是头部,文章标题 "))]),_:1})]),_:1})]),_:1})],64)}typeof g=="function"&&g(w);const k=m(w,[["render",T]]),x=t=>{t.__sourceCodeTitle=" header-colors ",t.__sourceCode=`<ice-column>\r
      <ice-header>\r
        默认主题\r
      </ice-header>\r
      <ice-header color="wanshoujuhuang">\r
        默认主题\r
      </ice-header>\r
      <ice-header color="shihong">\r
        默认主题\r
      </ice-header>\r
    </ice-column>`},$={};function z(t,e){const l=c("ice-header"),i=c("ice-column"),s=c("container");return u(),d(a,null,[e[3]||(e[3]=p("div",{class:"ice-column"}," 支持color传入 ",-1)),n(s,null,{default:o(()=>[n(i,null,{default:o(()=>[n(l,null,{default:o(()=>e[0]||(e[0]=[r(" 默认主题 ")])),_:1}),n(l,{color:"wanshoujuhuang"},{default:o(()=>e[1]||(e[1]=[r(" 默认主题 ")])),_:1}),n(l,{color:"shihong"},{default:o(()=>e[2]||(e[2]=[r(" 默认主题 ")])),_:1})]),_:1})]),_:1})],64)}typeof x=="function"&&x($);const P=m($,[["render",z]]),v=t=>{t.__sourceCodeTitle=" header-noselect ",t.__sourceCode=`<ice-column>\r
      <ice-header>这句话可以被选中</ice-header>\r
      <ice-header noselect>这句话可以不被选中</ice-header>\r
    </ice-column>`},h={},b={class:"ice-column"};function y(t,e){const l=c("iceTag"),i=c("ice-header"),s=c("ice-column"),_=c("container");return u(),d(a,null,[p("div",b,[e[1]||(e[1]=r(" 使用 ")),n(l,null,{default:o(()=>e[0]||(e[0]=[r("noselect")])),_:1}),e[2]||(e[2]=r(" 来控制是否可以选中 "))]),n(_,null,{default:o(()=>[n(s,null,{default:o(()=>[n(i,null,{default:o(()=>e[3]||(e[3]=[r("这句话可以被选中")])),_:1}),n(i,{noselect:""},{default:o(()=>e[4]||(e[4]=[r("这句话可以不被选中")])),_:1})]),_:1})]),_:1})],64)}typeof v=="function"&&v(h);const B=m(h,[["render",y]]),V={__name:"index",setup(t){return(e,l)=>(u(),d(a,null,[n(f,{component:k}),n(f,{component:P}),n(f,{component:B})],64))}};export{V as default};
