<template>
  <div class="ice-selector">
    <ice-text class="inputVal">{{ placeholder }}</ice-text>
    <iceSelect :value="val"></iceSelect>

  </div>
</template>

<script setup>

import IceSelect from '../../select/iceSelect.vue'
import { ref, defineProps } from 'vue'

const props = defineProps({
  lable: {
    type: String,
    default: ''
  },
  // 预输入文字
  placeholder: {
    type: String,
    default: ''
  }
})

const val = ref('')
</script>

<script>
export default {
  name: "ice-selector"
}
</script>

<style scoped lang="less">
.inputVal {
  border: #7a7374 1px solid;
}
</style>
