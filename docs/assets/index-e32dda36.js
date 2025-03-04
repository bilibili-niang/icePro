var w=Object.defineProperty;var x=(r,e,t)=>e in r?w(r,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):r[e]=t;var i=(r,e,t)=>(x(r,typeof e!="symbol"?e+"":e,t),t);import{k as y,r as k,a,o as c,b as p,d as S,f as o,w as s,g as m,t as _,F as C,C as B,u as V,P as M,_ as N,j as D}from"./index-a45b4aa7.js";import{P as I}from"./preview-98cf666a.js";class P{constructor(){i(this,"currentTheme","purple")}getCurrentTheme(){return this.currentTheme}setTheme(e){document.documentElement.setAttribute("data-theme",e),this.currentTheme=e,localStorage.setItem("theme",e)}init(){const e=localStorage.getItem("theme");e?this.setTheme(e):this.setTheme("purple")}}const h=new P;typeof window<"u"&&h.init();const E={class:"color-selector-preview"},v=y({__name:"colorSelector.normal.preview",setup(r){const e=k("#D81B60"),t=[{value:"red",label:"红色主题"},{value:"pink",label:"粉色主题"},{value:"purple",label:"紫色主题"},{value:"deep-purple",label:"深紫色主题"},{value:"blue",label:"蓝色主题"},{value:"green",label:"绿色主题"},{value:"orange",label:"橙色主题"},{value:"white",label:"白色主题"}],b=u=>{h.setTheme(u)};return(u,l)=>{const f=a("ice-text"),g=a("ice-button"),T=a("ice-row");return c(),p("div",E,[l[1]||(l[1]=S("h3",null,"默认使用方法",-1)),o(f,null,{default:s(()=>[m(" colorValue: "+_(e.value),1)]),_:1}),o(T,{class:"theme-switch",flexWrap:""},{default:s(()=>[(c(),p(C,null,B(t,n=>o(g,{key:n.value,hover:"",type:"shadow-r-t",onClick:$=>b(n.value)},{default:s(()=>[m(_(n.label),1)]),_:2},1032,["onClick"])),64))]),_:1}),o(V(M),{value:e.value,"onUpdate:value":l[0]||(l[0]=n=>e.value=n)},null,8,["value"])])}}});const d=r=>{r.__sourceCodeTitle=" theme-selector ",r.__sourceCode="",r.__script=`import { ref } from 'vue'\r
import ColorSelector from '@/components/colorSelector'\r
import { themeManager, type ThemeType } from '@/utils/theme'\r
\r
const colorValue = ref('#D81B60')\r
\r
const themes = [\r
  { value: 'red', label: '红色主题' },\r
  { value: 'pink', label: '粉色主题' },\r
  { value: 'purple', label: '紫色主题' },\r
  { value: 'deep-purple', label: '深紫色主题' },\r
  { value: 'blue', label: '蓝色主题' },\r
  { value: 'green', label: '绿色主题' },\r
  { value: 'orange', label: '橙色主题' },\r
  { value: 'white', label: '白色主题' }\r
]\r
\r
const changeTheme = (theme: ThemeType) => {\r
  themeManager.setTheme(theme)\r
}`,r.__styleCode=`.color-selector-preview {\r
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
}`};typeof d=="function"&&d(v);const F=N(v,[["__scopeId","data-v-958c41b6"]]),U={__name:"index",setup(r){return(e,t)=>(c(),D(I,{component:F}))}};export{U as default};
