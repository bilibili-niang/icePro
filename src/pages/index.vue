<template>
  <div class='container' v-if="false">
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
    <split dashed></split>
    <ice-text>
      我的博客:
    </ice-text>
    <ice-link href="http://blog.icestone.work/#/">blog</ice-link>
  </div>

  <div class="demo"></div>
</template>

<script setup>
import imgUrl from "/src/assets/png/logo.png"
import IceLink from '@/components/text/ice-link.vue'
</script>

<style lang='less' scoped>
.bac {
  background-color: black;
}

.demo {
  display: flex;
  width: 500px;
  height: 500px;
  margin-top: 100px;
  border-radius: 5px;
  margin: 0 auto;
  margin-top: 100px;
  position: relative;
  background-color: rgba(0, 0, 0, .1);

  &::after {
    position: absolute;
    top: 0;
    left: 0;
    display: flex;
    width: 0;
    height: 0;
    content: ' ';
    border-left: 50px solid black;

  }

}
</style>
