<template>
  <router-view></router-view>
</template>

<script setup>
const mode = localStorage.getItem('mode')

if (mode) {
  document.querySelector('html').classList.add('light')
  document.querySelector('html').classList.remove('dark')
} else {
  document.querySelector('html').classList.add('dark')
  document.querySelector('html').classList.remove('light')
}
</script>
<style scoped lang="less">

</style>
