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

    <slot name="body"></slot>

  </div>
</template>

<script setup>
import { ref } from 'vue'

const hover = ref(false)
const shrinkBar = ref()
let clickShow = ref(false)
const getTip = () => {
  clickShow.value = !clickShow.value
  if (clickShow.value) {
    window.document.body.style.paddingLeft = `${ shrinkBar.value.offsetWidth }px`
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

}

.shrinkBarShow {
  left: 0rem;
  background: @themeColorReversal;
  opacity: 1;
}

.shrinkBarShow2 {
  background: @themeColorReversal;
  opacity: 1;
  left: 0rem !important;
}
</style>
