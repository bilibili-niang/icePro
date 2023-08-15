<template>
  <div :class="['shrinkBar',
  hover?'shrinkBarShow':'',
  clickShow?'shrinkBarShow':''
  ]"
       ref="shrinkBar"
       @mouseover="hover = true"
       @mouseleave="hover = false"
  >
    <ice-button @click="getTip">{{ clickShow ? '取消固定' : '固定' }}</ice-button>


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
  background: @themeColor-bleak-bleak;
  transition-duration: .7s;

}

.shrinkBarShow {
  left: 0rem;
}

.shrinkBarShow2 {
  left: 0rem !important;
}
</style>
