<preview>
ice-img-preview
</preview>
<template>
  <ice-text>图片预览组件</ice-text>

  <container>
    <ice-column>
      <ice-button @click="showPreview">点击查看</ice-button>
    </ice-column>
    <iceImgPreview ref="imgPreviewRef" :imgUrls="imgList" closeIconRight/>
  </container>
</template>

<script setup>
import {ref} from "vue";

let imgPreviewRef = ref();
let imgList = ref([
  "/src/assets/png/bac1.png",
  "/src/assets/png/bac2.png",
  "/src/assets/png/bac3.png",
  "/src/assets/png/ding.png",
]);
const showPreview = () => {
  imgPreviewRef.value.show(imgList.value);
};
</script>