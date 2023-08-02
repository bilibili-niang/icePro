<template>
  <Preview :component="cardNormal"/>
  <Preview :component="cardOperateButton"/>
</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import cardNormal from './card-normal.preview.vue'
import cardOperateButton from './card-operateButton.preview.vue'
</script>
