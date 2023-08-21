<template>
  <div class="ice-row wideContainer">
    <div class="ice-column border-r">
      <ice-button @click="changeMode">切换模式</ice-button>
      <ice-row v-if="false">
        <input type="color" v-model="colorVal">
        <text :style="{'color':colorVal}">
          {{ colorVal }}
          <ice-button @click="setColor">set</ice-button>
          <ice-button @click="clearColor">clear</ice-button>
        </text>
      </ice-row>
      <docLeft></docLeft>
    </div>
    <div class="ice-column flexFull">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import DocLeft from '@/pages/doc/docLeft.vue'
import { ref } from 'vue'

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
const colorVal = ref('#422929')
const setColor = () => {
  localStorage.setItem('color', colorVal.value)
}
const clearColor = () => {
  localStorage.removeItem('color')
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
