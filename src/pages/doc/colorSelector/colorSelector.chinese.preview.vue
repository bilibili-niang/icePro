<preview>
color-selector 中国传统色
</preview>

<template>
  <container>
    <ice-text>传入
      <ice-tag>chinese</ice-tag>
      实现开启,默认关闭
    </ice-text>
    <ice-column>
      <ice-text>
        当前选择的颜色: {{ colorValue }}
      </ice-text>
      <color-selector v-model="colorValue" chinese></color-selector>
    </ice-column>
  </container>
</template>
<script setup>
import {ref} from "vue";

const colorValue = ref("");
</script>
