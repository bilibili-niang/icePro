<template>
  <div class="ice-selectionItem" @click="clickTrigger">
    <div :class="[
        show?'showItem':'hideItem'
    ]"
         class="selectionItem"
    >
      {{ item.label }}
    </div>

  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue'

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default: () => {
    }
  }
})

const emits = defineEmits(['clicked'])
const clickTrigger = () => {
  emits('clicked', props.item)
}
</script>

<script>
export default {
  name: 'ice-selectionItem'
}
</script>

<style lang="less" scoped>
.ice-selectionItem {
  .selectionItem {
    font-size: @fontSize-n;
    line-height: @lineHeight-n;
    transition-duration: @time-n;
    height: @lineHeight-n;
    padding: @p-normal;
    padding-left: @p-large;
    border: @themeColor 1px solid;
    border-radius: @radio-l;
  }

  .showItem {
    opacity: 1;
    margin-bottom: @m-normal;
  }

  .hideItem {
    opacity: 0;
    overflow: hidden;
    padding: 0 !important;
    font-size: 0;
    height: 0;
    margin-bottom: 0;
  }
}

</style>
