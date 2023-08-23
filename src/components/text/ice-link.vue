<template>
  <a class="ice-link" :class="[
      size?'size-'+size:'size-n',
      color?'hoverColor':'defaultColor'
  ]"
     :href="disabled ? null : href"
     :target="target?target:'_self'"
     :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }">
    <slot/>
  </a>
</template>

<script setup>
import { findColor } from '../../hooks/tools.js'
import { useRouter } from 'vue-router'

const props = defineProps({
  size: {
    type: String,
    default: ''
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
  },
  disabled: {
    type: Boolean,
    default: false
  }
})
const jump = () => {
  if (props.href) {
    if (props.href.indexOf('http') != - 1) {
      window.open(props.href)
    } else {
      const router = useRouter()
      router.push({
        path: props.href
      })
    }
  } else {
    return
  }
}

</script>

<script>
export default {
  name: 'ice-link'
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
  height: fit-content;
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
