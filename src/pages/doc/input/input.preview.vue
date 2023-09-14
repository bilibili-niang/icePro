<preview>
input-normal
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      最基础的使用
    </ice-text>
  </div>
  <show>
    <div class="ice-column">
      <div class="ice-row">
        <ice-input class="input" v-model="text" placeholder="请输入文字"></ice-input>
        <ice-text>
          我的名字:{{ text }}
        </ice-text>
      </div>
      <br/>
      <div class="ice-row">
        <ice-input class="input" v-model="text2" placeholder="请输入文字"></ice-input>
      </div>
    </div>
  </show>
</template>
<script setup>
import { ref } from 'vue'

let text = ref('坤坤菜菜子')
let text2 = ref('一个真正的鳗')
</script>
<style scoped lang="less">
.input {
  margin-right: 1rem;
}
</style>
