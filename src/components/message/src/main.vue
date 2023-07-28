<template>
  <teleport>
    <div class="ice-message ice-column">
      msg:{{ msg }}
    </div>
  </teleport>
</template>

<script setup>
const props = defineProps({
  msg: {
    type: String,
    required: true
  },

})


</script>
<script>
export default {
  name: "ice-message"
}
</script>

<style scoped>

</style>
