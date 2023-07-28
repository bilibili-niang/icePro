<template>
  <Preview :component="textPreview"/>
  <Preview :component="textColorsPreview"/>
  <Preview :component="textWrapPreview"/>
  <Preview :component="textSizePreview"/>
  <Preview :component="textUnderlinePreview"/>
</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import textPreview from './text.preview.vue'
import textColorsPreview from './text-colors.preview.vue'
import textWrapPreview from './text-wrap.preview.vue'
import textSizePreview from './text-size.preview.vue'
import textUnderlinePreview from './text-underline.preview.vue'
</script>

<style scoped>

</style>
