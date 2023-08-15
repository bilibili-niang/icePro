<template>
  <Preview :component="avatar"/>
  <Preview :component="avatarBlock"/>
  <Preview :component="avatarFit"/>
</template>

<script setup>
import Preview from '@/components/editor/preview.vue'
import avatar from './avatar.preview.vue'
import avatarBlock from './avatar.block.preview.vue'
import avatarFit from './avatar.fit.preview.vue'</script>
