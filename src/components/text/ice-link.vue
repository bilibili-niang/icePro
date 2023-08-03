<template>
  <div class="ice-link" :class="[
      size?size:'',
      color?'hoverColor':'defaultColor'
  ]"
       :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
       @click="go">
    <slot></slot>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
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
    default: 'defaultColor'
  }
})
const router = useRouter()
const go = () => {
  if (props.href) {
    router.push({
      path: props.href,
      query: props.params ? props.params : ''
    })
  }
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

  &:hover {
    cursor: pointer
  }
}

.defaultColor {
  color: @themeColor;

  &:hover {
  @themeColor-bleak;
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
