<template>
  <div class="ice-column docLeft">
    <ice-link href="/" title="回到首页">
      <ice-avatar :src="logo"></ice-avatar>
    </ice-link>
    <ice-link href="https://github.com/bilibili-niang/icePro" target="_blank">github地址</ice-link>
  </div>
  <ul class="list-ul listContainer">
    <li v-for="item in items" :key="item.text">
      <div v-if="item.children" class="ice-menu-child">
        <ice-title noselect>
          {{ item.text }}
        </ice-title>
        <ul class='list-children-ul'>
          <li v-for="(it, itIndex) in item.children" :key="itIndex">
            <ice-button v-if="it.href" :border="false" :href="it.href"
                        :type=" nowPath===it.href ?'danger activeUrl':'primary'" @click="goHref(it.href)">
              {{ it.text }}
            </ice-button>
            <ice-text v-else noselect>{{ it.text }}</ice-text>
          </li>
        </ul>
      </div>
      <div v-else>
        {{ item.text }}
      </div>
    </li>
  </ul>

</template>

<script setup>
import { useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'
import logo from '@/assets/png/logo.png'

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
        text: 'split 分割线',
        href: '/doc/split'
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
        text: 'tag 标记',
        href: '/doc/tag'
      },
      {
        text: 'link 链接',
        href: '/doc/link'
      },
      {
        text: 'header 标题',
        href: '/doc/header'
      },
      {
        text: 'colorSelector 颜色选择器',
        href: '/doc/colorSelector'
      }
    ]
  },
  {
    text: '布局容器',
    children: [
      {
        text: '基础',
        href: '/doc/container'
      },
      {
        text: '图片预览',
        href: '/doc/imgPreview'
      },
      {
        text: 'drawer 抽屉',
        href: '/doc/drawer'
      },
      {
        text: 'tabs 标签页',
        href: '/doc/tabs'
      },
      {
        text: 'dragAndDrop 拖拽',
        href: '/doc/dragAndDrop'
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
        text: 'messageBox 消息确认',
        href: '/doc/iceMessageBox'
      }

    ]
  },
  {
    text: '头像',
    children: [
      {
        text: 'avatar',
        href: '/doc/avatar'
      }
    ]
  },
  {
    text: '菜单容器',
    children: [
      {
        text: '导航菜单',
        href: '/doc/menu'
      },
      {
        text: '收缩栏',
        href: '/doc/shrinkBar'
      }
    ]
  },
  {
    text: '输入组件',
    children: [
      {
        text: 'input 输入框',
        href: '/doc/input'
      },
      {
        text: 'textarea 输入区域',
        href: '/doc/textarea'
      }
    ]
  },
  {
    text: '选择器',
    children: [
      {
        text: 'selector 选择器',
        href: '/doc/selector'
      }
    ]
  },
  {
    text: '数据展示',
    children: [
      {
        text: 'pagination 分页',
        href: '/doc/pagination'
      }
    ]
  },
  {
    text: '扩展',
    children: [
      {
        text: 'inlineStyle 行内样式',
        href: '/doc/inlineStyle'
      }
    ]
  }
]


const routers = useRouter()
/**
 * 路由跳转
 */
const goHref = (href) => {
  routers.push(href)
}

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
  name: 'docLeft'
}
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";
.active {
  color: @themeColor;
  border-bottom: @themeColor 1px solid;
}
.list-item-child {
  padding-left: 1rem;
}
.listContainer {
  height: fit-content;
}
.activeUrl {
  position: relative;
  &::before {
    position: absolute;
    content: '>>>';
    left: -30px;
    top: 0;
    color: @themeColor;
  }
}
</style>
