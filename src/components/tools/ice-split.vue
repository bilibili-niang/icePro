<template>
  <div :class="[
      type,
  dashed?'dashed':'',
 'customColor'
  ]"
       :style="{
  '--color':findColor(color).color,
  width:width
  }"
       class='split'>
    <div :class="[
        position
    ]"
         class="text"
    >
      <slot>{{ text }}</slot>
    </div>
  </div>

</template>

<script setup>
import { findColor } from '../../utils'
import { onMounted, useSlots } from 'vue'

const props = defineProps({
  type: {
    type: String,
    default: 'landscape'
  },
  dashed: {
    type: Boolean,
    default: false
  },
  color: {
    type: String,
    default: ''
  },
  text: {
    type: String,
    default: ''
  },
  // 文字位置
  position: {
    type: String,
    default: 'center'
  },
  width: {
    type: String,
    default: '100%'
  }
})

const $slots = useSlots()

onMounted(() => {
  if (props.text && $slots.default) {
    console.warn('Both slot and props.text are present. Only slot content will be displayed.')
  }
})
</script>

<script>
export default {
  name: 'iceSplit'
}
</script>
<style lang='less' scoped>
@import '../../assets/variables.less';

.customColor {
  color: var(--color) !important;
  border-color: var(--color) !important;
}

.defaultColor {
  color: @btn-skyblue;
}

.split {
  border-color: @themeColor-bleak;
  margin-bottom: @m-large;
  margin-top: @m-normal;
    box-sizing: border-box;
  position: relative;

  .text {
    position: absolute;
    background: @bac;
    font-size: @fontSize-n;
    padding: @p-normal;
  }

  .center {
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 @p-normal;
  }

  .left {
    left: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-right: @p-normal;
  }

  .right {
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    padding-left: @p-normal;
  }
}

.dashed {
  border-style: dashed !important;
  border-bottom: @themeColor 1px solid;
}

.landscape {
  width: 100%;
  box-sizing: border-box;
  border-bottom: @themeColor 1px solid;
}

.vertical {
  width: 0;
  height: 100%;
  min-height: 3rem;
  border-right: @themeColor 1px solid;
  margin-right: @m-large;
  margin-bottom: @m-normal;
}
</style>
