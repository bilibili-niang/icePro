<preview>头像-block</preview>
<template>
  <ice-text>
    使用
    <iceTag>block</iceTag>
    控制显示的边框
  </ice-text>
  <container>
    <div class="ice-column">
      <ice-avatar :src="imgUrl" block></ice-avatar>
      <ice-avatar :src="imgUrl"></ice-avatar>
    </div>
  </container>
</template>
<script setup>
import {ref} from "vue"

const imgUrl = ref("http://blog.icestone.work/default.png")
// const imgUrl = "src/assets/png/default.png"
</script>


