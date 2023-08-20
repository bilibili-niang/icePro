<template>
  <div class='ice-text'
       :class="[
      nowrap?'text-nowrap':'',
      color?'hoverColor':'',
      size?'size-'+size:'size-n',
      underLine?'underLine':'',
      noselect?'noselect':''
  ]"
       :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
import { defineEmits, defineProps } from 'vue'
import { findColor } from '../../hooks/tools.js'

const props = defineProps({
  nowrap: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: ''
  },
  underLine: {
    type: Boolean,
    default: false
  },
  noselect: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['click'])
const clickCallBack = (evt) => {
  if (props.disable) {
    return
  }
  emit('click', evt)
}
</script>
<script>
export default {
  name: "iceText"
}
</script>
<style lang='less' scoped>
@import '../../assets/variables.less';

.ice-text {
  color: @themeColor;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  word-break: break-word;
}

// size
.size-n {
  font-size: @fontSize-n;
  font-weight: @fontWeight-n;
  padding: @p-normal @p-large;
  transition: @time-n;
}

.size-s {
  font-size: @fontSize-s;
  font-weight: @fontWeight-s;
  padding: @p-small @p-normal;
  transition: @time-s;
}

.size-l {
  font-size: @fontSize-l;
  font-weight: @fontWeight-l;
  padding: @p-normal @p-large;
  transition: @time-l;
}

.hoverColor {
  color: var(--color);
  border-color: var(--color);
  text-decoration-color: var(--color) !important;

  &:hover {
    color: var(--hover-color);
    border-color: var(--hover-color);
  }
}

// underline
.underLine {
  text-decoration: underline @themeColor;
}
</style>
