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
      <div class="ice-column colorBlockItem" @click="copy(item.pinyin)">
        <div class="item" :style="{background:findColor(item.pinyin).color}">
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
import { iceMessage } from '../../../../index.js'

const allColor = reactive(colors)
const copy = async (str) => {
  const res = await copyText(str)
  if (res) {
    iceMessage(`复制成功`)
  } else {
    iceMessage({
      message: `复制失败`,
      type: 'danger'
    })
  }
}
</script>

<style scoped lang="less">
.colorBlockItem {
  .item {
    padding: @p-normal;
    margin: @m-small;
  }
}
</style>
