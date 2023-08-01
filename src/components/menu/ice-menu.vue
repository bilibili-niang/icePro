<template>
  <div class="ice-menu" :class="[{'vertical-menu': vertical}, {'horizontal-menu': !vertical}]">
    <ul class="list-ul">
      <li v-for="item in menuList" :key="item.text" :style="{ color: color }">
        <!--有子菜单-->
        <div v-if="item.children" class="ice-menu-child" :class="[
            item.isOpen?'showLi':'hideLi'
        ]">
          <ice-title noselect @click="toggleSubMenu(item)">
            {{ item.text }}
          </ice-title>
          <ul class='list-children-ul'>
            <li v-for="(it, itIndex) in item.children" :key="itIndex">
              <ice-link :href="it.href">
                {{ it.text }}
              </ice-link>
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
import { ref } from 'vue'
import IceTitle from '@/components/text/ice-title.vue'
import IceLink from '@/components/text/ice-link.vue'

const props = defineProps({
  list: {
    type: Array,
    required: true,
  },
  vertical: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
    default: 'black',
  },
})

const menuList = ref(props.list)

const toggleSubMenu = (item) => {
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

.ice-menu {
  border: @themeColor 1px solid;
  border-radius: @radio-n;
  padding: @p-normal;
  display: flex;
  flex-direction: column;

  li {
    .ice-link {
      &:hover {
        background-color: @themeColor-bleak;
        color: @themeColorReversal;
      }
    }
  }

  .ice-menu-child {
    display: flex;
    flex-direction: column;
    transition: .5S;

    ul {
      transition: .5S;
      //height: 0px;

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

  /*.hideLi {
    ul {
      height: 0;

      li {
        height: 0;
        overflow-y: hidden;
      }
    }
  }*/

  .showLi {
    ul {
      //height: 100px !important;

      li {
        height: 1.5rem !important;
        overflow-y: hidden;
        opacity: 1;
        margin-top: @m-normal;
      }
    }
  }

  /*.list-ul {
    .list-children-ul {
      transition: .5s;
      margin-left: @m-normal;

      li {
        display: flex;
        flex-direction: row;
        margin-top: @m-normal;
        margin-left: @m-large;
        font-size: @fontSize-s;

        &:before {
          content: '';
          display: flex;
          width: 1rem;
        }
      }
    }
  }*/
}
</style>
