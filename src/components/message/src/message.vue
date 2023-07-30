<template>
  <transition
      :duration="300"
      leave-active-class="animate__zoomOut"
      enter-active-class="animate__zoomIn"
      @before-leave="onClose"
      @after-leave="$emit('destroy')"
  >
    <div class="ice-message-lim border-normal"
         v-if="visible"
         :style="customStyle"
    >
      <ice-text>
        {{ message }}
      </ice-text>
      <ice-button v-if="showClose" @click="close()">close</ice-button>
    </div>
  </transition>
  props:{{ props }}
  <br>
  offset:{{ offset }}
  <br>
  emits:{{ emits }}
  <br>
  提交销毁:
  <ice-button @click='destroy'>
    destroy
  </ice-button>
</template>


<script setup>
import { computed, onMounted, onUnmounted, ref } from 'vue'
import IceButton from '@/components/button/normal/iceButton.vue'
import IceText from '@/components/text/ice-text.vue'

const visible = ref(false)
let stopTimer = undefined
const props = defineProps({
  duration: {
    type: Number,
    default: 2000,
    // default: 1000000,
  },
  id: {
    type: String,
    default: "",
  },
  offset: {
    type: Number,
    default: 100,
  },
  zIndex: {
    type: Number,
    default: 0,
  },
  onClose: {
    type: Function,
    required: false,
  },
  type: {
    type: String,
    values: 'messageTypes',
    default: "info",
  },
  message: {
    type: [String, Object],
    default: "",
  },
  showClose: {
    type: Boolean,
    default: true,
  },
  center: {
    type: Boolean,
    default: false,
  }
})

const emits = defineEmits(["destroy", "close"])

function startTimer () {
  // 是否设置了延迟关闭的时间
  if (props.duration > 0) {
    stopTimer = setTimeout(() => {
      if (visible.value) {
        close()
      }
    }, props.duration)
  }
}

function clearTimer () {
  clearTimeout(stopTimer)
  stopTimer = undefined
}

function keydown ({ code }) {
  // 键盘按下esc触发
  if (code === "Escape") {
    // 如果元素显示
    if (visible.value) {
      close()
    }
  } else {
    startTimer() // resume timer
  }
}

// 监听键盘按下
onMounted(() => {
  startTimer()
  visible.value = true
  document.addEventListener("keydown", keydown)
})
// 销毁时取消监听
onUnmounted(() => {
  document.removeEventListener("keydown", keydown)
})

function close () {
  visible.value = false
  emits('close')
}

const customStyle = computed(() => ( {
  top: `${ props.offset }px`,
  zIndex: props.zIndex,
} ))

const destroy = () => {
  emits('destroy')
}

</script>

<script>
export default {
  name: "iceMessage",
}
</script>
<style lang="less">
@import "../../../assets/variables.less";

.ice-message-lim {
  position: fixed;
  right: 10px;
  color: @themeColor;
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
