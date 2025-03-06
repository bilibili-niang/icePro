import{P as p}from"./preview-096c3109.js";import{_ as B,a as r,o as s,b as i,f as o,w as c,g as a,F as _,r as f,d as w}from"./index-ddefbaea.js";const C=e=>{e.__sourceCodeTitle="RandomPixels 随机背景",e.__sourceCode="<RandomPixels />"},x={};function P(e,n){const t=r("ice-text"),d=r("RandomPixels"),l=r("container");return s(),i(_,null,[o(t,null,{default:c(()=>n[0]||(n[0]=[a(" 然而随机性并不强 ")])),_:1}),o(l,null,{default:c(()=>[o(d)]),_:1})],64)}typeof C=="function"&&C(x);const b=B(x,[["render",P]]);const y=e=>{e.__sourceCodeTitle="SimpleBackground 更多样式的背景",e.__sourceCode=`<div class="exampleContainer">\r
      <ice-column>\r
        <SimpleBackground :primaryColor="primaryColor" :secondaryColor="secondaryColor" allowClick />\r
        <ice-text>\r
          或者不允许点击切换颜色\r
        </ice-text>\r
        <SimpleBackground :primaryColor="primaryColor" :secondaryColor="secondaryColor" />\r
      </ice-column>\r
    </div>`,e.__script=`import { ref } from 'vue'\r
\r
const primaryColor = ref('#ffedcb')\r
const secondaryColor = ref('#ffc145')`,e.__styleCode=`.exampleContainer {\r
  display: flex;\r
  height: 500px;\r
  width: 100%;\r
}`},R={class:"exampleContainer"},v={__name:"simpleBackground.preview",setup(e){const n=f("#ffedcb"),t=f("#ffc145");return(d,l)=>{const u=r("ice-text"),m=r("SimpleBackground"),k=r("ice-column"),g=r("container");return s(),i(_,null,[o(u,null,{default:c(()=>l[0]||(l[0]=[a(" 背景挺多 ")])),_:1}),o(g,null,{default:c(()=>[w("div",R,[o(k,null,{default:c(()=>[o(m,{primaryColor:n.value,secondaryColor:t.value,allowClick:""},null,8,["primaryColor","secondaryColor"]),o(u,null,{default:c(()=>l[1]||(l[1]=[a(" 或者不允许点击切换颜色 ")])),_:1}),o(m,{primaryColor:n.value,secondaryColor:t.value},null,8,["primaryColor","secondaryColor"])]),_:1})])]),_:1})],64)}}};typeof y=="function"&&y(v);const T={__name:"index",setup(e){return(n,t)=>(s(),i(_,null,[o(p,{component:b}),o(p,{component:v})],64))}};export{T as default};
