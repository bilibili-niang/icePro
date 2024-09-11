<template>
  <a :class="[
      size?'size-'+size:'size-n',
      color?'hoverColor':'defaultColor',
      border?'border':'no-border'
  ]"
     :href="disabled ? null : href"
     :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
     :target="target?target:'_self'"
     class="ice-link">
    <slot />
  </a>
</template>

<script setup>
import { findColor } from '../../utils/tools'

defineProps({
  size: {
    type: String,
    default: ''
  },
  href: {
    type: String,
    default: ''
  },
  params: {
    type: Object
  },
  color: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_self'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  border: {
    type: Boolean,
    default: true
  }
})

</script>

<script>
export default {
  name: 'ice-link'
}
</script>
<style lang="less" scoped>
@import '../../assets/variables.less';
.ice-link {
  font-size: @fontSize-n;
  border-color: @themeColor;
  width: fit-content;
  white-space: nowrap;
  display: inline-block;
  transition: @time-n;
  height: fit-content;
  margin: @m-normal;
  &:hover {
    cursor: pointer
  }
}
.border {
  border-bottom-style: solid;
  border-bottom-width: 1px;
}
.no-border {
  border-style: none;
}
.defaultColor {
  color: @themeColor-bleak;
  &:hover {
    color: @themeColor;
  }
}
// 传入color
.hoverColor {
  color: var(--color);
  border-color: var(--color);
  transition-duration: @time-n;
  &:hover {
    color: var(--hover-color);
    border-color: var(--hover-color);
  }
}
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
</style>
