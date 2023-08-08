<preview>
抽屉-drawer
</preview>
<template>
  <show>
    <div class="ice-column">
      <ice-button @click="drawer=true">展开</ice-button>
      <ice-text>
        父组件中的值: drawer:{{ drawer }}
      </ice-text>

      <split></split>
      <ice-selector-group v-model="selectorValue">
        <ice-selector label=""></ice-selector>
      </ice-selector-group>
      <ice-input v-model="direction"></ice-input>
      <ice-drawer v-model="drawer" :direction="direction">
        drawer里面的数据
      </ice-drawer>
    </div>
  </show>

</template>
<script setup>
import { ref } from 'vue'
import IceSelector from '@/components/selector/src/ice-selector.vue'
import IceSelectorGroup from '@/components/selector-group/src/ice-selector-group.vue'

let direction = ref('left')
let drawer = ref(false)

const selectorValue = ref('top')

</script>

<style lang="less"></style>
