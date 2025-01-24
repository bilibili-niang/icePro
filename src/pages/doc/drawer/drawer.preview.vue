<preview>
抽屉-drawer
</preview>
<template>
  <container>
    <div class="ice-column">
      <ice-button @click="drawer = true">展开抽屉</ice-button>
      <ice-text>
        抽屉状态: {{ drawer ? '打开' : '关闭' }}
      </ice-text>

      <iceSplit />

      <ice-text>
        方向控制：
      </ice-text>
      <ice-selector v-model="direction" :list="selectionList"></ice-selector>

      <iceSplit />

      <ice-text>
        尺寸控制：
      </ice-text>
      <ice-row class="m-bottom-n">
        <ice-input v-model="size" placeholder="输入宽度或高度，如：400px 或 50%"></ice-input>
      </ice-row>
      <ice-text class="tip">
        提示：左右方向时控制宽度，上下方向时控制高度
      </ice-text>

      <ice-drawer
        v-model:model-value="drawer"
        :direction="direction"
        :width="drawerSize">
        <template #header>
          <ice-text>抽屉标题</ice-text>
        </template>
        <div class="drawer-content">
          <ice-text>这是抽屉的内容区域</ice-text>
          <ice-text>当前方向：{{ direction }}</ice-text>
          <ice-text>当前尺寸：{{ drawerSize }}</ice-text>
        </div>
        <template #footer>
          <ice-button @click="drawer = false">关闭抽屉</ice-button>
        </template>
      </ice-drawer>
    </div>
  </container>
</template>

<script setup>
import { computed, ref, watch } from 'vue'
import iceDrawer from '../../../components/drawer'

const direction = ref('right')
const drawer = ref(false)
const size = ref('30%')

const isHorizontal = computed(() => {
  return ['left', 'right'].includes(direction.value)
})

const drawerSize = computed(() => {
  return size.value
})

// 监听size的变化，自动格式化尺寸值
watch(size, (newValue) => {
  if (!newValue) {
    size.value = '30%'
    return
  }

  // 如果已经是正确格式就不处理
  if (/^\d+(%|px)$/.test(newValue)) {
    return
  }

  // 如果只输入了数字，自动添加px单位
  const num = parseInt(newValue)
  if (!isNaN(num)) {
    size.value = `${num}px`
  }
})

const selectionList = [
  {
    label: '从右侧展开',
    value: 'right'
  },
  {
    label: '从左侧展开',
    value: 'left'
  },
  {
    label: '从顶部展开',
    value: 'top'
  },
  {
    label: '从底部展开',
    value: 'bottom'
  }
]
</script>

<style lang="less" scoped>
.tip {
  font-size: 0.9em;
  color: #666;
}

.drawer-content {
  padding: 20px;
}

.m-left-s {
  margin-left: 8px;
}
</style>
