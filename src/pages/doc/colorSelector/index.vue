<template>
  <Preview :component="colorSelectorNormal" />
  <!--  <Preview :component="colorSelectorChinese"/>-->
</template>

<script setup>
import colorSelectorNormal from './colorSelector.normal.preview.vue'
// import colorSelectorChinese from "./colorSelector.chinese.preview.vue"
import Preview from '@/components/editor/preview.vue'
</script>