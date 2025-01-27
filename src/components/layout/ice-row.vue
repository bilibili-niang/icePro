<template>
  <div :class="['ice-row', { center: center }, flexWrap && 'flex-wrap']" :style="{ width: width }">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  center: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '100%'
  },
  flexWrap: {
    type: Boolean,
    default: false
  }
})
</script>
<script>
export default {
  name: 'IceRow'
}
</script>
<style lang="less" scoped>
.ice-row {
  display: flex;
  flex-direction: row;
}

.center {
  justify-content: center;
  align-items: center;
}
</style>
