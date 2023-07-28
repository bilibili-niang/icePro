<template>
  <Preview :component="splitPreview"/>
  <Preview :component="tagPreview"/>
</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import splitPreview from './split.preview.vue'
import tagPreview from './tag.preview.vue'</script>
<style scoped>

</style>
