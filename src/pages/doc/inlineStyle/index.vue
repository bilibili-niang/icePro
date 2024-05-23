<template>
  <div class="inlineStyle">
    <ice-header>
      inlineStyle:
    </ice-header>
    <ice-text>
      像是某些特殊场景,你需要将样式直接写在组件上,而不是在样式文件中,这时就可以使用
      <ice-tag>inlineStyle</ice-tag>
      了.
    </ice-text>
    <ice-text>但是要注意你传入的文件名,后缀必须是
      <ice-tag>.inlineStyle.vue</ice-tag>
    </ice-text>
    <inlineStyle :component="inlineStyleDemo"></inlineStyle>
  </div>
</template>

<script setup>
import inlineStyleDemo from "./inlineStyleDemo.inlineStyle.vue"
</script>

