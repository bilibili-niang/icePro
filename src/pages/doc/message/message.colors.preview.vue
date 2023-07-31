<preview>
message-normal
</preview>
<template>
  <ice-text>
    使用
    <ice-tag>color</ice-tag>
    控制弹窗的颜色
  </ice-text>
  <show>
    <ice-button @click="alertMessage">
      copy
    </ice-button>
  </show>
</template>
<script setup>
import { iceMessage } from '../../../../index.js'

const alertMessage = () => {
  iceMessage({
    message: `复制成功`,
    // color:
  })
}

</script>
