<preview>
按钮-colors-所有
</preview>
<template>
  copiedText:{{ copiedText }}
  <div class="ice-row">
    <ice-text>
      使用
      <iceTag>color</iceTag>
      传参
    </ice-text>
  </div>
  <show class="colorBlock">
    <template v-for="(item,index) in allColor" :key="index">
      <div class="ice-column colorBlockItem" @click="copyText(item.pinyin)">
        <div class="item" :style="{background:computedColor(item)}">
          {{ item.name }}
          {{ item.pinyin }}
        </div>
      </div>
    </template>
  </show>

</template>

<script setup>
import colors from "../../../assets/colors/colors.json"
import '@/assets/variables.less'
import { reactive, ref } from 'vue'
import { findColor } from '@/hooks/tools.js'

const allColor = reactive(colors)
const computedColor = (obj) => {
  return findColor(obj.pinyin).color
}
let copiedText = ref('')
const copyText = (str) => {
  navigator.clipboard.writeText(str)
      .then(() => {
        copiedText.value = '已复制到剪贴板'
      })
      .catch(() => {
        copiedText.value = '复制失败'
      })

}
</script>

<style scoped lang="less">
.colorBlock {
  .item {
    padding: 1.3rem;
  }
}
</style>
