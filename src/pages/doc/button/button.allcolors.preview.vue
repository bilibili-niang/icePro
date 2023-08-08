<preview>
按钮-hover-colors
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      使用
      <iceTag>color</iceTag>
      控制字体颜色和hover的颜色,
      <ice-link href="/doc/button/colors">所有颜色</ice-link>
    </ice-text>
    <ice-text>
      或者查看所有
      <ice-tag>color</ice-tag>
      的支持
      <ice-link href="/doc/button/colors">colors</ice-link>
    </ice-text>
  </div>
  <show>
    <ice-button color="xiancaizi">苋菜紫</ice-button>
    <ice-button color="lizong">栗棕</ice-button>
    <ice-button color="qinglian">青莲</ice-button>
    <ice-button color="wumeizi">乌梅紫</ice-button>
    <ice-button color="yejuzi">野菊紫</ice-button>
    <ice-button color="honglan">虹蓝</ice-button>
  </show>
</template>
<script setup>
import IceLink from '@/components/text/ice-link.vue'
</script>
