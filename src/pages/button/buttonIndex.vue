<template>
  <ice-title>常规按钮</ice-title>
  <div class='container'>
    <div class="ice-cloumn">
      <h4>按钮组</h4>
      <ice-text>
        使用
        <iceTag>type</iceTag>
        来控制基础样式
      </ice-text>
      <div class="ice-row">

        <div class="ice-column">
          <div class="btns">
            <ice-button>primary</ice-button>
          </div>
          <split></split>
          <ice-text>
            主要按钮
          </ice-text>
        </div>

        <div class="item-column">
          <div class="btns">
            <ice-button type="danger">danger</ice-button>
          </div>
          <split></split>
          <ice-text>
            危险/警告
          </ice-text>
        </div>

        <div class="item-column">
          <div class="btns">
            <ice-button type="info">info</ice-button>
          </div>
          <split></split>
          <ice-text>
            info
          </ice-text>
        </div>

        <div class="item-column">
          <div class="btns">
            <ice-button type="success">success</ice-button>
          </div>
          <split></split>
          <ice-text>
            success
          </ice-text>
        </div>

      </div>
      <div class="ice-column">
        <ice-text>
          code预览:
        </ice-text>
        <div class="ice-row">
          <template v-for="(item, index) in code">
            <div class="ice-column">
              <code>
                {{ item }}
              </code>
            </div>
          </template>
        </div>
      </div>
      <split class="dashed"></split>
      <hover-animation></hover-animation>
    </div>
  </div>
</template>

<script setup>
import IceButton from '@/components/button/normal/iceButton.vue'
import Split from '@/components/tools/split.vue'
import IceText from '@/components/text/ice-text.vue'
import IceTag from '@/components/tools/ice-tag.vue'
import { ref } from 'vue'
import HoverAnimation from '@/pages/button/hoverAnimation.vue'

let code = ref([
  `<div class="ice-column">
          <div class="btns">
            <ice-button>primary</ice-button>
          </div>
          <split></split>
          <ice-text>
            主要按钮
          </ice-text>
        </div>`,
  `<div class="item-column">
          <div class="btns">
            <ice-button type="danger">danger</ice-button>
          </div>
          <split></split>
          <ice-text>
            危险/警告
          </ice-text>
        </div>`,
  `<div class="item-column">
          <div class="btns">
            <ice-button type="info">info</ice-button>
          </div>
          <split></split>
          <ice-text>
            info
          </ice-text>
        </div>`,
  `<div class="item-column">
          <div class="btns">
            <ice-button type="success">success</ice-button>
          </div>
          <split></split>
          <ice-text>
            success
          </ice-text>
        </div>`
])

const getCode = () => {
  setTimeout(function () {
    const targetHtml = document.querySelector('.code')
    console.log(targetHtml)
    code.value = targetHtml.innerHTML
  }, 100)
}

</script>
<style lang='less' scoped></style>
