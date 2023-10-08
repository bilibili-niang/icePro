<template>
  <div :class="['shrinkBar',
  'ice-column',
  hover?'shrinkBarShow':'',
  clickShow?'shrinkBarShow':''
  ]"
       ref="shrinkBar"
       @mouseover="hover = true"
       @mouseleave="hover = false"
  >
    <ice-button @click="getTip">{{ clickShow ? '取消固定' : '固定' }}</ice-button>
    direction:{{ direction }}
    <slot name="body"></slot>

  </div>
</template>

<script setup>
import {ref} from 'vue'

const hover = ref(false)
const shrinkBar = ref()
let clickShow = ref(false)

const props = defineProps({
  // 需要收缩的方向
  direction: {
    type: String,
    default: 'left'
  }
})

const getTip = () => {
  clickShow.value = !clickShow.value
  if (clickShow.value) {
    window.document.body.style.paddingLeft = `${shrinkBar.value.offsetWidth}px`
  } else {
    window.document.body.style.paddingLeft = 0
  }
}
if (window.document.body.style.paddingLeft !== 0) {
  clickShow.value = true
}
</script>
<script>
export default {
  name: "shrinkBar"
}
</script>
<style scoped lang="less">
@import '../../assets/variables.less';

.shrinkBar {
  position: fixed;
  top: 0;
  left: -13rem;
  display: flex;
  min-height: 100vh;
  min-width: 15rem;
  transition-duration: .7s;
  opacity: 0;
  background: @bac;
  border: @themeActiveColor 1px solid;
  z-index: 100;
}

.shrinkBarShow {
  left: 0rem;
  opacity: 1;
}

.shrinkBarShow2 {
  opacity: 1;
  left: 0rem !important;
}
</style>
