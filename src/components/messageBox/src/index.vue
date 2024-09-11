<template>
  <div class="message-box">
    <div
      :class="['message-box-content', 'min-limted', 'ice-column']"
    >

      <div class="message-box-top-title-icon-content ice-row">
        <div class="left-icon">

        </div>
        <div class="right-title">
          {{ props.text }}
        </div>
      </div>

      <div class="button-button ice-row">
        <ice-button>
          确定
        </ice-button>
        <ice-button
          @click="close"
          type="danger"
        >
          取消
        </ice-button>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'iceMessageBox'
}
</script>
<script setup>
import {
  iceButton
}
  from '../../../../index.js'

const props = defineProps({
  text: {
    type: String,
    default: ''
  },
  // 是否允许点击遮罩关闭
  allowMaskClose: {
    type: Boolean,
    default: true
  },
  elementClassName: {
    type: String,
    default: ''
  }
})
const close = () => {
  console.log('关闭')
}

</script>
<style lang="less" scoped>
.message-box {
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, .3);
  justify-content: center;
  padding-top: 200px;
  animation-duration: .3s;
}
.message-box-content {
  background: @bac;
  height: fit-content;
  border-radius: @radio-n;
  padding: @p-normal @p-large-su;
}
</style>