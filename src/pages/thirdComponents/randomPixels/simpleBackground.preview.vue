<preview>SimpleBackground 更多样式的背景</preview>
<template>
  <ice-text>
    背景挺多
  </ice-text>

  <container>
    <div class="exampleContainer">
      <SimpleBackground :primaryColor="primaryColor" :secondaryColor="secondaryColor" allowClick />
    </div>
  </container>

</template>
<script setup>
import { ref } from 'vue'

const primaryColor = ref('#ffedcb')
const secondaryColor = ref('#ffc145')

</script>
<style lang="less">
.exampleContainer {
  display: flex;
  height: 500px;
  width: 100%;
}
</style>
