<template>
  <Preview :component="menuPreview"/>
  <Preview :component="menuBorderPreview"/>
  <Preview :component="menuNofoldPreview"/>
  <Preview :component="menuColorsPreview"/>
</template>

<script setup>
import menuPreview from './menu.preview.vue'
import menuBorderPreview from './menu.border.preview.vue'
import menuNofoldPreview from './menu.nofold.preview.vue'
import menuColorsPreview from './menu.colors.preview.vue'
import Preview from '@/components/editor/preview.vue'
</script>
