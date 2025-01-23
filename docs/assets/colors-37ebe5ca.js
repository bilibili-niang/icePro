import{P as T}from"./preview-364e80fc.js";import{p as h,r as n,o as l,c as i,a,b as s,w as t,d as p,F as m,g as I,q as M,s as u,u as y,v as f,t as j,_ as N,x as V,y as v,h as F}from"./index-47a89f4e.js";import"https://cdn.skypack.dev/gsap@3.12.0";function g(o){return o.__sourceCode=`<container class="colorBlock ice-row">\r
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
  </container>`,o.__sourceCodeTitle=" colors ",o.__styleCode=`<style lang="less" scoped>\r
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
</style>`,o.__script=`<script setup>\r
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
<\/script>`,o}const P={class:"ice-row"},S=["onClick"],x={__name:"allColors.preview",setup(o){const d=h(M),_=async c=>{await V(c)?v({message:"复制成功",color:c}):v({message:"复制失败",type:"danger"})};return(c,e)=>{const k=n("iceTag"),w=n("ice-text"),b=n("ice-button"),C=n("container");return l(),i(m,null,[a("div",P,[s(w,null,{default:t(()=>[e[1]||(e[1]=p(" 使用 ")),s(k,null,{default:t(()=>e[0]||(e[0]=[p("color")])),_:1}),e[2]||(e[2]=p(" 传参,传入的应是下面的拼音,点击复制 "))]),_:1})]),s(C,{class:"colorBlock ice-row"},{default:t(()=>[(l(!0),i(m,null,I(d,(r,B)=>(l(),i("div",{key:B,class:"ice-column colorBlockItem",onClick:q=>_(r.pinyin)},[a("div",{style:u({background:y(f)(r.pinyin).color}),class:"item radio-m noselect"},null,4),s(b,{type:"shadow-lt-rb",color:r.pinyin},{default:t(()=>[a("div",{style:u({color:y(f)(r.pinyin).color})},j(r.pinyin),5)]),_:2},1032,["color"])],8,S))),128))]),_:1})],64)}}};typeof g=="function"&&g(x);const $=N(x,[["__scopeId","data-v-223db051"]]),L={__name:"colors",setup(o){return(d,_)=>(l(),F(T,{component:$}))}};export{L as default};
