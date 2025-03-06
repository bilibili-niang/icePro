import{j as w,r as y,a,o as n,b as i,d as T,f as s,w as c,g as p,t as u,F as b,C as k,u as m,P as C,Q as S,l as h,R as B,_ as V}from"./index-ddefbaea.js";import{P as N}from"./preview-096c3109.js";const D={class:"color-selector-preview"},f=w({__name:"colorSelector.normal.preview",setup(e){const o=y("#D81B60"),l=_=>{B.setTheme(_)};return(_,t)=>{const v=a("ice-text"),x=a("ice-button"),g=a("ice-row");return n(),i("div",D,[t[1]||(t[1]=T("h3",null,"默认使用方法",-1)),s(v,null,{default:c(()=>[p(" colorValue: "+u(o.value),1)]),_:1}),s(g,{class:"theme-switch",flexWrap:""},{default:c(()=>[(n(!0),i(b,null,k(m(C),r=>(n(),h(x,{key:r.value,hover:"",type:"shadow-r-t",onClick:P=>l(r.value)},{default:c(()=>[p(u(r.label),1)]),_:2},1032,["onClick"]))),128))]),_:1}),s(m(S),{value:o.value,"onUpdate:value":t[0]||(t[0]=r=>o.value=r)},null,8,["value"])])}}});const d=e=>{e.__sourceCodeTitle=" theme-selector ",e.__sourceCode="",e.__script=`import { ref } from 'vue'\r
import ColorSelector from '@/components/colorSelector'\r
import { themeManager, type ThemeType, themes } from '@/utils/theme'\r
\r
const colorValue = ref('#D81B60')\r
\r
\r
const changeTheme = (theme: ThemeType) => {\r
  themeManager.setTheme(theme)\r
}`,e.__styleCode=`.color-selector-preview {\r
  padding: 20px;\r
\r
  .theme-switch {\r
    margin: 20px 0;\r
    display: flex;\r
    gap: 10px;\r
\r
    ice-button {\r
      padding: 8px 16px;\r
      border-radius: 4px;\r
      background: transparent;\r
      cursor: pointer;\r
      .theme-transition();\r
\r
      &:hover {\r
        background: var(--primary);\r
        color: white;\r
      }\r
    }\r
  }\r
}`};typeof d=="function"&&d(f);const M=V(f,[["__scopeId","data-v-e67809e9"]]),j={__name:"index",setup(e){return(o,l)=>(n(),h(N,{component:M}))}};export{j as default};
