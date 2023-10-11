<preview>
message-color
</preview>
<template>
  <ice-text>
    使用
    <ice-tag>color</ice-tag>
    控制弹窗的颜色,注意type和color是会覆盖的,colors>type,
    <ice-link href="/doc/button/colors">所有颜色</ice-link>
  </ice-text>
  <container>
    <ice-button @click="alertMessage">
      xiangrikuihuang
    </ice-button>
    <ice-button @click="alertMessage2">
      biluochunlv
    </ice-button>
    <ice-button @click="alertMessage3">
      yinzhu
    </ice-button>
  </container>
</template>
<script setup>
import { iceMessage } from '../../../../index.js'
import IceLink from '@/components/text/ice-link.vue'

const alertMessage = () => {
  iceMessage({
    message: `复制成功`,
    color: 'xiangrikuihuang'
  })
}
const alertMessage2 = () => {
  iceMessage({
    message: `复制成功`,
    color: 'biluochunlv'
  })
}
const alertMessage3 = () => {
  iceMessage({
    message: `复制成功`,
    color: 'yinzhu'
  })
}

</script>
