<preview>头像-block</preview>
<template>
  <ice-text>
    使用
    <iceTag>block</iceTag>
    控制显示的边框
  </ice-text>
  <show>
    <div class="ice-column">
      <ice-avatar :src="imgUrl" block></ice-avatar>
      <ice-avatar :src="imgUrl"></ice-avatar>
    </div>
  </show>
</template>
<script setup>
import imgUrl from "/src/assets/png/default.png"</script>


