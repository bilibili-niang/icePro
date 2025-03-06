<template>
  <router-view></router-view>
</template>
<script setup>
import { themeStore } from './store'

const { init } = themeStore()
import { themeManager, themes } from './utils'

init()
themeManager.setTheme(themes[0].value)

</script>
<!--项目的css,不能暴露全局-->
<style lang="less">
body, #app {
  //transition-duration: @time-n;
  overflow-y: hidden;
}
</style>
