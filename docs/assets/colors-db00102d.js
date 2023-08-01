import{P as C}from"./preview-bd009eef.js";import{j as h,i as r,o as s,c as n,a as p,b as t,w as c,F as m,k as B,d as a,r as T,_ as b,l as M,e as j,m as I,t as d,q as N,M as u,s as V}from"./index-2a43d906.js";function y(e){return e.__sourceCode=`<show class="colorBlock">\r
    <template v-for="(item,index) in allColor" :key="index">\r
      <div class="ice-column colorBlockItem" @click="copy(item.pinyin)">\r
        <div class="item" :style="{background:findColor(item.pinyin).color}">\r
          {{ item.name }}\r
          {{ item.pinyin }}\r
        </div>\r
      </div>\r
    </template>\r
  </show>`,e.__sourceCodeTitle=" 按钮-colors-所有 ",e.__styleCode=`<style scoped lang="less">\r
.colorBlockItem {\r
  .item {\r
    padding: @p-normal;\r
    margin: @m-small;\r
  }\r
}\r
</style>`,e.__script=`<script setup>\r
import colors from "../../../assets/colors/colors.json"\r
import '@/assets/variables.less'\r
import { reactive } from 'vue'\r
import { copyText, findColor } from '@/hooks/tools.js'\r
import { iceMessage } from '../../../../index.js'\r
\r
const allColor = reactive(colors)\r
const copy = async (str) => {\r
  const res = await copyText(str)\r
  if (res) {\r
    iceMessage(\`复制成功\`)\r
  } else {\r
    iceMessage({\r
      message: \`复制失败\`,\r
      type: 'danger'\r
    })\r
  }\r
}\r
<\/script>`,e}const F={class:"ice-row"},P=["onClick"],f={__name:"allColors.preview",setup(e){const l=h(B),i=async _=>{await N(_)?u("复制成功"):u({message:"复制失败",type:"danger"})};return(_,v)=>{const g=r("iceTag"),k=r("ice-text"),x=r("show");return s(),n(m,null,[p("div",F,[t(k,null,{default:c(()=>[a(" 使用 "),t(g,null,{default:c(()=>[a("color")]),_:1}),a(" 传参 ")]),_:1})]),t(x,{class:"colorBlock"},{default:c(()=>[(s(!0),n(m,null,T(l,(o,w)=>(s(),n("div",{key:w,class:"ice-column colorBlockItem",onClick:$=>i(o.pinyin)},[p("div",{class:"item",style:M({background:j(I)(o.pinyin).color})},d(o.name)+" "+d(o.pinyin),5)],8,P))),128))]),_:1})],64)}}};typeof y=="function"&&y(f);const S=b(f,[["__scopeId","data-v-2af4a427"]]),D={__name:"colors",setup(e){return(l,i)=>(s(),V(C,{component:S}))}};export{D as default};
