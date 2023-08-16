<template>
  <a class="ice-link" :class="[
      size?size:'',
      color?'hoverColor':'defaultColor'
  ]"
     :href="href"
     :target="target?target:'_self'"
     :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }">
    <slot/>
  </a>
</template>

<script setup>
import { findColor } from '../../hooks/tools.js'

const props = defineProps({
  size: {
    type: String,
    default: 'normal'
  },
  href: {
    type: String,
    default: ''
  },
  params: {
    type: Object,
  },
  color: {
    type: String,
    default: ''
  },
  target: {
    type: String,
    default: '_self'
  }
})


</script>

<script>
export default {
  name:'ice-link'
}
</script>
<style scoped lang="less">
@import '../../assets/variables.less';

.ice-link {
  font-size: @fontSize-n;
  border-bottom: @themeColor 1px solid;
  width: fit-content;
  white-space: nowrap;
  display: inline-block;
  transition: @time-n;
  margin: @m-normal;

  &:hover {
    cursor: pointer
  }
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
</style>
