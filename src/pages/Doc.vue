<template>
  <div class="ice-row wideContainer">
    <div class="ice-column border-r">
      <docLeft></docLeft>
    </div>
    <div class="ice-column flexFull">
      <router-view/>
    </div>
  </div>
</template>

<script setup>


import DocLeft from '@/pages/doc/docLeft.vue'</script>

<style scoped lang="less">
.flexFull {
  padding-left: 1rem;
}
</style>
