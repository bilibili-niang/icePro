<template>
  <div class="ice-tabs ice-column">
    <ice-row>
      <template v-for="(item,index) in items" :key="index">
        <ice-tag
          @click="titleChange(item.label)"
          :color="item.label===modelValue?'jucheng':''"
        >
          {{ item.name }}
        </ice-tag>
      </template>
    </ice-row>
    <div class="ice-tabItemContainer">
      <component
        v-if="current"
        :is="current"
        :key="current.props.name"
      ></component>
    </div>
  </div>
</template>

<script>
export default {
  name: 'iceTabs'
}
</script>

<script setup>
import { useSlots, computed } from 'vue'
import iceTabItem from '../../tabItem/index.js'

const props = defineProps({
  modelValue: {
    type: String,
    default: '1'
  }
})
const emits = defineEmits(['update:modelValue'])

// 这里获取到的是默认插槽的vnode，但拿不到对应的dom实例
const slots = useSlots().default()

const current = computed(() => {
  return slots.find((tag) => tag.props.label === props.modelValue)
})

const items = computed(() => slots.map(it => it.props))

const init = () => {
  slots.forEach((tag) => {
    if (tag.type.name !== iceTabItem.name) {
      throw new Error('iceTabs 子标签必须是iceTabItem')
    }
  })
}

// 更新当前激活的tab
const titleChange = (label) => emits('update:modelValue', label)

init()

</script>

<style scoped lang="less">
.ice-tabItemContainer {
  display: flex;
  height: fit-content;
  width: 100%;
}
</style>