import{P as v}from"./preview-6e362995.js";import{r as k,a as i,o as m,b as B,f as n,w as t,g as r,F as N,j as V}from"./index-d051d01d.js";const s=l=>{l.__sourceCodeTitle=" tabs-normal ",l.__sourceCode=`<container class="ice-column">\r
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
    </ice-tabs>`,l.__script=`import { ref } from 'vue'\r
\r
const activeName = ref('first')`},u={__name:"tabs.normal.preview",setup(l){const o=k("first");return(d,e)=>{const a=i("ice-text"),_=i("ice-title"),f=i("ice-card"),c=i("ice-tab-item"),b=i("ice-tabs"),p=i("container");return m(),B(N,null,[n(a,null,{default:t(()=>e[1]||(e[1]=[r("基础使用")])),_:1}),n(p,{class:"ice-column"},{default:t(()=>[n(b,{modelValue:o.value,"onUpdate:modelValue":e[0]||(e[0]=x=>o.value=x)},{default:t(()=>[n(c,{label:"first",name:"白日梦想家"},{default:t(()=>[n(f,{border:!1},{header:t(()=>[n(_,null,{default:t(()=>e[2]||(e[2]=[r(" 这是一段话,白日梦想家 ")])),_:1})]),body:t(()=>[n(a,null,{default:t(()=>e[3]||(e[3]=[r(" Beautiful things don't ask for attention. ")])),_:1}),n(a,null,{default:t(()=>e[4]||(e[4]=[r(" 真正美丽的东西，并不会刻意寻求别人的目光。 ")])),_:1})]),_:1})]),_:1}),n(c,{label:"second",name:"宇宙探索编辑部"},{default:t(()=>[n(a,null,{default:t(()=>e[5]||(e[5]=[r(" 数学就是太确定了，所以我喜欢语文。我知道诗歌只是人类情感沟通的工具，数学才是全宇宙通用的语言，但我就是讨厌这种确定 ")])),_:1})]),_:1}),n(c,{label:"third",name:"I GOT SMOKE"},{default:t(()=>[n(a,null,{default:t(()=>e[6]||(e[6]=[r(" 满身烟味的我 走路带上点浮夸 ")])),_:1}),n(a,null,{default:t(()=>e[7]||(e[7]=[r(" 想买悦刻五代找我丁真就对了 ")])),_:1})]),_:1})]),_:1},8,["modelValue"])]),_:1})],64)}}};typeof s=="function"&&s(u);const O={__name:"index",setup(l){return(o,d)=>(m(),V(v,{component:u}))}};export{O as default};
