<template>
  <div class="ice-tag noselect" :class="type">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'normal'
  }
})
</script>
<script>
export default {
  name: "iceTag"
}
</script>

<style scoped lang="less">
@import '../../assets/variables.less';

.ice-tag {
  margin: @p-small @m-normal;
  border-radius: @radio-n;
  color: @themeColor;
  border-color: @themeColor;
  display: flex;
  background-color: @fonColor-dark-bleak;
  //max-width: 5rem;
  justify-content: center;
}

.normal {
  font-size: @fontSize-n;
  padding: @p-normal;
}
</style>
