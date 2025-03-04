import{P as C}from"./preview-98cf666a.js";import{a as f,o as n,b as s,d as o,f as p,w as d,g as h,F as x,C as g,u as B,D as $,t as c,e as a,_ as M,E as T,M as m,j as z}from"./index-a45b4aa7.js";const y=e=>{e.__sourceCodeTitle=" colors ",e.__sourceCode=`<container class="colorBlock ice-row">\r
    <div v-for="(colorGroup, index) in colors" :key="index" class="color-group">\r
      <ice-text class="color-title">{{ colorGroup.color }}</ice-text>\r
      <div class="color-variations">\r
        <div v-for="variation in colorGroup.variations" :key="variation.weight" class="color-item"\r
             @click="handleCopy(variation)">\r
          <div class="color-preview" :style="{ backgroundColor: variation.hex }"></div>\r
          <div class="color-info">\r
            <div class="weight" :style="{ color: variation.hex }">{{ variation.weight }}</div>\r
            <div class="hex" :style="{ color: variation.hex }">{{ variation.hex }}</div>\r
            <div class="rgba" :style="{ color: variation.hex }">{{ variation.rgba }}</div>\r
          </div>\r
        </div>\r
      </div>\r
    </div>`,e.__script=`import themeColors from '../../../assets/colors/theme-purple.json'\r
import { copyText } from '../../../utils/tools'\r
import iceMessage from '../../../components/message'\r
\r
const colors = themeColors\r
\r
const handleCopy = async (variation) => {\r
  const text = \`HEX: \${variation.hex}\\nRGBA: \${variation.rgba}\`\r
  const success = await copyText(text)\r
  if (success) {\r
    iceMessage('颜色值已复制到剪贴板')\r
  } else {\r
    iceMessage('复制失败，请重试')\r
  }\r
}`,e.__styleCode=`.colorBlock {\r
  display: flex;\r
  flex-wrap: wrap;\r
  gap: 32px;\r
  padding: 24px;\r
}\r
\r
.color-group {\r
  flex: 1;\r
  min-width: 280px;\r
  max-width: 320px;\r
\r
  .color-title {\r
    font-size: 18px;\r
    font-weight: 500;\r
    margin-bottom: 16px;\r
  }\r
\r
  .color-variations {\r
    display: flex;\r
    flex-direction: column;\r
    gap: 12px;\r
  }\r
\r
  .color-item {\r
    display: flex;\r
    align-items: center;\r
    gap: 16px;\r
    padding: 8px;\r
    border-radius: 8px;\r
    transition: all 0.2s ease-out;\r
    cursor: pointer;\r
\r
    &:hover {\r
      background-color: var(--bac-bleak);\r
      transform: translateX(4px);\r
    }\r
\r
    .color-preview {\r
      width: 48px;\r
      height: 48px;\r
      border-radius: 8px;\r
      box-shadow: 0 2px 8px var(--bac-inversion);\r
    }\r
\r
    .color-info {\r
      flex: 1;\r
\r
      .weight {\r
        font-size: 16px;\r
        font-weight: 500;\r
        margin-bottom: 4px;\r
      }\r
\r
      .hex {\r
        font-family: monospace;\r
      }\r
\r
      .rgba {\r
        font-family: monospace;\r
        font-size: 12px;\r
      }\r
    }\r
  }\r
}`},E={class:"ice-row"},G={class:"color-variations"},N=["onClick"],V={class:"color-info"},w={__name:"allColors.preview",setup(e){const _=$,v=async l=>{const t=`HEX: ${l.hex}
RGBA: ${l.rgba}`;await T(t)?m("颜色值已复制到剪贴板"):m("复制失败，请重试")};return(l,t)=>{const i=f("ice-text"),b=f("container");return n(),s(x,null,[o("div",E,[p(i,null,{default:d(()=>t[0]||(t[0]=[h("目前主题有以下颜色")])),_:1})]),p(b,{class:"colorBlock ice-row"},{default:d(()=>[(n(!0),s(x,null,g(B(_),(u,k)=>(n(),s("div",{key:k,class:"color-group"},[p(i,{class:"color-title"},{default:d(()=>[h(c(u.color),1)]),_:2},1024),o("div",G,[(n(!0),s(x,null,g(u.variations,r=>(n(),s("div",{key:r.weight,class:"color-item",onClick:j=>v(r)},[o("div",{class:"color-preview",style:a({backgroundColor:r.hex})},null,4),o("div",V,[o("div",{class:"weight",style:a({color:r.hex})},c(r.weight),5),o("div",{class:"hex",style:a({color:r.hex})},c(r.hex),5),o("div",{class:"rgba",style:a({color:r.hex})},c(r.rgba),5)])],8,N))),128))])]))),128))]),_:1})],64)}}};typeof y=="function"&&y(w);const X=M(w,[["__scopeId","data-v-cc4baf0e"]]),F={__name:"colors",setup(e){return(_,v)=>(n(),z(C,{component:X}))}};export{F as default};
