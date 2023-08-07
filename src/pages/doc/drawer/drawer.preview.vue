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
      <ice-input v-model="direction"></ice-input>
      <ice-drawer v-model="drawer" :direction="direction">
        drawer里面的数据
      </ice-drawer>
    </div>
  </show>

</template>
<script setup>
import { ref } from 'vue'

let direction = ref('left')
let drawer = ref(false)
</script>

<style lang="less"></style>
