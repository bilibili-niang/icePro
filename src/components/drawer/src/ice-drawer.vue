<template>
  <Teleport to="body">
    <Transition :name="transitionName">
      <div v-if="modelValue" class="ice-drawer-mask" @click="handleMaskClick"></div>
    </Transition>
    <Transition :name="transitionName">
      <div v-if="modelValue" class="ice-drawer" :class="[direction]" :style="drawerStyle">
        <div class="ice-drawer-content" :style="contentStyle">
          <div class="ice-drawer-header" v-if="$slots.header">
            <slot name="header"></slot>
          </div>
          <div class="ice-drawer-body">
            <slot></slot>
          </div>
          <div class="ice-drawer-footer" v-if="$slots.footer">
            <slot name="footer"></slot>
          </div>
        </div>
        <div class="other-content" @click="handleMaskClick">
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, ref, watch } from 'vue'

defineOptions({
  name: 'ice-drawer'
})

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  modelValue: Boolean,
  width: {
    type: [String, Number],
    default: '30%'
  },
  height: {
    type: [String, Number],
    default: '30%'
  },
  direction: {
    type: String,
    default: 'right',
    validator: (value) => {
      return ['left', 'right', 'top', 'bottom'].includes(value)
    }
  },
  maskClosable: {
    type: Boolean,
    default: true
  }
})

const handleMaskClick = () => {
  if (props.maskClosable) {
    close()
  }
}

const close = () => {
  emits('update:modelValue', false)
}

const isHorizontal = computed(() => {
  return ['left', 'right'].includes(props.direction)
})

const transitionName = computed(() => {
  return `drawer-${props.direction}`
})

const contentStyle = computed(() => {
  const style = {}
  if (isHorizontal.value) {
    style.width = props.width
  } else {
    style.width = '100%'
  }
  return style
})

const drawerStyle = computed(() => {
  const style = {
    position: 'fixed',
    zIndex: 1001
  }

  if (isHorizontal.value) {
    style.height = '100%'
    style[props.direction] = 0
  } else {
    style.width = '100%'
    style.height = props.height || props.width
    style[props.direction] = 0
  }

  return style
})

// 处理body的overflow
const body = document.body
watch(
  () => props.modelValue,
  (val) => {
    if (val) {
      body.style.overflow = 'hidden'
    } else {
      body.style.overflow = ''
    }
  }
)
</script>

<style lang="less" scoped>
@import '../../../assets/variables.less';

.ice-drawer-mask {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 1000;
}

.ice-drawer {
  position: fixed;
  z-index: 1001;
  background: rgab(0, 0, 0, 0);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
  display: flex;
  width: 100%;

  &.left {
    top: 0;
    left: 0;
    height: 100%;
    flex-direction: row;
  }

  &.right {
    top: 0;
    right: 0;
    height: 100%;
    flex-direction: row;
  }

  &.top {
    top: 0;
    left: 0;
    width: 100%;
    flex-direction: column;
  }

  &.bottom {
    bottom: 0;
    left: 0;
    width: 100%;
    flex-direction: column;
  }

  .ice-drawer-content {
    height: 100%;
    display: flex;
    flex-direction: column;
    background: @bac;
    flex-shrink: 0; // 防止内容被压缩
  }

  .other-content {
    display: flex;
    flex: 1;
  }

  .ice-drawer-header {
    padding: 16px;
    border-bottom: 1px solid #e8e8e8;
  }

  .ice-drawer-body {
    flex: 1;
    padding: 16px;
    overflow-y: auto;
  }

  .ice-drawer-footer {
    padding: 16px;
    border-top: 1px solid #e8e8e8;
  }
}

// 动画
.drawer-left-enter-active,
.drawer-left-leave-active,
.drawer-right-enter-active,
.drawer-right-leave-active,
.drawer-top-enter-active,
.drawer-top-leave-active,
.drawer-bottom-enter-active,
.drawer-bottom-leave-active {
  transition: transform 0.3s ease;
}

.drawer-left-enter-from,
.drawer-left-leave-to {
  transform: translateX(-100%);
}

.drawer-right-enter-from,
.drawer-right-leave-to {
  transform: translateX(100%);
}

.drawer-top-enter-from,
.drawer-top-leave-to {
  transform: translateY(-100%);
}

.drawer-bottom-enter-from,
.drawer-bottom-leave-to {
  transform: translateY(100%);
}

// 遮罩层动画
.drawer-left-enter-active,
.drawer-right-enter-active,
.drawer-top-enter-active,
.drawer-bottom-enter-active {
  .ice-drawer-mask {
    animation: maskFadeIn 0.3s;
  }
}

.drawer-left-leave-active,
.drawer-right-leave-active,
.drawer-top-leave-active,
.drawer-bottom-leave-active {
  .ice-drawer-mask {
    animation: maskFadeOut 0.3s;
  }
}

@keyframes maskFadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

@keyframes maskFadeOut {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
</style>
