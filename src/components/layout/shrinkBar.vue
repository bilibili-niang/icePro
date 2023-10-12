<template>

  <!--不收起的slot-->
  <div :class="[
      bacColor?'':'normalBackgroundColor',
       hover?'slotHide':'',
  ]"
       class="alwaysShow"
  >
    <slot name="show"></slot>
  </div>

  <div ref="shrinkBar"
       :class="['shrinkBar',
  'ice-column',
  hover?'shrinkBarShow':'',
  clickShow?'shrinkBarShow':''
  ]"
       @mouseleave="hover = false"
       @mouseover="hover = true"
  >

    <ice-button @click="getTip">{{ clickShow ? '取消固定' : '固定' }}</ice-button>

    <slot name="show"></slot>
    <slot name="body"></slot>

  </div>
</template>

<script setup>
import {ref} from 'vue'

const hover = ref(false)

const shrinkBar = ref()
let clickShow = ref(false)

defineProps({
  // 需要收缩的方向
  direction: {
    type: String,
    default: 'left'
  },
  bacColor: {
    type: String
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
if (window.document.body.style.paddingLeft + '' === '0px') {
  clickShow.value = true
}

setTimeout(() => {
  console.log('设置为0')
  window.document.body.style.paddingLeft = 0
})
</script>
<script>
export default {
  name: "shrinkBar"
}
</script>
<style lang="less" scoped>
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
  left: 0;
  opacity: 1;
}

.shrinkBarHide {
  opacity: 1;
  left: -95% !important;
}

.alwaysShow {
  position: fixed;
  top: 10px;
  left: 10px;
  z-index: 99;
}

.normalBackgroundColor {
  background: @bac;
}

</style>
