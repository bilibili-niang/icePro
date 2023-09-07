<template>
  <router-view></router-view>
</template>

<script setup>
const mode = localStorage.getItem('mode')

if (mode == 'true') {
  document.querySelector('html').classList.add('light')
  document.querySelector('html').classList.remove('dark')
} else {
  document.querySelector('html').classList.add('dark')
  document.querySelector('html').classList.remove('light')
}
</script>
<!--项目的css,不能暴露全局-->
<style lang="less">
body, #app {
  //transition-duration: @time-n;
  overflow-y: hidden;
}
</style>
