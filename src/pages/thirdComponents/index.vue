<template>
  <div class="third-components ice-row wideContainer">
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
      }
    ]
  }
]
</script>

<style lang="less" scoped>
.third-components {
  padding: 20px;

  .component-list {
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;

    .component-item {
      width: 300px;
    }
  }
}
</style>
