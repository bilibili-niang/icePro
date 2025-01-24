<preview>
iceMessageBox
</preview>

<template>
  <ice-text>消息弹窗组件</ice-text>

  <container>
    <ice-column>
      <ice-button @click="showPreview">看看消息 </ice-button>
    </ice-column>
  </container>
</template>
<script lang="ts" setup>
import iceMessageBox from '../../../components/messageBox'

const showPreview = () => {
  iceMessageBox('你好啊')
}
</script>
