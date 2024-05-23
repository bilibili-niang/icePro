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
      <br/>
      <ice-text>
        禁用
        <ice-tag>disabled</ice-tag>
        <br/>
      </ice-text>
      <div class="ice-row">
        <ice-input v-model="text3" class="input" disabled placeholder="请输入文字"></ice-input>
      </div>


      <div class="ice-row">
        <ice-input v-model="obj.text" class="input" placeholder="对象属性修改"></ice-input>
      </div>
    </div>
  </container>
</template>
<script setup>
import {ref} from "vue"

let text = ref("坤坤菜菜子")
let text2 = ref("一个真正的鳗")
let text3 = ref("iKun铠甲,合体!")
let obj=ref({
  text:'测试文字'
})
</script>
<style lang="less" scoped>
.input {
  margin-right: 1rem;
}
</style>
