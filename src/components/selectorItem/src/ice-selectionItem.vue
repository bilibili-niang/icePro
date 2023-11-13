<template>
  <div class="ice-selectionItem noselect" @click="clickTrigger">
    <div :class="[
        show?'showItem':'hideItem',
      color?'hoverColor':''
    ]"
         class="selectionItem"
    >
      {{ item.label }}
    </div>

  </div>
</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps({
  show: {
    type: Boolean,
    default: false
  },
  item: {
    type: Object,
    default: () => {
    }
  },
  color: {
    type: String,
    default: ""
  },

});

const emits = defineEmits(["clicked"]);
const clickTrigger = () => {
  emits("clicked", props.item);
};
</script>

<script>
export default {
  name: "ice-selectionItem"
};
</script>

<style lang="less" scoped>
.ice-selectionItem{
  min-width: 7rem;

  .selectionItem{
    font-size: @fontSize-n;
    line-height: @lineHeight-n;
    transition-duration: @time-n;
    height: @lineHeight-n;
    padding: @p-normal;
    padding-left: @p-large;
    border: @themeColor 1px solid;
    border-radius: @radio-l;
    color: @themeColor;

    &:hover{
      color: @themeActiveColor;
    }
  }

  .showItem{
    opacity: 1;
    margin-bottom: @m-normal;
  }

  .hideItem{
    opacity: 0;
    padding: 0 !important;
    font-size: 0;
    height: 0;
    margin-bottom: 0;
    line-height: 0;
    border: 0;
  }
}

.hoverColor{
  color: var(--color);
  border-color: var(--color);
  text-decoration-color: var(--color) !important;

  &:hover{
    color: var(--hover-color);
    border-color: var(--hover-color);
  }
}

</style>
