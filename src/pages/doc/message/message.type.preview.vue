<preview>
message-type
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      使用
      <ice-tag> type</ice-tag>
      控制弹窗的类型
    </ice-text>
  </div>
  <show>
    <ice-button @click="alertMessage">
      info
    </ice-button>
    <ice-button @click="alertMessage2">
      danger
    </ice-button>
    <ice-button @click="alertMessage3">
      success
    </ice-button>
    <ice-button @click="alertMessage4">
      ready
    </ice-button>
  </show>
</template>
<script setup>
import { iceMessage } from '../../../../index.js'

const alertMessage = () => {
  iceMessage({
    message: `info类型,为默认`,
    type: 'info'
  })
}
const alertMessage2 = () => {
  iceMessage({
    message: `danger类型`,
    type: 'danger'
  })
}
const alertMessage3 = () => {
  iceMessage({
    message: `success类型`,
    type: 'success'
  })
}
const alertMessage4 = () => {
  iceMessage({
    message: `ready类型`,
    type: 'ready'
  })
}

</script>
