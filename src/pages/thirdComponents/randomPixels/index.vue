<template>
  <div>
    <ice-text>
      你好
    </ice-text>
    <Preview :component="RandomPixelsPreview" />
  </div>
</template>

<script setup>
import RandomPixelsPreview from './randomPixels.preview.vue'
import Preview from '../../../components/editor/preview.vue'

</script>
