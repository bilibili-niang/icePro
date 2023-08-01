<template>
  <div class="ice-row wideContainer">
    <div class="ice-column border-r">
      <docLeft></docLeft>
    </div>
    <div class="ice-column flexFull">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>


import DocLeft from '@/pages/doc/docLeft.vue'</script>

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
