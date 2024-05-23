// /components/Markdown.vue
<template>
  <article class="markdown-body" v-html="content"></article>
</template>

<script setup>
// 传入的md文件
defineProps({
  content: {
    type: String,
    required: true,
  },
})
</script>
