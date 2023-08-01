<template>
  <div class="ice-row">
    <ice-link href="/">
      <img src="@/assets/png/icon.jpg" class="image-s round p-normal" alt="">
    </ice-link>
  </div>
  <ul class="list-column">
    <template v-for="(item,index) in items" :key="index">
      <li class="ice-column radio-none" v-if="!item.href">
        <ice-title size="l" noselect>
          {{ item.text }}
        </ice-title>
        <template v-if="item.children">
          <ul class="list-column">
            <li class="list-item-child p-normal radio-none" v-for="(it,itIndex) in item.children" :key="itIndex">
              <ice-link :href="it.href" class="hover-border-bottom p-bottom-l radio-none"
                        :class="{active:router.path==it.href}">{{
                  it.text
                }}
              </ice-link>
            </li>
          </ul>
        </template>
      </li>

      <li class="ice-column radio-none" v-else>
        <ice-link :href="item.href" class="hover-border-bottom p-bottom-l radio-none"
                  :class="{active:router.path==item.href}">{{
            item.text
          }}
        </ice-link>
        <template v-if="item.children">
          <ul class="list-column">
            <li class="list-item-child p-normal radio-none" v-for="(it,itIndex) in item.children" :key="itIndex">
              <ice-link :href="it.href" class="hover-border-bottom p-bottom-l radio-none"
                        :class="{active:router.path==it.href}">{{
                  it.text
                }}
              </ice-link>
            </li>
          </ul>
        </template>
      </li>
    </template>
  </ul>
</template>

<script setup>
import IceLink from '@/components/text/ice-link.vue'
import { useRoute } from 'vue-router'

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
    },]
  },
]
const router = useRoute()
</script>

<script>

export default {
  name: "docLeft"
}
</script>

<style scoped lang="less">
@import "@/assets/variables.less";

ul {
  margin-right: 1.5rem;

  > li {
    margin-top: .1rem;
    margin-bottom: .3rem;
  }
}

.active {
  color: @themeColor;
  border-bottom: @themeColor 1px solid;
}

.list-item-child {
  padding-left: 1rem;
}
</style>
