<template>
  <Teleport to="body">
    <div class="ice-drawer" :class="[
    direction?direction:'left',
    modelValue?'fadeIn':'fadeOut'
  ]"
         :style="styleObj"
    >
      modelValue:{{ modelValue }}
      <br>
      direction:{{ direction }}

      <div class="header ice-row">
        <ice-button @click="close">close</ice-button>
      </div>
      <slot></slot>
    </div>
  </Teleport>
</template>
<script setup>
import { computed, defineEmits, ref, watch , defineProps} from 'vue'

const emits = defineEmits(['update:modelValue'])
const props = defineProps({
  // 如果不定义绑定的值的名称，默认为modelValue
  modelValue: Boolean,
  // 指定值的名称为value
  value: String,
  width: {
    type: String,
    default: '10rem'
  },
  direction: {
    type: String,
    default: 'left'
  },
  percent: {
    type: String,
    default: '20%'
  }
})
const close = () => {
  emits('update:modelValue', false)
}

const styleObj = computed(() => {
  if (props.direction === 'left' || props.direction === 'right') {
    return {
      width: props.percent,
    }
  } else {
    return {
      height: props.percent,
    }
  }
})

const body = ref(document.querySelector('body'))
watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    body.value.classList.value += ' showDrawer'
  } else {
    body.value.classList.value = body.value.classList.value.replaceAll(' showDrawer', '')
  }
})
</script>
<script>
export default {
  name: "ice-drawer"
}
</script>

<style scoped lang="less">
@import '../../../assets/variables.less';
@import "../../../assets/animate.less";

.ice-drawer {
  position: fixed;
  background-color: @themeColor-bleak;
  transition: all @time-l ease;
}

// direction
.left {
  height: 100%;
  left: 0;
  top: 0;
}

.right {
  height: 100%;
  right: 0;
  top: 0;
}

.top {
  width: 100%;
  top: 0;
  left: 0;
}

.bottom {
  width: 100%;
  bottom: 0;
  left: 0;
}

.fadeIn {
  left: 0%;
}

.fadeOut {
  left: -100%;
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

</style>
