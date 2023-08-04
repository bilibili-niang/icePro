<template>
  <Preview :component="containerRowPreview"/>
  <Preview :component="containerColumnPreview"/>
</template>

<script setup>
import containerRowPreview from '@/pages/doc/container/container.row.preview.vue'
import Preview from '@/components/editor/preview.vue'
import containerColumnPreview from '@/pages/doc/container/container.column.preview.vue'

</script>

<style scoped>

</style>
