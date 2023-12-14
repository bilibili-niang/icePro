<template>
  <Preview :component="splitNormal"/>
  <Preview :component="splitColor"/>
  <Preview :component="splitText"/>
</template>
<script setup>

import Preview from "@/components/editor/preview.vue";
import splitNormal from "./split.normal.preview.vue";
import splitColor from "./split.color.preview.vue";
import splitText from './split.text.preview.vue'
</script>