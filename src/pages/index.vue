<template>
  <div class='container'>
    <div class="ice-column flex-align-center">

      <ice-avatar :src="imgUrl"></ice-avatar>
      <iceLink href="/doc">开始</iceLink>
      <ice-text>
        献丑了,出来实习之后2023.7开始写的一个基于
        <ice-tag color="beiguahuang">vue3</ice-tag>
        的ui框架,目前还有不少bug,该项目主要是用于我的博客平台
      </ice-text>
    </div>
  </div>
</template>

<script setup>
import imgUrl from "/src/assets/png/logo.png"
import IceLink from '@/components/text/ice-link.vue'</script>

<style lang='less' scoped>

</style>
