<template>
  <div :class="[type,
  round?'round':'defaultRound',
  color?'btn-colors':'default-color',
  size?`size-${size}`:'size-normal'
  ]" :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
       class="ice-tag noSelect"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { findColor } from '../../../hooks/tools'
import { defineProps } from 'vue'

defineProps({
  type: {
    type: String,
    default: 'normal'
  },
  round: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String
  },
  href: {
    type: String,
    default: ''
  }
})

</script>
<script>
export default {
  name: "iceTag"
}
</script>

<style lang="less" scoped>
@import '../../../assets/variables.less';

.ice-tag {
  display: flex;
  justify-content: center;
  height: fit-content;
  font-weight: bold;
  z-index: 1;
  position: relative;
  width: fit-content;
  border: none;
  white-space: nowrap;
  overflow: hidden;

  &:before {
    position: absolute;
    content: '';
    display: flex;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: -1;
    transition-duration: @time-s;
  }
}

.defaultRound {
  border-radius: @radio-l;
}

// round
.round {
  border-radius: 50%;
  aspect-ratio: 1;
}

// size\
.size-small {
  margin: @m-small;
  padding: 0;
  transition-duration: @time-s;
}

.size-normal {
  margin: 0 @m-small;
  padding: @p-small;
  font-size: @fontSize-s;
  transition-duration: @time-n;
}

.size-large {
  font-size: @fontSize-l;
  margin: @m-normal @m-large;
  padding: @p-normal @p-large-su;
  transition-duration: @time-l;
}

// 没有传入color时的颜色
.default-color {
  color: @themeColor;

  &:before {
    opacity: .1;
    background: @themeColor;
    transition-duration: @time-s;
  }

  &:hover {
    border: none;
    color: @themeColor-bleak;

    &:before {
      opacity: .3;
      background: @themeColor;
    }
  }
}

// 传入color时的样式
.btn-colors {
  color: var(--color);
  //border-color: var(--color);

  &:before {
    background: var(--color);
    opacity: .2;
  }

  &:hover {
    border: none;
    color: var(--hover-color);
    //border-color: var(--hover-color);

    &:before {
      opacity: .4;
      background: var(--color);
    }
  }
}
</style>
