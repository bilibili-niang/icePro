<template>
  <!--变量-->
  <div
    v-if="header"
    :class="[size, color ? color : '', border ? 'border' : 'noborder']"
    :style="{ '--hover-color': themeColor.hoverColor, '--color': themeColor.color }"
    class="ice-card"
  >
    <div :class="type" class="slot">
      <div class="header ice-row flex-sb">
        <slot name="header"></slot>
      </div>
      <div v-if="body" class="body">
        <iceSplit dashed></iceSplit>
        <slot name="body"></slot>
      </div>
      <div v-if="bottom" class="bottom">
        <iceSplit dashed></iceSplit>
        <div class="ice-column content">
          <ice-button @click="showBottom = !showBottom">
            {{ showBottom ? buttonText[0] : buttonText[1] }}
            <div :class="[showBottom ? 'down' : 'up']" class="tag">^</div>
          </ice-button>
          <div ref="bottomContent" class="bottomLim show">
            <slot name="bottom"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, reactive, ref, useSlots, watch } from 'vue'
import { findColor } from '../../utils'

defineOptions({
  name: 'iceCard'
})

const props = defineProps({
  type: {
    type: String,
    default: 'normal'
  },
  size: {
    type: String,
    default: 'n'
  },
  color: {
    type: String,
    default: ''
  },
  border: {
    type: Boolean,
    default: true
  },
  buttonText: {
    type: Array,
    default: () => ['收起', '展开']
  },
  content: {
    type: String
  },
  layout: {
    type: Boolean,
    default: false
  }
})

const isOpen = ref(false)
function handleClick() {
  isOpen.value = !isOpen.value
}

const { header, body, bottom } = useSlots()
let showBottom = ref(false)

type StyleElement = {
  style: {
    height: string | number
    opacity: number
  }
}

const bottomContent = ref<StyleElement | null>(null)

let bottomHeight = ref('')
watch(showBottom, (newVal) => {
  if (!newVal) {
    if (bottomContent.value) {
      bottomContent.value.style.height = 0
      bottomContent.value.style.opacity = 0
    }
  } else {
    if (bottomContent.value) {
      bottomContent.value.style.height = bottomHeight.value * 1 + 'px'
      bottomContent.value.style.opacity = 1
    }
  }
})

let themeColor = reactive({})
if (props.color) {
  const colorObj = findColor(props.color)
  themeColor = {
    color: `rgba(${colorObj.RGB[0]},${colorObj.RGB[1]},${colorObj.RGB[2]},1)`,
    hoverColor: `rgba(${colorObj.RGB[0]},${colorObj.RGB[1]},${colorObj.RGB[2]},0.5)`
  }
}

const init = () => {
  if (bottomContent.value) {
    bottomHeight.value = bottomContent.value.scrollHeight
    if (showBottom.value) {
      bottomContent.value.style.height = bottomHeight.value * 1 + 'px'
    } else {
      bottomContent.value.style.height = 0
      bottomContent.value.style.opacity = 0
    }
  }
}

onMounted(() => {
  if (bottom) {
    init()
  }
})
</script>

<style lang="less" scoped>
@import '../../assets/variables.less';
@import '../../assets/common.less';

.border {
  border-style: solid;
  border-width: 1px;
}

.noborder {
  padding: 0 !important;
  margin: 0 !important;
  bottom: 0 !important;
}

.ice-card {
  box-sizing: border-box;
  border-color: @themeColor;
  width: 100%;
  //padding: @p-normal;
  margin: @m-normal;
  border-radius: @radio-n;

  .header {
    line-height: @lineHeight-n;
    color: @themeColor;
  }

  .body {
    font-size: @fontSize-n;
    line-height: @lineHeight-n;
    color: @themeColor;
    font-weight: @fontWeight-n;
  }

  .bottom {
    width: 100%;

    .content {
      width: 100%;

      .show {
        display: flex;
        height: auto;
        transition-duration: @time-n;
        overflow: hidden;
      }

      .hide {
        display: flex;
        height: 0;
        overflow-y: hidden;
      }
    }
  }
}

.tag {
  display: inline-block;
  perspective: 1000px;
  transform-style: preserve-3d;
}

// 箭头翻转
.down {
  transform: rotate3d(1, 0, 0, 180deg);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.up {
  transform: rotate3d(1, 0, 0, 0deg);
  transition: transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}

.bottomLim {
  border-radius: 0.3rem;
}
</style>
