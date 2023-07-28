<template>
  <teleport>
    <div class="ice-message">
      <slot></slot>
    </div>
  </teleport>
</template>

<script setup>
import { provide } from 'vue'</script>
<script>
import { provide } from 'vue'

export default {
  name: "ice-message",
  mounted () {
    provide('showPopup', this.showPopup)
  },
  methods: {
    showPopup () {
      // 弹窗逻辑
    },
  },
}
</script>

<style scoped>

</style>
