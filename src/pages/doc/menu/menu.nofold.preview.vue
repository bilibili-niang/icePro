<preview>
menu-nofold
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      支持
      <ice-tag>nofold</ice-tag>
      的传入,是否折叠,默认折叠
    </ice-text>
  </div>
  <show>
    <ice-menu :list="items" nofold></ice-menu>
  </show>
</template>
<script setup>
import IceMenu from '@/components/menu/ice-menu.vue'
import IceTag from '@/components/tools/ice-tag.vue'

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
    children: [
      {
        text: 'message 消息弹窗',
        href: '/doc/message'
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
    text: '表单',
    children: [
      {
        text:'输入框',
        href:'doc/input'
      }
    ]
  }
]
</script>
