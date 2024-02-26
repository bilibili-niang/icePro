<template>
  <div class="ice-column docLeft">
    <ice-link href="/" title="回到首页">
      <ice-avatar src="../src/assets/png/logo.png"></ice-avatar>
    </ice-link>
    <ice-link href="https://github.com/bilibili-niang/icePro" target="_blank">github地址</ice-link>
  </div>
  <ul class="list-ul listContainer">
    <li v-for="item in items" :key="item.text">
      <!--有子菜单-->
      <div v-if="item.children" class="ice-menu-child">
        <ice-title noselect>
          {{ item.text }}
        </ice-title>
        <ul class='list-children-ul'>
          <li v-for="(it, itIndex) in item.children" :key="itIndex">
            <ice-button v-if="it.href" :border="false" :href="it.href"
                        :type=" nowPath===it.href ?'danger':'primary'" @click="goHref(it.href)">
              {{ it.text }}
            </ice-button>
            <ice-text v-else noselect>{{ it.text }}</ice-text>
          </li>
        </ul>
      </div>
      <!--无子菜单-->
      <div v-else>
        {{ item.text }}
      </div>
    </li>
  </ul>

</template>

<script setup>
import {useRoute} from "vue-router";
import {ref, watch} from "vue";
import {useRouter} from "vue-router";

const items = [
  {
    text: "基础组件",
    children: [
      {
        text: "button 按钮",
        href: "/doc/button"
      },
      {
        text: "colors 颜色",
        href: "/doc/button/colors"
      },
      {
        text: "tools 工具",
        href: "/doc/tools"
      },
      {
        text: "split 分割线",
        href: "/doc/split"
      },
      {
        text: "card 卡片",
        href: "/doc/card"
      },
      {
        text: "text 文字",
        href: "/doc/text"
      },
      {
        text: "tag 标记",
        href: "/doc/tag"
      },
      {
        text: "link 链接",
        href: "/doc/link"
      },
      {
        text: "header 标题",
        href: "/doc/header"
      }
    ]
  },
  {
    text: "布局容器",
    children: [
      {
        text: "基础",
        href: "/doc/container"
      },
      {
        text: "收缩栏",
        href: "/doc/shrinkBar"
      },
      {
        text: "图片预览",
        href: "/doc/imgPreview"
      }
    ]
  },
  {
    text: "反馈",
    children: [
      {
        text: "message 消息弹窗",
        href: "/doc/message"
      },
      {
        text: "drawer 抽屉",
        href: "/doc/drawer"
      },

    ]
  },
  {
    text: "头像",
    children: [
      {
        text: "avatar",
        href: "/doc/avatar"
      }
    ]
  },
  {
    text: "菜单容器",
    children: [
      {
        text: "导航菜单",
        href: "/doc/menu"
      }
    ]
  },
  {
    text: "输入组件",
    children: [
      {
        text: "input 输入框",
        href: "/doc/input"
      },
      {
        text: "textarea 输入区域",
        href: "/doc/textarea"
      }
    ]
  },
  {
    text: "选择器",
    children: [
      {
        text: "selector 选择器",
        href: "/doc/selector"
      }
    ]
  },
  {
    text: "数据展示",
    children: [
      {
        text: "pagination 分页",
        href: "/doc/pagination"
      }
    ]
  }
];


const routers = useRouter();
/**
 * 路由跳转
 */
const goHref = (href) => {
  routers.push(href);
};

const route = useRoute();
let nowPath = ref("");
nowPath.value = route.path;
watch(() => route.path,
    (newVal) => {
      nowPath.value = newVal;
    });
</script>

<script>
export default {
  name: "docLeft"
};
</script>

<style lang="less" scoped>
@import "@/assets/variables.less";

.active{
  color: @themeColor;
  border-bottom: @themeColor 1px solid;
}

.list-item-child{
  padding-left: 1rem;
}

.listContainer{
  height: fit-content;
}
</style>
