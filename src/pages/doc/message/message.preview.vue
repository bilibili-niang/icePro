<preview>
消息弹窗-message
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      最基础的使用
    </ice-text>
  </div>
  <show>
    <ice-button @click="alertMessage">
      copy
    </ice-button>
  </show>
</template>
<script setup>
import { iceMessage } from '../../../../index.js'

const alertMessage = () => {
  iceMessage(`复制成功`)
}

</script>
