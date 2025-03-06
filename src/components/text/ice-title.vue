<template>
  <div class='ice-title' :class="[noselect?'noselect':'',color?'hoverColor':'defaultColor']" :title="title"
       :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
  >
    <h4 class="slot" :class="[type,size]">
      <slot/>
    </h4>
  </div>
</template>

<script setup>
import { findColor } from '../../utils'

defineProps({
  type: {
    type: String,
    default: 'normal'
  },
  size: {
    type: String,
    default: 'n'
  },
  title: {
    type: String,
    default: ''
  },
  noselect: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: 'defaultColor'
  }
})
</script>
<script>
export default {
  name: 'ice-title'
}
</script>
<style lang='less' scoped>
@import '../../assets/variables.less';

.ice-title {
  color: @themeColor;
  display: flex;
}

// size
.n {
  flex-direction: row;
  font-size: @fontSize-n;
  margin-left: @m-normal;
  padding: @p-normal;
}

// size
.l {
  font-size: @fontSize-l;
  margin-top: @m-large;
  margin-bottom: @m-large;
  font-weight: @fontWeight-l-su;
}

.defaultColor {
  h4 {
    transition-duration: @time-n;
    color: @themeColor;

    &:hover {
      color: @themeColor-bleak;
    }
  }
}

// 传入color
.hoverColor {
  h4 {
    color: var(--color);
    border-color: var(--color);
    transition-duration: @time-n;

    &:hover {
      color: var(--hover-color);
      border-color: var(--hover-color);
    }
  }
}
</style>
