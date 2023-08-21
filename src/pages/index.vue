<template>
  <div class='container'>
    <div class="ice-column flex-align-center">
      <ice-card>
        <template v-slot:header>
          <ice-title>
            icepro
          </ice-title>
        </template>
        <template v-slot:body>
          <ice-avatar :src="imgUrl"></ice-avatar>
          <iceLink href="/doc">起步</iceLink>
          <ice-text noselect>
            献丑了,出来实习之后2023.7开始写的一个基于
            <ice-tag color="beiguahuang">vue3</ice-tag>
            的ui框架,目前还有不少bug,该项目主要是用于我的博客平台
          </ice-text>
          <ice-text noselect>
            基于我的定制化需求才开发的一个ui库
          </ice-text>
          <ice-text>
            <ice-tag color="ganlanlv">简单</ice-tag>
            <ice-tag color="meiguihui">易用</ice-tag>
          </ice-text>
        </template>
      </ice-card>
    </div>
  </div>
</template>

<script setup>
import imgUrl from "/src/assets/png/logo.png"
import IceLink from '@/components/text/ice-link.vue'</script>

<style lang='less' scoped>

</style>
