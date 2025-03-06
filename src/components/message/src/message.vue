<template>
  <transition :duration="300" enter-active-class="animate__zoomIn" leave-active-class="animate__zoomOut"
              @before-leave="onClose" @after-leave="$emit('destroy')">
    <div v-if="visible" :class="[
        color?'message-colors':type?type:''
    ]"
         :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
         class="ice-message-lim border-normal"
    >
      <ice-text :color="color?color:type?type:''">
        {{ message }}
      </ice-text>
      <ice-button v-if="showClose" :color="color" :type="type" @click="close()">close</ice-button>
    </div>
  </transition>
</template>


<script setup>
import { onMounted, onUnmounted, ref } from 'vue'
import { findColor } from '../../../utils'
import iceText from '../../text/ice-text.vue'
import iceButton from '../../button'

const visible = ref(false)
// eslint-disable-next-line no-unused-vars
let stopTimer = undefined
const props = defineProps({
  duration: {
    type: Number,
    default: 2000
  },
  id: {
    type: String,
    default: ''
  },
  offset: {
    type: Number,
    default: 100
  },
  zIndex: {
    type: Number,
    default: 0
  },
  onClose: {
    type: Function,
    required: false
  },
  type: {
    type: String,
    default: 'info'
  },
  message: {    
    type: [String, Object],
    default: ''
  },
  showClose: {
    type: Boolean,
    default: true
  },
  center: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  }
})

const emits = defineEmits(['destroy', 'close'])

function startTimer() {
  // 是否设置了延迟关闭的时间
  if (props.duration > 0) {
    stopTimer = setTimeout(() => {
      if (visible.value) {
        close()
      }
    }, props.duration)
  }
}

function keydown({ code }) {
  // 键盘按下esc触发
  if (code === 'Escape') {
    // 如果元素显示
    if (visible.value) {
      close()
    }
  } else {
    startTimer()
  }
}

// 监听键盘按下
onMounted(() => {
  startTimer()
  visible.value = true
  document.addEventListener('keydown', keydown)
})
// 销毁时取消监听
onUnmounted(() => {
  document.removeEventListener('keydown', keydown)
})

function close() {
  visible.value = false
  emits('close')
}

</script>

<script>
export default {
  name: 'iceMessage'
}
</script>
<style lang="less">
@import "../../../assets/variables.less";

.ice-message-lim {
  margin-top: @m-normal;
  right: 10px;
  color: @themeColor;
  display: flex;
  flex-direction: row;
  align-items: center;
}

.animate__zoomIn {
  animation: animate__zoomIn 300ms;
}

.info {
  border-color: @themeColor;
}

.danger {
  border-color: @dangerColor;
}

.colors {
  border-color: red !important;
}

@keyframes animate__zoomIn {
  0% {
    transform: scale(0);
    opacity: 0;
  }

  50% {
    transform: scale(1.1);
    opacity: 0.5;
  }

  100% {
    transform: scale(1);
    opacity: 1;
  }
}

.animate__zoomOut {
  animation: animate__zoomOut 300ms forwards;
}

@keyframes animate__zoomOut {
  0% {
    transform: scale(1);
    opacity: 1;
  }

  50% {
    transform: scale(0.9);
    opacity: 0.5;
  }

  100% {
    transform: scale(0);
    opacity: 0;
  }
}

// message
.message-colors {
  color: var(--hover-color);
  border-color: var(--hover-color);
}
</style>
