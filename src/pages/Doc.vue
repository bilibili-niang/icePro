<template>
  <div class="ice-row wideContainer">
    <div class='ice-column leftContent scrollStyle'>

      <ice-row v-if="false">
        <input v-model="colorVal" type="color">
        <text :style="{'color':colorVal}">
          {{ colorVal }}
          <ice-button @click="setColor">set</ice-button>
          <ice-button @click="clearColor">clear</ice-button>
        </text>
      </ice-row>

      <docLeft></docLeft>
    </div>
    <div class="ice-column flexFull scrollStyle">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import docLeft from './doc/docLeft'

const colorVal = ref('#422929')
const setColor = () => {
  localStorage.setItem('color', colorVal.value)
}
const clearColor = () => {
  localStorage.removeItem('color')
}
</script>

<style lang="less" scoped>
.flexFull {
  padding-left: 1rem;
  padding-bottom: 200px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  overflow-x: hidden;
}

.wideContainer {
  .leftContent {
    padding-top: @padding;
    transition: .5s;
    z-index: 10;
    height: 100vh;
    overflow-y: auto;
    box-sizing: border-box;
    overflow-x: hidden;
  }
}

.positionFix {
  position: fixed;
  left: -100% !important;
}

.fixedBtn {
  position: fixed;
  top: 10px;
  left: 0;
}

</style>
