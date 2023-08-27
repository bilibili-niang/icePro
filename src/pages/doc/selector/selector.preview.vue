<preview>
selector-normal
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      selector
    </ice-text>
  </div>
  <show>
    <div class="column">
      <ice-text>下面这个是选择器</ice-text>
      <ice-selector :value="selectionVal" placeholder="请选择吧"></ice-selector>
      <ice-text>end</ice-text>
    </div>
  </show>
</template>

<script setup>
import { ref } from 'vue'

const selectionVal = ref('text')


</script>

<style scoped>

</style>
