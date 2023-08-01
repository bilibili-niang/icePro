<template>
  <div class="colors" @click="clickCallBack">
    <div class='btn btn-time-s  text-nowrap' :class="[
        type?type:'',
        color?'btn-colors':'',
        fill?fill:''
        ]"
         :title="title?title:''"
         :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }">
      <slot/>
    </div>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'
import { findColor } from '../../../hooks/tools'

const emit = defineEmits(['click'])
const props = defineProps({
  type: {
    type: String,
    default: 'primary'
  },
  hover: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'normal'
  },
  color: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  fill: {
    type: String,
    default: ''
  }
})

const clickCallBack = (evt) => {
  emit('click', evt)
}
</script>
<script>
export default {
  name: "iceButton",
}
</script>
<style lang="less">
@import '../../../assets/variables.less';
@import "../../../assets/animate.less";

.btn {
  border: @borderColor 1px solid;
  padding: @padding;
  border-radius: @radio-l;
  margin: @m-normal;
  user-select: none;
  flex-grow: 0;
  width: fit-content;
}

.btn > * {
  flex-grow: 0;
}

// primary类型按钮
.primary {
  border-color: @fonColor-dark;
  color: @fonColor-dark;

  &:hover {
    color: @themeColor;
    border-color: @themeColor;
  }
}

// danger类型按钮
.danger {
  color: @dangerColor-bleak;
  border-color: @dangerColor-bleak;

  &:hover {
    color: @dangerColor;
    border-color: @dangerColor
  }
}

// info类型按钮
.info {
  color: @infoColor-bleak;
  border-color: @infoColor-bleak;

  &:hover {
    color: @infoColor;
    border-color: @infoColor
  }
}

// success类型按钮
.success {
  color: @successColor-bleak;
  border-color: @successColor-bleak;

  &:hover {
    color: @successColor;
    border-color: @successColor
  }
}

// ready
.ready {
  color: @startColor-bleak;
  border: @startColor-bleak 1px solid;

  &:hover {
    color: @startColor;
    border: @startColor 1px solid;
  }
}


// hover button style
// default style
.btn-hover {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: @padding;
  border-radius: @radio-l;
  margin: @m-normal;
  user-select: none;
}

// primary hover style
.hoverLim {
  .primary {
    color: @fontColor;
    border: @fontColor 1px solid;

    &:hover {
      background-color: @themeColor;
      color: @fontColor-light;
      border: @fontColor-light 1px solid;
    }
  }
}

// button hover simple
//shadow to right and button
.shadow-r-b {
  border: @fontColor 1px solid;

  &:hover {
    border: @fontColor-none 1px solid;
    box-shadow: @hoverBlurLength @hoverLength-n @hoverLength-n @fontColor;
  }
}

.shadow-r-t {
  border: @fontColor 1px solid;

  &:hover {
    border: @fontColor-none 1px solid;
    box-shadow: @hoverBlurLength -@hoverLength-n @hoverLength-n @fontColor;
  }
}

.shadow-inner {
  border: @fontColor 1px solid;

  &:hover {
    border: @fontColor-none 1px solid;
    box-shadow: inset @hoverBlurLength @hoverLength-n @hoverLength-n @fontColor;
  }
}

.shadow-lt-rb {
  border: @fontColor 1px solid;
  box-shadow: -@hoverLength-n -@hoverLength-n @hoverLength-n @fontColor;

  &:hover {
    border: @fontColor-none 1px solid;
    box-shadow: @hoverBlurLength @hoverLength-n @hoverLength-n @fontColor;
  }
}

//  shadow from inner lt to rb
.shadow-inner-lt-rb {
  position: relative;
  transition: @time-n;
  border: @fontColor 1px solid;

  &:after, &:before {
    transition: @time-n;
    display: flex;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0;
    left: 0;
    content: '';
    border-radius: @radio-l;
  }

  &:after {
    box-shadow: -@hoverBlurLength -@hoverLength-n @hoverLength-n @fontColor;
    opacity: 1;
  }

  &:before {
    opacity: 0;
    box-shadow: inset 0 0 0 @fontColor;
  }

  &:hover {
    border: @fontColor-none 1px solid;

    &:after {
      opacity: 0;
      box-shadow: 0 0 0 @fontColor;
    }

    &:before {
      opacity: 1;
      box-shadow: inset @hoverBlurLength @hoverLength-n @hoverLength-n @fontColor;
    }
  }
}
</style>
