<preview>BackContainer 背景容器</preview>
<template>
  <ice-text>
    一个简单的滤镜
  </ice-text>
  <container>
    <div class="exampleContainer">
      <BackContainer>
        <RgbDotLoading />
      </BackContainer>
    </div>
  </container>
</template>

<script setup lang="ts">
import RandomPixels from '../../../thirdConponments/randomPixels'
</script>

<style lang="less">
.exampleContainer {
  display: flex;
  height: 500px;
  width: 100%;
}
</style>
