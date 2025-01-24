import{y as p,k as w,B,r as a,o as z,h as V,w as t,a as x,b as n,d as l,t as f,u as C,O as D,_ as I}from"./index-c6aa0d5d.js";import{P as L}from"./preview-25ff2814.js";function b(o){return o.__sourceCode=`<container>
    <div class="ice-column">
      <ice-button @click="drawer = true">展开抽屉</ice-button>
      <ice-text>
        抽屉状态: {{ drawer ? '打开' : '关闭' }}
      </ice-text>

      <iceSplit />

      <ice-text>
        方向控制：
      </ice-text>
      <ice-selector v-model="direction" :list="selectionList"></ice-selector>

      <iceSplit />

      <ice-text>
        尺寸控制：
      </ice-text>
      <ice-row class="m-bottom-n">
        <ice-input v-model="size" placeholder="输入宽度或高度，如：400px 或 50%"></ice-input>
      </ice-row>
      <ice-text class="tip">
        提示：左右方向时控制宽度，上下方向时控制高度
      </ice-text>

      <ice-drawer
        v-model:model-value="drawer"
        :direction="direction"
        :width="drawerSize">
        <template #header>
          <ice-text>抽屉标题</ice-text>
        </template>
        <div class="drawer-content">
          <ice-text>这是抽屉的内容区域</ice-text>
          <ice-text>当前方向：{{ direction }}</ice-text>
          <ice-text>当前尺寸：{{ drawerSize }}</ice-text>
        </div>
        <template #footer>
          <ice-button @click="drawer = false">关闭抽屉</ice-button>
        </template>
      </ice-drawer>
    </div>
  </container>`,o.__sourceCodeTitle=" 抽屉-drawer ",o.__styleCode=`<style lang="less" scoped>
.tip {
  font-size: 0.9em;
  color: #666;
}

.drawer-content {
  padding: 20px;
}

.m-left-s {
  margin-left: 8px;
}
</style>`,o.__script=`<script setup>
import { computed, ref, watch } from 'vue'
import iceDrawer from '../../../components/drawer'

const direction = ref('right')
const drawer = ref(false)
const size = ref('30%')

const isHorizontal = computed(() => {
  return ['left', 'right'].includes(direction.value)
})

const drawerSize = computed(() => {
  return size.value
})

// 监听size的变化，自动格式化尺寸值
watch(size, (newValue) => {
  if (!newValue) {
    size.value = '30%'
    return
  }

  // 如果已经是正确格式就不处理
  if (/^\\d+(%|px)$/.test(newValue)) {
    return
  }

  // 如果只输入了数字，自动添加px单位
  const num = parseInt(newValue)
  if (!isNaN(num)) {
    size.value = \`\${num}px\`
  }
})

const selectionList = [
  {
    label: '从右侧展开',
    value: 'right'
  },
  {
    label: '从左侧展开',
    value: 'left'
  },
  {
    label: '从顶部展开',
    value: 'top'
  },
  {
    label: '从底部展开',
    value: 'bottom'
  }
]
<\/script>`,o}const P={class:"ice-column"},U={class:"drawer-content"},g={__name:"drawer.preview",setup(o){const s=p("right"),c=p(!1),u=p("30%");w(()=>["left","right"].includes(s.value));const m=w(()=>u.value);B(u,d=>{if(!d){u.value="30%";return}if(/^\d+(%|px)$/.test(d))return;const e=parseInt(d);isNaN(e)||(u.value=`${e}px`)});const S=[{label:"从右侧展开",value:"right"},{label:"从左侧展开",value:"left"},{label:"从顶部展开",value:"top"},{label:"从底部展开",value:"bottom"}];return(d,e)=>{const v=a("ice-button"),i=a("ice-text"),_=a("iceSplit"),k=a("ice-selector"),y=a("ice-input"),N=a("ice-row"),$=a("container");return z(),V($,null,{default:t(()=>[x("div",P,[n(v,{onClick:e[0]||(e[0]=r=>c.value=!0)},{default:t(()=>e[5]||(e[5]=[l("展开抽屉")])),_:1}),n(i,null,{default:t(()=>[l(" 抽屉状态: "+f(c.value?"打开":"关闭"),1)]),_:1}),n(_),n(i,null,{default:t(()=>e[6]||(e[6]=[l(" 方向控制： ")])),_:1}),n(k,{modelValue:s.value,"onUpdate:modelValue":e[1]||(e[1]=r=>s.value=r),list:S},null,8,["modelValue"]),n(_),n(i,null,{default:t(()=>e[7]||(e[7]=[l(" 尺寸控制： ")])),_:1}),n(N,{class:"m-bottom-n"},{default:t(()=>[n(y,{modelValue:u.value,"onUpdate:modelValue":e[2]||(e[2]=r=>u.value=r),placeholder:"输入宽度或高度，如：400px 或 50%"},null,8,["modelValue"])]),_:1}),n(i,{class:"tip"},{default:t(()=>e[8]||(e[8]=[l(" 提示：左右方向时控制宽度，上下方向时控制高度 ")])),_:1}),n(C(D),{"model-value":c.value,"onUpdate:modelValue":e[4]||(e[4]=r=>c.value=r),direction:s.value,width:m.value},{header:t(()=>[n(i,null,{default:t(()=>e[9]||(e[9]=[l("抽屉标题")])),_:1})]),footer:t(()=>[n(v,{onClick:e[3]||(e[3]=r=>c.value=!1)},{default:t(()=>e[11]||(e[11]=[l("关闭抽屉")])),_:1})]),default:t(()=>[x("div",U,[n(i,null,{default:t(()=>e[10]||(e[10]=[l("这是抽屉的内容区域")])),_:1}),n(i,null,{default:t(()=>[l("当前方向："+f(s.value),1)]),_:1}),n(i,null,{default:t(()=>[l("当前尺寸："+f(m.value),1)]),_:1})])]),_:1},8,["model-value","direction","width"])])]),_:1})}}};typeof b=="function"&&b(g);const T=I(g,[["__scopeId","data-v-ccf7fc39"]]),j={__name:"index",setup(o){return(s,c)=>(z(),V(L,{component:T}))}};export{j as default};
