<template>
  <div class="ice-tag noselect" :class="[type,
  round?'round':'defaultRound',
  color?'btn-colors':'default-color',
  size?`size-${size}`:'size-normal'
  ]"
       :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { findColor } from '../../hooks/tools.js'

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
  }
})
</script>
<script>
export default {
  name: "iceTag"
}
</script>

<style scoped lang="less">
@import '../../assets/variables.less';

.ice-tag {
  color: @themeColor;
  border-color: @themeColor;
  display: flex;
  justify-content: center;
  height: fit-content;
}

.normal {
  font-size: @fontSize-n;
}

.defaultRound {
  border-radius: @radio-n;
}

// round
.round {
  border-radius: 50%;
  aspect-ratio: 1;
}

// size\
.size-small {
  margin: @m-small;
  padding: @p-small;
  transition-duration: @time-s;
}

.size-normal {
  margin: @m-small @m-normal;
  padding: @p-small @p-normal;
  font-size: @fontSize-n;
  font-weight: @fontWeight-n;
  transition-duration: @time-n;
}

.size-large {
  font-size: @fontSize-l;
  font-weight: @fontWeight-l;
  margin: @m-normal @m-large;
  padding: @p-normal @p-large-su;
  transition-duration: @time-l;
}

// 没有传入color时的颜色
.default-color {
  color: @themeColor;
  //background: @themeColor-bleak-bleak;

  &:hover {
    color: @themeColor-bleak;
    //background: @themeColorNone;
  }
}

.btn-colors {
  color: var(--color);
  border-color: var(--color);

  &:hover {
    color: var(--hover-color);
    border-color: var(--hover-color);
  }
}
</style>
