<template>
  <Preview :component="buttonNormalPreview"/>
  <Preview :component="buttonHoverColorsPreview"/>
  <Preview :component="buttonHoverPreview"/>
  <Preview :component="buttonHoverBackgroundPreview"/>
  <Preview :component="buttonMixturePreview"/>
</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import buttonNormalPreview from './button-normal.preview.vue'
import buttonHoverPreview from './button-hover.preview.vue'
import buttonHoverBackgroundPreview from './button-hover-fill.preview.vue'
import buttonMixturePreview from './button-mixture.preview.vue'
import buttonHoverColorsPreview from './button-hover-colors.preview.vue'</script>

<style scoped>

</style>
