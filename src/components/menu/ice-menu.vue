<template>
  <div class="ice-menu" :class="[
    border?'ice-menu-border':'',
    color?'colors':'',
  ]"
       :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }">
    <ul class="list-ul">
      <li v-for="item in menuList" :key="item.text" :style="{ color: color }">
        <!--有子菜单-->
        <div v-if="item.children" class="ice-menu-child" :class="[
            item.isOpen?'showLi':'hideLi',
            nofold?'showLi':'hideLi'
        ]">
          <ice-title noselect @click="toggleSubMenu(item)" :color="color">
            {{ item.text }}
          </ice-title>
          <ul class='list-children-ul'>
            <li v-for="(it, itIndex) in item.children" :key="itIndex">
              <ice-link :href="it.href" :color="color" v-if="it.href" :class="{activeLink:router===it.href}">
                {{ it.text }}
              </ice-link>
              <ice-text v-else noselect :color="color">{{ it.text }}</ice-text>
            </li>
          </ul>
        </div>
        <!--无子菜单-->
        <div v-else>
          {{ item.text }}
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { defineProps, ref } from 'vue'
import IceTitle from '@/components/text/ice-title.vue'
import IceLink from '@/components/text/ice-link.vue'
import { findColor } from '@/hooks/tools.js'

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  color: {
    type: String,
    default: 'defaultColor',
  },
  // 当前比对的字符串
  router: {
    type: String,
    required: ''
  },
  // 菜单是否显示border
  border: {
    type: Boolean,
    default: false
  },
  // 是否折叠,默认折叠面板
  nofold: {
    type: Boolean,
    default: false
  }
})

const menuList = ref(props.list)

const toggleSubMenu = (item) => {
  if (props.nofold) {
    return
  }
  item.isOpen = !item.isOpen
}
</script>
<script>
export default {
  name: 'ice-menu'
}
</script>
<style lang="less" scoped>
@import "../../assets/variables.less";

.ice-menu-border {
  border: @themeColor 1px solid;
}

.ice-menu {
  border-radius: @radio-n;
  padding: @p-normal;
  display: flex;
  flex-direction: column;
  margin: @m-small;

  .ice-menu-child {
    display: flex;
    flex-direction: column;
    transition: .5S;

    ul {
      transition: .5S;

      li {
        transition: .5S;
        height: 0rem;
        overflow-y: hidden;
        opacity: 0;
        padding: 0;
        display: flex;
        flex-direction: row;
        margin-top: 0rem;

        &:before {
          content: '';
          display: flex;
          width: 1.5rem;
        }
      }
    }
  }

  .showLi {
    ul {
      li {
        height: 1.5rem !important;
        overflow-y: hidden;
        opacity: 1;
        margin-top: @m-normal;
      }
    }
  }
}

.defaultColor {
  color: @themeColor;
  border-color: @themeColor !important;
}

.colors {
  border: var(--color) 1px solid;
  color: var(--color);

  &:hover {
    color: var(--hover-color);
    border-color: var(--hover-color);
  }
}
</style>
