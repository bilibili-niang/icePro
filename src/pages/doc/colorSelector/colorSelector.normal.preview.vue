<preview>
color-selector
</preview>
<template>
  <div class="color-selector-preview">
    <ice-text>默认使用方法</ice-text>
    <container>
      <ice-column>
        <ice-text>
          colorValue: {{ colorValue }}
        </ice-text>
        <color-selector v-model="colorValue"></color-selector>
      </ice-column>
    </container>
  </div>
</template>
<script setup>
import {ref} from "vue"
import ColorSelector from "@/components/colorSelector"
const colorValue = ref("")
</script>