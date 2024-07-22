<preview>
拖拽-dragger
</preview>

<script setup>
import { ref } from 'vue'
import iceDragger from '../../../components/dragger/index.js'

const list = ref([{
  name: '张三',
  age: 21
}, {
  name: '李四',
  age: 13
}])
</script>

<template>
  <ice-text noselect>
    拖动组件,封装了一下
  </ice-text>

  <container>
    <ice-row>
      <iceDragger :list="list" />
      {{ list }}
    </ice-row>
  </container>
</template>

<style scoped lang="less">

</style>