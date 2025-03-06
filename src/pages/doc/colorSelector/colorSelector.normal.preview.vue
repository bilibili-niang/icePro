<preview>
theme-selector
</preview>
<template>
  <div class="color-selector-preview">
    <h3>默认使用方法</h3>
    <ice-text> colorValue: {{ colorValue }}</ice-text>
    <ice-row class="theme-switch" flexWrap>
      <!--      <ice-button
              hover
              type='shadow-r-t'
              @click="changeTheme('')"
            >
              默认主题
            </ice-button>-->
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
import { themeManager, type ThemeType, themes } from '@/utils/theme'

const colorValue = ref('#D81B60')


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
