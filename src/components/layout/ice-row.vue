<template>
  <div :class="{center: center}" :style="{
    'width': width
  }" class='ice-row'>
    <slot></slot>
  </div>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  center: {
    type: Boolean,
    default: false
  },
  width: {
    type: String,
    default: "100%"
  }
});
</script>
<script>
export default {
  name: "IceRow"
};
</script>
<style lang='less' scoped>
.ice-row {
  display: flex;
  flex-direction: row;
}

.center {
  justify-content: center;
  align-items: center;
}
</style>
