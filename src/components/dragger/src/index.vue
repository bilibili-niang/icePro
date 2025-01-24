<script>
export default {
  name: 'iceDragger'
}
</script>
<script setup>
import { VueDraggableNext as draggable } from 'vue-draggable-next'
import { watch, toRefs } from 'vue'
import empty from '../../../components/empty'

const props = defineProps({
  list: {
    type: Array,
    default: () => [{}]
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

const data = toRefs(props)
const emits = defineEmits(['update:data'])
watch(
  () => data.value,
  (val) => {
    emits('update:data', val)
  }
)
console.log('data:')
console.log(data.list.value)
</script>

<template>
  <div class="ice-dragger">
    <div class="empty" v-if="data.list.length === 0">
      <empty />
    </div>
    <draggable
      v-else
      ref="el"
      v-model="data.list"
      :disabled="disabled"
      :animation="150"
      ghostClass="ghost"
      class="draggable"
      @start="onStart"
      @update="onUpdate"
      @end="onEnd"
    >
      <div draggable v-for="(item, index) in data.list" :key="index" class="cursor-move">
        {{ item?.name }}
      </div>
    </draggable>
  </div>
</template>

<style scoped lang="less">
.draggable {
  display: flex;
  height: auto;
  padding: 10px;
  flex-direction: column;

  .cursor-move {
    display: flex;
    height: fit-content;
    padding: 10px;
    color: @themeActiveColor;
    min-height: 20px;
    background: gray;
    margin-top: 10px;
  }
}
</style>
