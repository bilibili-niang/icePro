<preview>
colors
</preview>
<template>
  <div class="ice-row">
    <ice-text>目前主题有以下颜色</ice-text>
  </div>
  <container class="colorBlock ice-row">
    <div v-for="(colorGroup, index) in colors" :key="index" class="color-group">
      <ice-text class="color-title">{{ colorGroup.color }}</ice-text>
      <div class="color-variations">
        <div v-for="variation in colorGroup.variations" :key="variation.weight" class="color-item"
             @click="handleCopy(variation)">
          <div class="color-preview" :style="{ backgroundColor: variation.hex }"></div>
          <div class="color-info">
            <div class="weight" :style="{ color: variation.hex }">{{ variation.weight }}</div>
            <div class="hex" :style="{ color: variation.hex }">{{ variation.hex }}</div>
            <div class="rgba" :style="{ color: variation.hex }">{{ variation.rgba }}</div>
          </div>
        </div>
      </div>
    </div>
  </container>
</template>

<script setup>
import themeColors from '../../../assets/colors/theme-purple.json'
import { copyText } from '../../../utils/tools'
import iceMessage from '../../../components/message'

const colors = themeColors

const handleCopy = async (variation) => {
  const text = `HEX: ${variation.hex}\nRGBA: ${variation.rgba}`
  const success = await copyText(text)
  if (success) {
    iceMessage('颜色值已复制到剪贴板')
  } else {
    iceMessage('复制失败，请重试')
  }
}
</script>

<style lang="less" scoped>
.colorBlock {
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
  padding: 24px;
}

.color-group {
  flex: 1;
  min-width: 280px;
  max-width: 320px;

  .color-title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 16px;
  }

  .color-variations {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }

  .color-item {
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 8px;
    border-radius: 8px;
    transition: all 0.2s ease-out;
    cursor: pointer;

    &:hover {
      background-color: var(--bac-bleak);
      transform: translateX(4px);
    }

    .color-preview {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      box-shadow: 0 2px 8px var(--bac-inversion);
    }

    .color-info {
      flex: 1;

      .weight {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 4px;
      }

      .hex {
        font-family: monospace;
      }

      .rgba {
        font-family: monospace;
        font-size: 12px;
      }
    }
  }
}
</style>
