<template>
  <Preview :component="cardNormal"/>
  <Preview :component="cardOperateButton"/>
  <Preview :component="cardBottomButton"/>
  <Preview :component="cardBorder"/>
</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import cardNormal from './card-normal.preview.vue'
import cardOperateButton from './card-operateButton.preview.vue'
import cardBottomButton from './card.bottom.button.preview.vue'
import cardBorder from './card-border.preview.vue'</script>
