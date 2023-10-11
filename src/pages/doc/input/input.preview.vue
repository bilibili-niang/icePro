<preview>
input-normal
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      最基础的使用
    </ice-text>
  </div>
  <container>
    <div class="ice-column">
      <div class="ice-row">
        <ice-input v-model="text" class="input" placeholder="请输入文字"></ice-input>
        <ice-text>
          我的名字:{{ text }}
        </ice-text>
      </div>
      <br/>
      <div class="ice-row">
        <ice-input v-model="text2" class="input" placeholder="请输入文字"></ice-input>
      </div>
    </div>
  </container>
</template>
<script setup>
import { ref } from 'vue'

let text = ref('坤坤菜菜子')
let text2 = ref('一个真正的鳗')
</script>
<style lang="less" scoped>
.input {
  margin-right: 1rem;
}
</style>
