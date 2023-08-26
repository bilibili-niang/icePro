<preview>
按钮-border
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      使用
      <iceTag>border</iceTag>
      控制是否要显示border
    </ice-text>
  </div>
  <show>
    <ice-button color="yejuzi">野菊紫</ice-button>
    <ice-button color="yejuzi" :border="false">野菊紫</ice-button>
  </show>
</template>
<script setup>
import IceLink from '@/components/text/ice-link.vue'
</script>
