<template>
  <div :class="{center: center}" :style="{
    'width': width
  }" class='ice-column'>
    <slot></slot>
  </div>
</template>

<script setup>

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
  name: "IceColumn"
};
</script>
<style lang='less' scoped>
.ice-column {
  display: flex;
  flex-direction: column;
}

.center {
  justify-content: center;
  align-items: center;
}
</style>
