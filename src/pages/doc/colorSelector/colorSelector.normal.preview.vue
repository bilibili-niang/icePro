<preview>
color-selector
</preview>
<template>
  <ice-text>默认使用方法</ice-text>
  <container>
    <ice-column>
      <ice-text>
        colorValue: {{ colorValue }}
      </ice-text>
      <color-selector v-model="colorValue"></color-selector>
    </ice-column>
  </container>
</template>
<script setup>
import {ref} from "vue"

const colorValue = ref("")
</script>