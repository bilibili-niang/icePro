<preview>
menu-border
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      支持
      <ice-tag>color</ice-tag>
      的传入,还有bug,你不要在一个组件里用多个color变量
    </ice-text>
  </div>
  <show>
    <ice-menu :list="items" color="muguahuang"></ice-menu>
    <ice-menu :list="items" color="jiguanghong"></ice-menu>
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
        text: 'button 按钮'
      },
      {
        text: 'colors 颜色'
      },
      {
        text: 'tools 工具'
      },
      {
        text: 'card 卡片'
      },
      {
        text: 'text 文字'
      }
    ]
  },
  {
    text: '反馈',
    children: [
      {
        text: 'message 消息弹窗'
      }
    ]
  },
  {
    text: '菜单容器',
    children: [
      {
        text: '导航菜单'
      }
    ]
  }
]
</script>
