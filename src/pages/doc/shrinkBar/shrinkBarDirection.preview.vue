<preview>
shrinkBar
</preview>

<template>
  <ice-text>
    使用
    <ice-tag>direction</ice-tag>
    更改收缩方向
  </ice-text>

  <show>
    <shrinkBar direction="top">
      <template v-slot:body>
        <div class="ice-column">
          <ice-title>
            水调歌头-崔与之
          </ice-title>
          <ice-text>万里云间戍，立马剑门关。</ice-text>
          <ice-text>乱山极目无际，直北是长安。</ice-text>
          <ice-text>人苦百年涂炭，鬼哭三边锋镝，天道久应还。</ice-text>
          <ice-text>手写留屯奏，炯炯寸心丹。</ice-text>
        </div>
      </template>
    </shrinkBar>
  </show>
</template>
<script setup>
import ShrinkBar from '@/components/layout/shrinkBar.vue'</script>
