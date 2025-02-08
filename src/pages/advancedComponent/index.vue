<script setup>
import DocContainerRender from '@/pages/doc/docLeft/DocContainerRender'

const menuConfig = [
  {
    text: '唱跳rap',
    children: [
      {
        text: '偏移卡片',
        href: '/advancedComponent/misalignedCard'
      }
    ]
  }
]
</script>

<template>
  <div class="wideContainer">
    <iceRow>
      <DocContainerRender :item="menuConfig" />
      <div class="ice-column flexFull scrollStyle">
        <router-view></router-view>
      </div>
    </iceRow>

  </div>
</template>

<style scoped lang="less">
:deep(.ice-doc-container) {
  height: calc(100vh - 60px);
}
</style>