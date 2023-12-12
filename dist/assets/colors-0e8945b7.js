import{P as b}from"./preview-dac8e0c6.js";import{p as B,r as s,o as r,c,a as t,b as l,w as i,d as a,F as d,j as T,q as M,s as m,u as y,v as u,t as j,_ as I,x as N,M as f,k as V}from"./index-35bddd09.js";function v(e){return e.__sourceCode=`<container class="colorBlock ice-row">\r
    <template v-for="(item,index) in allColor" :key="index">\r
      <div class="ice-column colorBlockItem" @click="copy(item.pinyin)">\r
        <div :style="{background:findColor(item.pinyin).color}" class="item radio-m noselect">\r
        </div>\r
        <div :style="{\r
          'color':findColor(item.pinyin).color\r
        }">\r
          {{ item.pinyin }}\r
        </div>\r
      </div>\r
    </template>\r
  </container>`,e.__sourceCodeTitle=" colors ",e.__styleCode=`<style lang="less" scoped>\r
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
<\/script>`,e}const F={class:"ice-row"},P=["onClick"],g={__name:"allColors.preview",setup(e){const p=B(M),_=async n=>{await N(n)?f({message:"复制成功",color:n}):f({message:"复制失败",type:"danger"})};return(n,k)=>{const x=s("iceTag"),C=s("ice-text"),w=s("container");return r(),c(d,null,[t("div",F,[l(C,null,{default:i(()=>[a(" 使用 "),l(x,null,{default:i(()=>[a("color")]),_:1}),a(" 传参,传入的应是下面的拼音 ")]),_:1})]),l(w,{class:"colorBlock ice-row"},{default:i(()=>[(r(!0),c(d,null,T(p,(o,h)=>(r(),c("div",{key:h,class:"ice-column colorBlockItem",onClick:$=>_(o.pinyin)},[t("div",{style:m({background:y(u)(o.pinyin).color}),class:"item radio-m noselect"},null,4),t("div",{style:m({color:y(u)(o.pinyin).color})},j(o.pinyin),5)],8,P))),128))]),_:1})],64)}}};typeof v=="function"&&v(g);const S=I(g,[["__scopeId","data-v-1b86c4b0"]]),D={__name:"colors",setup(e){return(p,_)=>(r(),V(b,{component:S}))}};export{D as default};
