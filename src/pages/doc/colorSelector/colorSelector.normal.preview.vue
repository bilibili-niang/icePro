<preview>
theme-selector
</preview>
<template>
  <div class="color-selector-preview">
    <h3>默认使用方法</h3>
    <ice-text> colorValue: {{ colorValue }}</ice-text>
    <ice-row class="theme-switch" flexWrap>
      <ice-button
        hover
        type='shadow-r-t'
        @click="changeTheme('')"
      >
        默认主题
      </ice-button>
      <ice-button
        v-for="(theme) in themes"
        :key="theme.value"
        hover
        type='shadow-r-t'
        @click="changeTheme(theme.value)"
      >
        {{ theme.label }}
      </ice-button>
    </ice-row>
    <ColorSelector v-model:value="colorValue" />
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'
import ColorSelector from '@/components/colorSelector'
import { themeManager, type ThemeType } from '@/utils/theme'

const colorValue = ref('#D81B60')

const themes = [
  { value: 'red', label: '红色主题' },
  { value: 'pink', label: '粉色主题' },
  { value: 'purple', label: '紫色主题' },
  { value: 'deep-purple', label: '深紫色主题' },
  { value: 'blue', label: '蓝色主题' },
  { value: 'green', label: '绿色主题' },
  { value: 'orange', label: '橙色主题' },
  { value: 'white', label: '白色主题' }
]

const changeTheme = (theme: ThemeType) => {
  themeManager.setTheme(theme)
}
</script>

<style lang="less" scoped>
.color-selector-preview {
  padding: 20px;

  .theme-switch {
    margin: 20px 0;
    display: flex;
    gap: 10px;

    ice-button {
      padding: 8px 16px;
      border-radius: 4px;
      background: transparent;
      cursor: pointer;
      .theme-transition();

      &:hover {
        background: var(--primary);
        color: white;
      }
    }
  }
}
</style>
