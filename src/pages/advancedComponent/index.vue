<script setup>
import advanceJson from '../../router/advance.json'
</script>

<template>
  <div class="wideContainer">
    <iceRow>
      <iceColumn class='leftContent scrollStyle'>
        <template v-for="(item, index) in advanceJson.pathList" :key="index">
          <div
            class="advance-btn-item"
          >
            {{ item.text }}

          </div>

        </template>
      </iceColumn>

      <div class="ice-column flexFull scrollStyle m-top-s">
        <router-view></router-view>
      </div>
    </iceRow>

  </div>
</template>

<style scoped lang="less">
.leftContent {
  padding-top: @padding;
  transition: .5s;
  z-index: 10;
  height: 100vh;
  overflow-y: visible;
  box-sizing: border-box;
  overflow-x: visible;
  width: fit-content !important;
}
.flexFull {
  padding-left: 1rem;
  padding-bottom: 200px;
  height: 100vh;
  overflow-y: auto;
  box-sizing: border-box;
  overflow-x: hidden;
}
.advance-btn-item {
  color: var(--color);
  font-size: @fontSize-n;
  height: 30px;
  border-bottom: 1px solid gray;
}
</style>