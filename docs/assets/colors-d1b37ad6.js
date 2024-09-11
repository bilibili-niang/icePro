import{P as B}from"./preview-50ceab38.js";import{p as T,r,o as t,c as l,a as i,b as n,w as s,d as a,F as d,k as M,q as I,s as m,u,v as y,t as j,_ as N,x as V,M as f,l as F}from"./index-9145f539.js";import"https://cdn.skypack.dev/gsap@3.12.0";function v(e){return e.__sourceCode=`<container class="colorBlock ice-row">\r
    <template v-for="(item,index) in allColor" :key="index">\r
      <div class="ice-column colorBlockItem" @click="copy(item.pinyin)">\r
        <div :style="{background:findColor(item.pinyin).color}" class="item radio-m noselect">\r
        </div>\r
        <ice-button type="shadow-lt-rb" :color="item.pinyin">\r
          <div :style="{'color':findColor(item.pinyin).color}">\r
            {{ item.pinyin }}\r
          </div>\r
        </ice-button>\r
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
import {reactive} from 'vue'\r
import {copyText, findColor} from '../../../utils/tools.js'\r
import {iceMessage} from '../../../../index.js'\r
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
<\/script>`,e}const P={class:"ice-row"},S=["onClick"],g={__name:"allColors.preview",setup(e){const p=T(I),_=async c=>{await V(c)?f({message:"复制成功",color:c}):f({message:"复制失败",type:"danger"})};return(c,k)=>{const x=r("iceTag"),w=r("ice-text"),b=r("ice-button"),C=r("container");return t(),l(d,null,[i("div",P,[n(w,null,{default:s(()=>[a(" 使用 "),n(x,null,{default:s(()=>[a("color")]),_:1}),a(" 传参,传入的应是下面的拼音,点击复制 ")]),_:1})]),n(C,{class:"colorBlock ice-row"},{default:s(()=>[(t(!0),l(d,null,M(p,(o,h)=>(t(),l("div",{key:h,class:"ice-column colorBlockItem",onClick:q=>_(o.pinyin)},[i("div",{style:m({background:u(y)(o.pinyin).color}),class:"item radio-m noselect"},null,4),n(b,{type:"shadow-lt-rb",color:o.pinyin},{default:s(()=>[i("div",{style:m({color:u(y)(o.pinyin).color})},j(o.pinyin),5)]),_:2},1032,["color"])],8,S))),128))]),_:1})],64)}}};typeof v=="function"&&v(g);const $=N(g,[["__scopeId","data-v-223db051"]]),L={__name:"colors",setup(e){return(p,_)=>(t(),F(B,{component:$}))}};export{L as default};
