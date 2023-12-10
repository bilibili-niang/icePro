<template>
  <Preview :component="iceHeaderPreview"/>
  <Preview :component="iceHeaderColorPreview"/>
  <Preview :component="iceHeaderSelectPreview"/>
</template>

<script setup>
import iceHeaderPreview from "./header.preview.vue";
import iceHeaderColorPreview from "./header.color.preview.vue";
import iceHeaderSelectPreview from "./iceHeaderSelect.preview.vue";
import Preview from "@/components/editor/preview.vue";
</script>