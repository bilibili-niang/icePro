<script>
export default {
  name: 'dragger'
}
</script>
<script setup>
import { ref } from 'vue'

const props = defineProps({
  list: {
    type: Array,
    default: () => []
  },
  disabled: {
    type: Boolean,
    default: false
  },
  onStart: {
    type: Function,
    default: () => ({})
  },
  onUpdate: {
    type: Function,
    default: () => ({})
  },
  onEnd: {
    type: Function,
    default: () => ({})
  }
})
const list = ref([])
const init = () => {
  list.value = props.list
}
init()
</script>

<template>
  <div class="ice-dragger">
    <VueDraggable
      ref="el"
      v-model="list"
      :disabled="disabled"
      :animation="150"
      ghostClass="ghost"
      class="flex flex-col gap-2 p-4 w-300px h-300px m-auto bg-gray-500/5 rounded"
      @start="onStart"
      @update="onUpdate"
      @end="onEnd"
    >
      <div
        v-for="item in list"
        :key="item.id"
        class="cursor-move h-30 bg-gray-500/5 rounded p-3"
      >
        {{ item.name }}
      </div>
    </VueDraggable>
  </div>
</template>

<style scoped lang="less">

</style>