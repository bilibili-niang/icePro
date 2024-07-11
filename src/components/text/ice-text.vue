<template>
  <div :class="[
      nowrap?'text-nowrap':'',
      color?'hoverColor':'',
      size?'size-'+size:'size-n',
      underLine?'underLine':'',
      noselect?'noselect':'',
      m0?'m0':'',
      p0?'p0':'',
  ]"
       :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
       class='ice-text'
  >
    <slot></slot>
  </div>
</template>

<script setup>
import {findColor} from "../../utils/tools"

defineProps({
  nowrap: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ""
  },
  size: {
    type: String,
    default: ""
  },
  underLine: {
    type: Boolean,
    default: false
  },
  noselect: {
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
  name: "iceText"
}
</script>
<style lang='less' scoped>
@import '../../assets/variables.less';

.ice-text{
  color: @themeColor;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  word-break: break-word;
}

// size
.size-n{
  font-size: @fontSize-n;
  font-weight: @fontWeight-n;
  padding: @p-normal @p-large;
  transition: @time-n;
}

.size-s{
  font-size: @fontSize-s;
  font-weight: @fontWeight-s;
  padding: @p-small @p-normal;
  transition: @time-s;
}

.size-l{
  font-size: @fontSize-l;
  font-weight: @fontWeight-l;
  padding: @p-normal @p-large;
  transition: @time-l;
}

.hoverColor{
  text-decoration-color: var(--color) !important;
  color: var(--hover-color);
  border-color: var(--hover-color);

  &:hover{
    color: var(--color);
    border-color: var(--color);
  }
}

// underline
.underLine{
  text-decoration: underline @themeColor;
}
</style>
