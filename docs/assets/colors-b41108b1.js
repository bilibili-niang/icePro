import{P as T}from"./preview-e981285a.js";import{C as h,a as n,o as l,b as i,d as a,f as s,w as t,g as p,F as m,D as M,E as j,e as u,u as y,G as f,t as I,_ as N,H as V,M as v,j as D}from"./index-c04fac71.js";const g=e=>{e.__sourceCodeTitle=" colors ",e.__sourceCode=`<container class="colorBlock ice-row">\r
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
    </template>`,e.__script=`import colors from "../../../assets/colors/colors.json"\r
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
}`,e.__styleCode=`.colorBlockItem {\r
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
}`},E={class:"ice-row"},F=["onClick"],k={__name:"allColors.preview",setup(e){const d=h(j),_=async c=>{await V(c)?v({message:"复制成功",color:c}):v({message:"复制失败",type:"danger"})};return(c,o)=>{const x=n("iceTag"),C=n("ice-text"),w=n("ice-button"),b=n("container");return l(),i(m,null,[a("div",E,[s(C,null,{default:t(()=>[o[1]||(o[1]=p(" 使用 ")),s(x,null,{default:t(()=>o[0]||(o[0]=[p("color")])),_:1}),o[2]||(o[2]=p(" 传参,传入的应是下面的拼音,点击复制 "))]),_:1})]),s(b,{class:"colorBlock ice-row"},{default:t(()=>[(l(!0),i(m,null,M(d,(r,B)=>(l(),i("div",{key:B,class:"ice-column colorBlockItem",onClick:S=>_(r.pinyin)},[a("div",{style:u({background:y(f)(r.pinyin).color}),class:"item radio-m noselect"},null,4),s(w,{type:"shadow-lt-rb",color:r.pinyin},{default:t(()=>[a("div",{style:u({color:y(f)(r.pinyin).color})},I(r.pinyin),5)]),_:2},1032,["color"])],8,F))),128))]),_:1})],64)}}};typeof g=="function"&&g(k);const P=N(k,[["__scopeId","data-v-223db051"]]),G={__name:"colors",setup(e){return(d,_)=>(l(),D(T,{component:P}))}};export{G as default};
