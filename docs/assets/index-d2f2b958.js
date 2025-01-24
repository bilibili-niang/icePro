import{P as v}from"./preview-25ff2814.js";import{y as k,r as l,o as u,c as y,b as n,w as t,d as a,F as B,h as N}from"./index-c6aa0d5d.js";function s(r){return r.__sourceCode=`<container class="ice-column">\r
    <ice-tabs v-model="activeName">\r
\r
      <ice-tab-item label="first" name="白日梦想家">\r
        <ice-card :border="false">\r
          <template v-slot:header>\r
            <ice-title>\r
              这是一段话,白日梦想家\r
            </ice-title>\r
          </template>\r
          <template v-slot:body>\r
            <ice-text>\r
              Beautiful things don't ask for attention.\r
            </ice-text>\r
            <ice-text>\r
              真正美丽的东西，并不会刻意寻求别人的目光。\r
            </ice-text>\r
          </template>\r
        </ice-card>\r
      </ice-tab-item>\r
\r
      <ice-tab-item label="second" name="宇宙探索编辑部">\r
        <ice-text>\r
          数学就是太确定了，所以我喜欢语文。我知道诗歌只是人类情感沟通的工具，数学才是全宇宙通用的语言，但我就是讨厌这种确定\r
        </ice-text>\r
      </ice-tab-item>\r
\r
      <ice-tab-item label="third" name="I GOT SMOKE">\r
        <ice-text>\r
          满身烟味的我 走路带上点浮夸\r
        </ice-text>\r
        <ice-text>\r
          想买悦刻五代找我丁真就对了\r
        </ice-text>\r
      </ice-tab-item>\r
    </ice-tabs>\r
  </container>`,r.__sourceCodeTitle=" tabs-normal ",r.__styleCode=null,r.__script=`<script setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('first')\r
<\/script>`,r}const m={__name:"tabs.normal.preview",setup(r){const o=k("first");return(d,e)=>{const i=l("ice-text"),_=l("ice-title"),f=l("ice-card"),c=l("ice-tab-item"),b=l("ice-tabs"),p=l("container");return u(),y(B,null,[n(i,null,{default:t(()=>e[1]||(e[1]=[a("基础使用")])),_:1}),n(p,{class:"ice-column"},{default:t(()=>[n(b,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=x=>o.value=x)},{default:t(()=>[n(c,{label:"first",name:"白日梦想家"},{default:t(()=>[n(f,{border:!1},{header:t(()=>[n(_,null,{default:t(()=>e[2]||(e[2]=[a(" 这是一段话,白日梦想家 ")])),_:1})]),body:t(()=>[n(i,null,{default:t(()=>e[3]||(e[3]=[a(" Beautiful things don't ask for attention. ")])),_:1}),n(i,null,{default:t(()=>e[4]||(e[4]=[a(" 真正美丽的东西，并不会刻意寻求别人的目光。 ")])),_:1})]),_:1})]),_:1}),n(c,{label:"second",name:"宇宙探索编辑部"},{default:t(()=>[n(i,null,{default:t(()=>e[5]||(e[5]=[a(" 数学就是太确定了，所以我喜欢语文。我知道诗歌只是人类情感沟通的工具，数学才是全宇宙通用的语言，但我就是讨厌这种确定 ")])),_:1})]),_:1}),n(c,{label:"third",name:"I GOT SMOKE"},{default:t(()=>[n(i,null,{default:t(()=>e[6]||(e[6]=[a(" 满身烟味的我 走路带上点浮夸 ")])),_:1}),n(i,null,{default:t(()=>e[7]||(e[7]=[a(" 想买悦刻五代找我丁真就对了 ")])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}};typeof s=="function"&&s(m);const O={__name:"index",setup(r){return(o,d)=>(u(),N(v,{component:m}))}};export{O as default};
