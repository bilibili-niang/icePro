<template>
  <!--变量-->
  <div class="ice-card" :class="[size,color? color: '']"
       v-if="header"
       :style="{'--hover-color': themeColor.hoverColor,'--color': themeColor.color}">
    <div class="slot" :class="type">
      <div class="header ice-row flex-sb">
        <slot name="header"></slot>
      </div>
      <div class="body" v-if="body">
        <split></split>
        <slot name="body"></slot>
      </div>
      <div class="bottom" v-if="bottom">
        <split></split>
        <div class="ice-column content">
          <ice-button @click="showBottom=!showBottom">show</ice-button>
          <div class="bottomLim show" ref="bottomContent">
            <slot name="bottom"></slot>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted, reactive, ref, useSlots, watch } from 'vue'
import { findColor } from '@/hooks/tools.js'

const { header, body, bottom } = useSlots()
let showBottom = ref(false)

const bottomContent = ref('')
let bottomHeight = ref('')

watch(showBottom,
    (newVal) => {
      if (!newVal) {
        bottomContent.value.style.height = 0
        bottomContent.value.style.opacity = 0
      } else {
        bottomContent.value.style.height = bottomHeight.value * 1.3 + 'px'
        bottomContent.value.style.opacity = 1
      }
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
  }
})

let themeColor = reactive({})
if (props.color) {
  const colorObj = findColor(props.color)
  themeColor = {
    color: `rgba(${ colorObj.RGB[0] },${ colorObj.RGB[1] },${ colorObj.RGB[2] },1)`,
    hoverColor: `rgba(${ colorObj.RGB[0] },${ colorObj.RGB[1] },${ colorObj.RGB[2] },0.5)`
  }
}

const init = () => {
  bottomHeight.value = bottomContent.value.scrollHeight
  if (showBottom.value) {
    bottomContent.value.style.height = bottomHeight.value * 1.3 + 'px'
  } else {
    bottomContent.value.style.height = 0
    bottomContent.value.style.opacity = 0
  }
}

onMounted(() => {
  if (bottom) {
    init()
  }
})

</script>
<script>
export default {
  name: "ice-card"
}
</script>

<style scoped lang="less">
@import "../../assets/variables.less";

.ice-card {
  border: @themeColor 1px solid;
  width: 100%;

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

// size
.n {
  padding: @p-normal;
  margin: @m-normal;
  border-radius: @radio-n;
}

</style>
