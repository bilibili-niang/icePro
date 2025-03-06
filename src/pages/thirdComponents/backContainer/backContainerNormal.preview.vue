<preview>BackContainer 背景容器</preview>
<template>
  <ice-text>
    一个简单的滤镜
  </ice-text>
  <container>
    <div class="exampleContainer">
      <BackContainer>
        <WaveDot level="20"/>
      </BackContainer>
    </div>
  </container>
</template>

<script setup lang="ts">
import WaveDot from '../../../thirdConponments/waveDot'

</script>

<style lang="less">
.exampleContainer {
  border: var(--color-theme-900) 1px solid;
  display: flex;
  height: 500px;
  width: 100%;
}
</style>
