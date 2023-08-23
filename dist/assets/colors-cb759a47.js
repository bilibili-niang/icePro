import{P as h}from"./preview-32692264.js";import{k as C,r as n,o as r,c,a as p,b as t,w as l,d as a,F as m,l as B,m as T,n as b,u as M,q as I,t as d,_ as j,s as N,M as u,v as V}from"./index-f38a0360.js";function y(e){return e.__sourceCode=`<show class="colorBlock ice-row">\r
    <template v-for="(item,index) in allColor" :key="index">\r
      <div class="ice-column colorBlockItem" @click="copy(item.pinyin)">\r
        <div class="item radio-m noselect" :style="{background:findColor(item.pinyin).color}">\r
          {{ item.name }}\r
          {{ item.pinyin }}\r
        </div>\r
      </div>\r
    </template>\r
  </show>`,e.__sourceCodeTitle=" colors ",e.__styleCode=`<style scoped lang="less">\r
.colorBlockItem {\r
  width: 15%;\r
  padding: @p-normal;\r
  margin: @m-small;\r
\r
  .item {\r
    padding: @p-normal;\r
    display: flex;\r
    height: 3rem;\r
    width: 100%;\r
  }\r
}\r
</style>`,e.__script=`<script setup>\r
import colors from "../../../assets/colors/colors.json"\r
import '@/assets/variables.less'\r
import { reactive } from 'vue'\r
import { copyText, findColor } from '../../../hooks/tools.js'\r
import { iceMessage } from '../../../../index.js'\r
\r
const allColor = reactive(colors)\r
const copy = async (str) => {\r
  const res = await copyText(str)\r
  if (res) {\r
    iceMessage({\r
      message: \`复制成功\`,\r
      color: str\r
    })\r
  } else {\r
    iceMessage({\r
      message: \`复制失败\`,\r
      type: 'danger'\r
    })\r
  }\r
}\r
<\/script>`,e}const F={class:"ice-row"},P=["onClick"],f={__name:"allColors.preview",setup(e){const i=C(T),_=async s=>{await N(s)?u({message:"复制成功",color:s}):u({message:"复制失败",type:"danger"})};return(s,v)=>{const g=n("iceTag"),k=n("ice-text"),w=n("show");return r(),c(m,null,[p("div",F,[t(k,null,{default:l(()=>[a(" 使用 "),t(g,null,{default:l(()=>[a("color")]),_:1}),a(" 传参 ")]),_:1})]),t(w,{class:"colorBlock ice-row"},{default:l(()=>[(r(!0),c(m,null,B(i,(o,x)=>(r(),c("div",{key:x,class:"ice-column colorBlockItem",onClick:$=>_(o.pinyin)},[p("div",{class:"item radio-m noselect",style:b({background:M(I)(o.pinyin).color})},d(o.name)+" "+d(o.pinyin),5)],8,P))),128))]),_:1})],64)}}};typeof y=="function"&&y(f);const S=j(f,[["__scopeId","data-v-c3de136e"]]),D={__name:"colors",setup(e){return(i,_)=>(r(),V(h,{component:S}))}};export{D as default};
