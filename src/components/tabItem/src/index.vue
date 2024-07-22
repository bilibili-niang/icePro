<template>
  <div class="tab-item">
    <ice-column>
      <slot />
    </ice-column>
  </div>
</template>

<script>
export default {
  name: 'iceTabItem'
}
</script>

<script setup>
import { defineProps } from 'vue'

defineProps({
  name: {
    type: String,
    default: ''
  },
  // 当前显示的名称
  label: {
    type: String,
    default: ''
  },
  // 当前激活的名称
  activeName: {
    type: String,
    default: ''
  }
})
</script>
<style lang="less" scoped>
.tab-item {
  width: 100%;
}
</style>
