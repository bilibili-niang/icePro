<template>
  <div class="ice-row">
    <ice-link href="/">
      <img src="@/assets/png/icon.jpg" class="image-s round p-normal" alt="">
    </ice-link>
  </div>
  <ice-menu :list="items" :router="router" nofold></ice-menu>
</template>

<script setup>
import IceLink from '@/components/text/ice-link.vue'
import IceMenu from '@/components/menu/ice-menu.vue'
import { useRoute } from 'vue-router'
import { ref } from 'vue'

const items = [
  {
    text: '基础组件',
    children: [
      {
        text: 'button 按钮',
        href: '/doc/button'
      },
      {
        text: 'colors 颜色',
        href: '/doc/button/colors'
      },
      {
        text: 'tools 工具',
        href: '/doc/tools'
      },
      {
        text: 'card 卡片',
        href: '/doc/card'
      },
      {
        text: 'text 文字',
        href: '/doc/text'
      }
    ]
  },
  {
    text: '反馈',
    children: [{
      text: 'message 消息弹窗',
      href: '/doc/message'
    }]
  },
  {
    text:'布局容器',
    children: [
      {
        text:'基础',
        href: '/doc/container'
      }
    ]
  },
  {
    text: '菜单容器',
    children: [
      {
        text: '导航菜单',
        href: '/doc/menu'
      }
    ]
  },
  {
    text: '输入组件',
    children: [
      {
        text: 'input 输入框',
        href: '/doc/input'
      }
    ]
  }
]
let router = ref(useRoute().path)
</script>

<script>
export default {
  name: "docLeft"
}
</script>

<style scoped lang="less">
@import "@/assets/variables.less";

.active {
  color: @themeColor;
  border-bottom: @themeColor 1px solid;
}

.list-item-child {
  padding-left: 1rem;
}
</style>
