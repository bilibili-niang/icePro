<template>
  <div class="ice-column">
    <ice-link href="/">
      <div class="svg">
        <img src="@/assets/png/logo.png" class="round" alt="">
      </div>
    </ice-link>
    <ice-link href="https://github.com/bilibili-niang/icePro" target="_blank">github地址</ice-link>
  </div>
  <ice-menu :list="items" :router="nowPath" nofold></ice-menu>
</template>

<script setup>
import IceLink from '@/components/text/ice-link.vue'
import IceMenu from '@/components/menu/ice-menu.vue'
import { useRoute } from 'vue-router'
import { ref, watch } from 'vue'

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
      },
      {
        text: 'tag',
        href: '/doc/tag'
      }
    ]
  },
  {
    text: '反馈',
    children: [
      {
        text: 'message 消息弹窗',
        href: '/doc/message'
      },
      {
        text: 'drawer 抽屉',
        href: '/doc/drawer'
      },

    ]
  },
  {
    text: '布局容器',
    children: [
      {
        text: '基础',
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
const route = useRoute()
let nowPath = ref('')
nowPath.value = route.path
watch(() => route.path,
    (newVal) => {
      nowPath.value = newVal
    })
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

.svg {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  margin: 2rem;

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
}

.cls-1, .cls-2 {
  font-size: 700px;
}

.cls-1 {
  fill: #767575;
}

.cls-2 {
  fill: #fff;
}
</style>
