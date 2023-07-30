<preview>
按钮-colors-所有
</preview>
<template>
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
import { reactive } from 'vue'
import { copyText, findColor } from '@/hooks/tools.js'

const allColor = reactive(colors)
const computedColor = (obj) => {
  return findColor(obj.pinyin).color
}


</script>

<style scoped lang="less">

</style>
