<template>
  <div class="ice-tabs ice-column">
    <ice-row>
      <template v-for="(item,index) in titles" :key="index">
        <ice-tag @click="titleChange(item)" :color="item===modelValue?'jucheng':''">
          {{ item }}
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
  name: "iceTabs"
}
</script>

<script setup>
import {useSlots, computed} from 'vue'
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

const titles = slots.map((tag) => tag.props.name)

const current = computed(() => {
  return slots.find((tag) => tag.props.name === props.modelValue)
})

const init = () => {
  slots.forEach((tag) => {
    if (tag.type.name !== iceTabItem.name) {
      throw new Error("iceTabs 子标签必须是iceTabItem")
    }
  })

}

// 更新当前激活的tab
const titleChange = (title) => {
  emits("update:modelValue", title)
}

init()

</script>

<style scoped lang="less">
.ice-tabItemContainer {
  display: flex;
  height: fit-content;
  width: 100%;
}
</style>