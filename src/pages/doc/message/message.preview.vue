<preview>
message-normal
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      最基础的使用
    </ice-text>
  </div>
  <container>
    <ice-button @click="alertMessage">
      copy
    </ice-button>
  </container>
</template>
<script setup>
import { iceMessage } from '../../../../index.js'

const alertMessage = () => {
  iceMessage(`复制成功`)
}

</script>
