<template>
  <div class="ice-row wideContainer">
    <div
      :class="[
        'ice-column leftContent scrollStyle']">
      <DocContainerRender :item="componentList" />
    </div>

    <div class="ice-column flexFull scrollStyle">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup>
import DocContainerRender from '../../pages/doc/docLeft/DocContainerRender'

const componentList = [
  {
    text: '背景',
    children: [
      {
        text: '随机的背景',
        href: '/thirdComponents/randomPixels'
      },
      {
        text: 'rgb点点旋转',
        href: '/thirdComponents/rgbDotLoading'
      },
      {
        text: 'backContainer',
        href: '/thirdComponents/backContainer'
      }
    ]
  }
]
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
