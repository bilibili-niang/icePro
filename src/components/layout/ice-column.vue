<template>
  <div class='ice-column' :class="{center: center}">
    <slot></slot>
    <slot name="top"/>
    <slot name="bottom"/>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  center: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: '100%'
  }
})
</script>
<script>
export default {
  name: 'IceColumn'
}
</script>
<style lang='less' scoped>
.ice-column {
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100% !important;
}

.center {
  justify-content: center;
  align-items: center;
}
</style>
