<template>
    <Preview :component="RandomPixelsPreview" />
    <Preview :component="SimpleBackgroundPreview" />
</template>

<script setup>
import Preview from '../../../components/editor/preview.vue'
import RandomPixelsPreview from './randomPixels.preview.vue'
import SimpleBackgroundPreview from './simpleBackground.preview.vue'
</script>
