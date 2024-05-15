<template>
  <div class="ice-tabs">
    <ice-row>
      当前激活的tab:{{ modelValue }}
    </ice-row>

  </div>
</template>

<script>
export default {
  name: "ice-tabs"
}
</script>

<script setup>
const porps = defineProps({
  modelValue: {
    type: String,
    default: '1'
  }
})

</script>

<style scoped lang="less">

</style>