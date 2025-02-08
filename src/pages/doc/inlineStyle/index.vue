<!--我不知道为什么要写这个组件-->
<template>
  <div class="inlineStyle">
    <ice-header> inlineStyle:</ice-header>
    <ice-text> 这是一个用来创建并展示组件的示例,你可以在里面写任何你想要展示的内容.</ice-text>
    <ice-text>
      像是某些特殊场景,你需要将样式直接写在组件上,而不是在样式文件中,这时就可以使用
      <ice-tag>inlineStyle</ice-tag>
      了
    </ice-text>
    <ice-text
    >但是要注意你传入的文件名,后缀必须是
      <ice-tag>.inlineStyle.vue</ice-tag>
    </ice-text>
    <Preview :component="inlineStyleDemo"></Preview>
  </div>
</template>

<script setup>
import inlineStyleDemo from './inlineStyleDemo.inlineStyle.vue'
import Preview from '@/components/editor/preview.vue'
</script>
