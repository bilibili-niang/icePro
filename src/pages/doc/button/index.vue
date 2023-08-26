<template>
  <Preview :component="buttonNormalPreview"/>
  <Preview :component="buttonHoverColorsPreview"/>
  <Preview :component="buttonDisablePreview"/>
  <Preview :component="buttonHoverPreview"/>
  <Preview :component="buttonHoverBackgroundPreview"/>
  <Preview :component="buttonRoundPreview"/>
  <Preview :component="buttonBlockPreview"/>
  <Preview :component="buttonMixturePreview"/>
  <Preview :component="buttonBorder"/>
</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import buttonNormalPreview from './button.preview.vue'
import buttonHoverPreview from './button.hover.preview.vue'
import buttonHoverBackgroundPreview from './button.hover.fill.preview.vue'
import buttonMixturePreview from './button.mixture.preview.vue'
import buttonHoverColorsPreview from './button.allcolors.preview.vue'
import buttonDisablePreview from './button.disable.preview.vue'
import buttonRoundPreview from './button.round.preview.vue'
import buttonBlockPreview from './button.block.preview.vue'
import buttonBorder from './button.border.preview.vue'
</script>

<style scoped>

</style>
