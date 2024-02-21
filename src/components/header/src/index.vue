<script>
export default {
  name: "iceHeader"
};
</script>
<script setup>
import "./index.less";
import {findColor} from "../../../hooks/tools.js";
import {defineProps} from "vue";
// const props=
defineProps({
  // 大小
  size: {
    type: String,
    default: "n"
  },
  color: {
    type: String,
    default: ""
  },
  noselect: {
    type: Boolean,
    default: false
  },
});
</script>
<template>
  <div :class="[
      noselect?'noselect':'',
    `ice-header-${size}`,
        color?'btn-colors':''
  ]"
       :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
       class="ice-header"
  >
    <slot></slot>
  </div>
</template>
