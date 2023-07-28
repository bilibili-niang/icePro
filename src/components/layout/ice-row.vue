<template>
  <div class='ice-row'>
    <div class="left">
      <slot name="left"/>
    </div>
    <div class="right">
      <slot name="right"/>
    </div>
  </div>
</template>

<script setup>

</script>
<style lang='less' scoped>
.ice-row {
  display: flex;
  flex-direction: row;
}
</style>
