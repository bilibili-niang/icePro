<template>
  <div class="ice-link" :class="[
      size?size:'',
      color?'hoverCOlor':''
  ]"
       :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
       @click="go">
    <slot></slot>
  </div>
</template>

<script setup>
import { useRouter } from 'vue-router'
import { findColor } from '@/hooks/tools.js'
import { reactive } from 'vue'

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

let color = reactive({})
// 这里传入的是 pinyin,返回的是对象
color = findColor(props.color)
</script>

<style scoped lang="less">
@import '../../assets/variables.less';

.ice-link {
  font-size: @fontSize-n;
  border-bottom: @themeColor 1px solid;

  &:hover {
    cursor: pointer
  }
}

</style>
