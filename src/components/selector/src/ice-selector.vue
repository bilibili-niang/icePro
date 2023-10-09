<template>
  <div class="ice-selector">
    <!--当前选中的值-->
    <ice-text underLine>
      selectVal:{{ selectVal }}
    </ice-text>
  </div>
</template>

<script setup>
import { defineProps, defineEmits, computed } from 'vue'

const props = defineProps({
  modelValue: {
    type: [String, Number]
  },
  list: {
    type: Array,
    default: () => {
      return []
    }
  }
})

defineEmits(["update:modelValue"])


const selectVal = computed(() => {
  const res = props.list.filter(item => item.value + '' === props.modelValue + '')
  return res.label ? res.label : res[0].label
})

console.log('props.list', props.list)
console.log('props.modelValue', props.modelValue)


</script>

<script>
export default {
  name: "ice-selector"
}
</script>

<style lang="less" scoped>

</style>
