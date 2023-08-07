<template>
  <Preview :component="tagPreview"/>
  <Preview :component="tagSizePreview"/>
  <Preview :component="tagColorPreview"/>
</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import tagPreview from './tag.preview.vue'
import tagSizePreview from './tag.size.preview.vue'
import tagColorPreview from './tag.color.preview.vue'</script>
<style scoped>

</style>
