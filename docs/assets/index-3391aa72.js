import{P as v}from"./preview-b4316df3.js";import{h,r as c,o as _,c as k,b as t,w as e,d as r,F as B,k as N}from"./index-b8fee99f.js";import"https://cdn.skypack.dev/gsap@3.12.0";function s(n){return n.__sourceCode=`<container class="ice-column">\r
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
  </container>`,n.__sourceCodeTitle=" tabs-normal ",n.__styleCode=null,n.__script=`<script setup>\r
import { ref } from 'vue'\r
\r
const activeName = ref('first')\r
<\/script>`,n}const m={__name:"tabs.normal.preview",setup(n){const i=h("first");return(u,o)=>{const a=c("ice-text"),d=c("ice-title"),f=c("ice-card"),l=c("ice-tab-item"),p=c("ice-tabs"),b=c("container");return _(),k(B,null,[t(a,null,{default:e(()=>[r("基础使用")]),_:1}),t(b,{class:"ice-column"},{default:e(()=>[t(p,{modelValue:i.value,"onUpdate:modelValue":o[0]||(o[0]=x=>i.value=x)},{default:e(()=>[t(l,{label:"first",name:"白日梦想家"},{default:e(()=>[t(f,{border:!1},{header:e(()=>[t(d,null,{default:e(()=>[r(" 这是一段话,白日梦想家 ")]),_:1})]),body:e(()=>[t(a,null,{default:e(()=>[r(" Beautiful things don't ask for attention. ")]),_:1}),t(a,null,{default:e(()=>[r(" 真正美丽的东西，并不会刻意寻求别人的目光。 ")]),_:1})]),_:1})]),_:1}),t(l,{label:"second",name:"宇宙探索编辑部"},{default:e(()=>[t(a,null,{default:e(()=>[r(" 数学就是太确定了，所以我喜欢语文。我知道诗歌只是人类情感沟通的工具，数学才是全宇宙通用的语言，但我就是讨厌这种确定 ")]),_:1})]),_:1}),t(l,{label:"third",name:"I GOT SMOKE"},{default:e(()=>[t(a,null,{default:e(()=>[r(" 满身烟味的我 走路带上点浮夸 ")]),_:1}),t(a,null,{default:e(()=>[r(" 想买悦刻五代找我丁真就对了 ")]),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}};typeof s=="function"&&s(m);const O={__name:"index",setup(n){return(i,u)=>(_(),N(v,{component:m}))}};export{O as default};
