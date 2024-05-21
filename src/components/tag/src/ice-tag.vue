<template>
  <div :class="[type,
  round?'round':'defaultRound',
  color?'btn-colors':'default-color',
  size?`size-${size}`:'size-normal',
  noselect?'noselect':'',
  finger?'finger':'',
  pointer?'pointer':'',
  m0?'m0':'',
  p0?'p0':''
  ]" :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
       class="ice-tag noSelect"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import {findColor} from "../../../hooks/tools"

defineProps({
  type: {
    type: String,
    default: "normal"
  },
  round: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String
  },
  href: {
    type: String,
    default: ""
  },
  // 是可以选中
  noselect: {
    type: Boolean,
    default: false
  },
  finger: {
    type: Boolean,
    default: false
  },
  pointer: {
    type: Boolean,
    default: false
  },
  m0: {
    type: Boolean,
    default: false
  },
  p0: {
    type: Boolean,
    default: false
  }
})

</script>
<script>
export default {
  name: "iceTag"
};
</script>

<style lang="less" scoped>
@import '../../../assets/variables.less';

.ice-tag {
  display: flex;
  justify-content: center;
  height: fit-content;
  font-weight: bold;
  position: relative;
  width: fit-content;
  border: none;
  white-space: nowrap;
  overflow: hidden;

  &:hover {
    cursor: default;
  }

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

// size
.size-small {
  margin: @m-small;
  padding: 0 @p-small;
  transition-duration: @time-s;
  font-size: @fontSize-s;
}

.size-normal {
  margin: 0 @m-small;
  padding: @p-small @p-normal;
  font-size: @fontSize-n;
  transition-duration: @time-n;
}

.size-large {
  font-size: @fontSize-l;
  margin: @m-small @m-normal;
  padding: @p-normal @p-large;
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
  color: var(--hover-color);

  &:before {
    background: var(--color);
    opacity: .2;
  }

  &:hover {
    border: none;
    color: var(--color);

    &:before {
      opacity: .4;
      background: var(--color);
    }
  }
}
</style>
