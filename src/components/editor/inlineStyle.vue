<template>
  <div class="inlineStyleTransform">
    {{ component }}
  </div>
</template>

<script>
export default {
  name: "inlineStyle"
}
</script>

<script setup>
defineProps({
  component: Object
})
</script>
