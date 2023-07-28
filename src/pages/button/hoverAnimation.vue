<template>
  <div class="container">
    <h4>hover动画样式的按钮</h4>
    <ice-text>
      使用hover控制hover的样式
    </ice-text>
    <div class="ice-row">
      <div class="ice-column">
        <div class="btns">
          <ice-button hover>primary</ice-button>
        </div>
        <split></split>
        <ice-text>
          primary
        </ice-text>
      </div>

    </div>

  </div>
</template>

<script setup>
import IceButton from '@/components/button/normal/iceButton.vue'
import IceText from '@/components/text/ice-text.vue'
import Split from '@/components/tools/split.vue'</script>

<style scoped>

</style>
