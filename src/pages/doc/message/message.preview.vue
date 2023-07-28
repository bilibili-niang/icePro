<preview>
分割线-type
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      使用
      <iceTag>type</iceTag>
      来控制为类型
    </ice-text>
  </div>
  <show>
    <ice-button @click="iceMessage=true">
      trigger
    </ice-button>



  </show>
</template>
<script setup>
import { ref } from 'vue'

const iceMessage = ref(false)

</script>
