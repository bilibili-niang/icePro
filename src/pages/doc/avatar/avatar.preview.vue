<preview>头像</preview>
<template>
  <ice-text>
    使用
    <iceTag>src</iceTag>
    传入
  </ice-text>
  <container>
    <div class="ice-column">
      <ice-avatar :src="imgUrl"></ice-avatar>
      <ice-text>加载出错,使用默认占位符:</ice-text>
      <ice-avatar :src="logo"></ice-avatar>
    </div>
  </container>
</template>
<script setup>
import logo from '@/assets/png/logo.png'
import imgUrl from '/src/assets/png/logo.png'
</script>
