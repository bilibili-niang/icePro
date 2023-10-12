<preview>
抽屉-drawer
</preview>
<template>
  <container>
    <div class="ice-column">
      <ice-button @click="drawer=true">展开</ice-button>
      <ice-text>
        父组件中的值: drawer:{{ drawer }}
      </ice-text>
      <ice-text>
        你可以使用
        <ice-tag>percent</ice-tag>
        传入指定宽度/高度,它的默认宽度/高度为20%
      </ice-text>

      <iceSplit/>

      <ice-selector v-model="direction" :list="selectionList"></ice-selector>

      <ice-drawer v-model="drawer" :direction="direction" percent="30%">
        <ice-text>
          drawer里面的数据
        </ice-text>
      </ice-drawer>
    </div>
  </container>

</template>
<script setup>
import {reactive, ref} from 'vue'


let direction = ref('left')
let drawer = ref(false)

const selectionList = reactive([
  {
    label: '从左侧展开',
    value: 'left'
  },
  {
    label: '从右侧展开',
    value: 'right'
  },
  {
    label: '从顶部展开',
    value: 'top'
  },
  {
    label: '从底部展开',
    value: 'bottom'
  }
])

</script>

<style lang="less"></style>
