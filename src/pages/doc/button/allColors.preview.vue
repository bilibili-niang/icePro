<preview>
colors
</preview>
<template>
  <div class="ice-row">
    <ice-text>
      使用
      <iceTag>color</iceTag>
      传参,传入的应是下面的拼音,点击复制
    </ice-text>
  </div>
  <container class="colorBlock ice-row">
    <template v-for="(item,index) in allColor" :key="index">
      <div class="ice-column colorBlockItem" @click="copy(item.pinyin)">
        <div :style="{background:findColor(item.pinyin).color}" class="item radio-m noselect">
        </div>
        <ice-button type="shadow-lt-rb" :color="item.pinyin">
          <div :style="{'color':findColor(item.pinyin).color}">
            {{ item.pinyin }}
          </div>
        </ice-button>
      </div>
    </template>
  </container>

</template>

<script setup>
import colors from "../../../assets/colors/colors.json"
import '@/assets/variables.less'
import {reactive} from 'vue'
import {copyText, findColor} from '../../../utils/tools.js'
import {iceMessage} from '../../../../index.js'

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

<style lang="less" scoped>
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
