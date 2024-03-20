<template>
  <div class="inlineStyleTransform">
    {{ component }}
  </div>
</template>

<script>
export default {
  name: "inlineStyle"
};
</script>

<script setup>
const props = defineProps({
  component: Object,
});
console.log(props);
</script>

<style lang="less" scoped>

</style>