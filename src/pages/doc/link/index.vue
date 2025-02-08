<template>
  <Preview :component="linkPreview"/>
  <Preview :component="linkBorderPreview"/>

</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import linkPreview from './link.preview.vue'
import linkBorderPreview from './link.border.preview.vue'
</script>
