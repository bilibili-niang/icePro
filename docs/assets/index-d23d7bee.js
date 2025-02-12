import{r as p,c as w,L as C,a as o,o as z,j as V,w as n,d as x,f as r,g as t,t as m,u as L,N as B,_ as D}from"./index-d051d01d.js";import{P as I}from"./preview-6e362995.js";const b=a=>{a.__sourceCodeTitle=" 抽屉-drawer ",a.__sourceCode=`<div class="ice-column">\r
      <ice-button @click="drawer = true">展开抽屉</ice-button>\r
      <ice-text>\r
        抽屉状态: {{ drawer ? '打开' : '关闭' }}\r
      </ice-text>\r
\r
      <iceSplit />\r
\r
      <ice-text>\r
        方向控制：\r
      </ice-text>\r
      <ice-selector v-model="direction" :list="selectionList"></ice-selector>\r
\r
      <iceSplit />\r
\r
      <ice-text>\r
        尺寸控制：\r
      </ice-text>\r
      <ice-row class="m-bottom-n">\r
        <ice-input v-model="size" placeholder="输入宽度或高度，如：400px 或 50%"></ice-input>\r
      </ice-row>\r
      <ice-text class="tip">\r
        提示：左右方向时控制宽度，上下方向时控制高度\r
      </ice-text>\r
\r
      <ice-drawer\r
        v-model:model-value="drawer"\r
        :direction="direction"\r
        :width="drawerSize">\r
        <template #header>\r
          <ice-text>抽屉标题</ice-text>\r
        </template>\r
        <div class="drawer-content">\r
          <ice-text>这是抽屉的内容区域</ice-text>\r
          <ice-text>当前方向：{{ direction }}</ice-text>\r
          <ice-text>当前尺寸：{{ drawerSize }}</ice-text>\r
        </div>\r
        <template #footer>\r
          <ice-button @click="drawer = false">关闭抽屉</ice-button>\r
        </template>\r
      </ice-drawer>\r
    </div>`,a.__script=`import { computed, ref, watch } from 'vue'\r
import iceDrawer from '../../../components/drawer'\r
\r
const direction = ref('right')\r
const drawer = ref(false)\r
const size = ref('30%')\r
\r
const isHorizontal = computed(() => {\r
  return ['left', 'right'].includes(direction.value)\r
})\r
\r
const drawerSize = computed(() => {\r
  return size.value\r
})\r
\r
// 监听size的变化，自动格式化尺寸值\r
watch(size, (newValue) => {\r
  if (!newValue) {\r
    size.value = '30%'\r
    return\r
  }\r
\r
  // 如果已经是正确格式就不处理\r
  if (/^\\d+(%|px)$/.test(newValue)) {\r
    return\r
  }\r
\r
  // 如果只输入了数字，自动添加px单位\r
  const num = parseInt(newValue)\r
  if (!isNaN(num)) {\r
    size.value = \`\${num}px\`\r
  }\r
})\r
\r
const selectionList = [\r
  {\r
    label: '从右侧展开',\r
    value: 'right'\r
  },\r
  {\r
    label: '从左侧展开',\r
    value: 'left'\r
  },\r
  {\r
    label: '从顶部展开',\r
    value: 'top'\r
  },\r
  {\r
    label: '从底部展开',\r
    value: 'bottom'\r
  }\r
]`,a.__styleCode=`.tip {\r
  font-size: 0.9em;\r
  color: #666;\r
}\r
\r
.drawer-content {\r
  padding: 20px;\r
}\r
\r
.m-left-s {\r
  margin-left: 8px;\r
}`},P={class:"ice-column"},U={class:"drawer-content"},g={__name:"drawer.preview",setup(a){const s=p("right"),u=p(!1),c=p("30%");w(()=>["left","right"].includes(s.value));const v=w(()=>c.value);C(c,d=>{if(!d){c.value="30%";return}if(/^\d+(%|px)$/.test(d))return;const e=parseInt(d);isNaN(e)||(c.value=`${e}px`)});const S=[{label:"从右侧展开",value:"right"},{label:"从左侧展开",value:"left"},{label:"从顶部展开",value:"top"},{label:"从底部展开",value:"bottom"}];return(d,e)=>{const _=o("ice-button"),l=o("ice-text"),f=o("iceSplit"),N=o("ice-selector"),k=o("ice-input"),$=o("ice-row"),y=o("container");return z(),V(y,null,{default:n(()=>[x("div",P,[r(_,{onClick:e[0]||(e[0]=i=>u.value=!0)},{default:n(()=>e[5]||(e[5]=[t("展开抽屉")])),_:1}),r(l,null,{default:n(()=>[t(" 抽屉状态: "+m(u.value?"打开":"关闭"),1)]),_:1}),r(f),r(l,null,{default:n(()=>e[6]||(e[6]=[t(" 方向控制： ")])),_:1}),r(N,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=i=>s.value=i),list:S},null,8,["modelValue"]),r(f),r(l,null,{default:n(()=>e[7]||(e[7]=[t(" 尺寸控制： ")])),_:1}),r($,{class:"m-bottom-n"},{default:n(()=>[r(k,{modelValue:c.value,"onUpdate:modelValue":e[2]||(e[2]=i=>c.value=i),placeholder:"输入宽度或高度，如：400px 或 50%"},null,8,["modelValue"])]),_:1}),r(l,{class:"tip"},{default:n(()=>e[8]||(e[8]=[t(" 提示：左右方向时控制宽度，上下方向时控制高度 ")])),_:1}),r(L(B),{"model-value":u.value,"onUpdate:modelValue":e[4]||(e[4]=i=>u.value=i),direction:s.value,width:v.value},{header:n(()=>[r(l,null,{default:n(()=>e[9]||(e[9]=[t("抽屉标题")])),_:1})]),footer:n(()=>[r(_,{onClick:e[3]||(e[3]=i=>u.value=!1)},{default:n(()=>e[11]||(e[11]=[t("关闭抽屉")])),_:1})]),default:n(()=>[x("div",U,[r(l,null,{default:n(()=>e[10]||(e[10]=[t("这是抽屉的内容区域")])),_:1}),r(l,null,{default:n(()=>[t("当前方向："+m(s.value),1)]),_:1}),r(l,null,{default:n(()=>[t("当前尺寸："+m(v.value),1)]),_:1})])]),_:1},8,["model-value","direction","width"])])]),_:1})}}};typeof b=="function"&&b(g);const T=D(g,[["__scopeId","data-v-a514bc23"]]),q={__name:"index",setup(a){return(s,u)=>(z(),V(I,{component:T}))}};export{q as default};
