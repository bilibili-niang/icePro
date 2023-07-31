<template>
  <Preview :component="messagePreview"/>
  <Preview :component="messageTypePreview"/>

</template>

<script setup>
import messagePreview from './message.preview.vue'
import messageTypePreview from './message.type.preview.vue'

import Preview from '@/components/editor/preview.vue'</script>

<style scoped>

</style>
