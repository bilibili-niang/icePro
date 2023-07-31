<preview>
card-normal
</preview>
<template>
  <ice-text>
    最基础的内容展现,使用具名插槽
  </ice-text>
  <div class="btns">
    <ice-button @click="triggerMessage">
      alert
    </ice-button>
  </div>
  <show>
    <ice-card>
      <template v-slot:header>
        水调歌头-崔与之
      </template>
      <template v-slot:body>
        <ice-text>"万里云间戍，立马剑门关。",</ice-text>
        <ice-text>"乱山极目无际，直北是长安。",</ice-text>
        <ice-text>"人苦百年涂炭，鬼哭三边锋镝，天道久应还。",</ice-text>
        <ice-text>"手写留屯奏，炯炯寸心丹。",</ice-text>
        <ice-text>"对青灯，搔白发，漏声残。",</ice-text>
        <ice-text>"老来勋业未就，妨却一身闲。",</ice-text>
        <ice-text>"梅岭绿阴青子，蒲间清泉白石，怪我旧盟寒。",</ice-text>
        <ice-text>"烽火平安夜，归梦到家山。"</ice-text>
      </template>
    </ice-card>
  </show>
</template>

<script setup>
import { iceMessage } from '../../../../index.js'
import { reactive, ref } from 'vue'

let msg = reactive({})
const triggerMessage = () => {
  msg = iceMessage(`复制成功`)
  console.log(msg)
}

</script>
<style lang='less' scoped></style>
