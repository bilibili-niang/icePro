<preview>
iceImgPreview
</preview>
<template>
  <ice-text>图片预览组件</ice-text>

  <container>
    <ice-column>
      <ice-button @click="showPreview">点击查看</ice-button>
    </ice-column>
    <iceImgPreview ref="imgPreviewRef" :imgUrls="imgList" closeIconRight />
  </container>
</template>

<script setup>
import { ref } from 'vue'
import bac1 from '@/assets/png/bac1.png'
import bac2 from '@/assets/png/bac2.png'
import bac3 from '@/assets/png/bac3.png'
import ding from '@/assets/png/ding.png'

let imgPreviewRef = ref()
let imgList = ref([
  bac1, bac2, bac3, ding
])
const showPreview = () => {
  imgPreviewRef.value.show(imgList.value)
}
</script>