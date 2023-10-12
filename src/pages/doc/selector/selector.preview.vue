<preview>
selector-normal
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      selector
    </ice-text>
  </div>
  <container>
    <div class="column">
      <ice-text>下面这个是选择器</ice-text>
      <!--<ice-selector :v-model="selectionVal" :lables="selectionList"></ice-selector>-->
      <ice-selector v-model="value" :list="selectionList"></ice-selector>
    </div>
  </container>
</template>

<script setup>
import { ref, reactive } from 'vue'

const value = ref('3')
const selectionList = reactive([
  {
    label: '西瓜',
    value: '1'
  },
  {
    label: '葡萄',
    value: '2'
  },
  {
    label: '桃子',
    value: '3'
  },
  {
    label: '猕猴桃',
    value: '4'
  }
])

</script>

<style scoped>

</style>
