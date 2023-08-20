<template>
  <div class="ice-row wideContainer">
    <div class="ice-column border-r">
      <ice-button @click="changeMode">切换模式</ice-button>
      <docLeft></docLeft>
    </div>
    <div class="ice-column flexFull">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import DocLeft from '@/pages/doc/docLeft.vue'

const changeMode = () => {
  const dark = Boolean(localStorage.getItem('mode') == 'false' ? false : true || null)
  if (dark) {
    document.querySelector('html').classList.add('dark')
    document.querySelector('html').classList.remove('light')
  } else {
    document.querySelector('html').classList.add('light')
    document.querySelector('html').classList.remove('dark')
    localStorage.setItem('mode', 'true')
  }
  localStorage.setItem('mode', ( !dark ).toString())
}
</script>


<style scoped lang="less">
.flexFull {
  padding-left: 1rem;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
