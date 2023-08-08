<preview>
colors
</preview>
<template>
  <div class="ice-row">
    <ice-text>
      使用
      <iceTag>color</iceTag>
      传参
    </ice-text>
  </div>
  <show class="colorBlock ice-row">
    <template v-for="(item,index) in allColor" :key="index">
      <div class="ice-column colorBlockItem" @click="copy(item.pinyin)">
        <div class="item radio-m noselect" :style="{background:findColor(item.pinyin).color}">
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
import { copyText, findColor } from '../../../hooks/tools.js'
import { iceMessage } from '../../../../index.js'

const allColor = reactive(colors)
const copy = async (str) => {
  const res = await copyText(str)
  if (res) {
    iceMessage({
      message: `复制成功`,
      color: str
    })
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
  width: 15%;
  padding: @p-normal;
  margin: @m-small;

  .item {
    padding: @p-normal;
    display: flex;
    height: 3rem;
    width: 100%;
  }
}
</style>
