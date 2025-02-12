import{P as d}from"./preview-6e362995.js";import{_ as g,a as n,o as a,b as s,f as o,w as l,g as f,F as _,r as p,d as w}from"./index-d051d01d.js";const m=e=>{e.__sourceCodeTitle="RandomPixels 随机背景",e.__sourceCode="<RandomPixels />"},x={};function B(e,r){const t=n("ice-text"),i=n("RandomPixels"),c=n("container");return a(),s(_,null,[o(t,null,{default:l(()=>r[0]||(r[0]=[f(" 然而随机性并不强 ")])),_:1}),o(c,null,{default:l(()=>[o(i)]),_:1})],64)}typeof m=="function"&&m(x);const P=g(x,[["render",B]]);const u=e=>{e.__sourceCodeTitle="SimpleBackground 更多样式的背景",e.__sourceCode=`<div class="exampleContainer">\r
      <SimpleBackground :primaryColor="primaryColor" :secondaryColor="secondaryColor" allowClick />\r
    </div>`,e.__script=`import { ref } from 'vue'\r
\r
const primaryColor = ref('#ffedcb')\r
const secondaryColor = ref('#ffc145')`,e.__styleCode=`.exampleContainer {\r
  display: flex;\r
  height: 500px;\r
  width: 100%;\r
}`},b={class:"exampleContainer"},C={__name:"simpleBackground.preview",setup(e){const r=p("#ffedcb"),t=p("#ffc145");return(i,c)=>{const y=n("ice-text"),v=n("SimpleBackground"),k=n("container");return a(),s(_,null,[o(y,null,{default:l(()=>c[0]||(c[0]=[f(" 背景挺多 ")])),_:1}),o(k,null,{default:l(()=>[w("div",b,[o(v,{primaryColor:r.value,secondaryColor:t.value,allowClick:""},null,8,["primaryColor","secondaryColor"])])]),_:1})],64)}}};typeof u=="function"&&u(C);const S={__name:"index",setup(e){return(r,t)=>(a(),s(_,null,[o(d,{component:P}),o(d,{component:C})],64))}};export{S as default};
