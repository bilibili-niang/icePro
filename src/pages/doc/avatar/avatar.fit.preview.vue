<preview>头像-fit</preview>
<template>
  <ice-text>
    使用
    <iceTag>fit</iceTag>
    控制显示的图片
  </ice-text>
  <container>
    <div class="ice-row">
      <div v-for="fit in fits" :key="fit" class="ice-column">
        <ice-avatar :fit="fit" :src="imgUrl" block size="120"></ice-avatar>
        <ice-text>
          {{ fit }}
        </ice-text>
      </div>
    </div>
  </container>
</template>
<script setup>
import { reactive } from 'vue'
// 你可能会很熟悉,因为图片是我从element plus抄过来的,这个fit属性也是
const imgUrl = 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg'
const fits = reactive(['fill', 'contain', 'cover', 'none', 'scale-down'])</script>


