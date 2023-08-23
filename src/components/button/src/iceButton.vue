<template>
  <div class="ice-button" @click="clickCallBack">
    <div class='btn btn-time-s  text-nowrap ice-row' :class="[
        type?color?'btn-colors':type:'',
        color?'btn-colors':'',
        fill?fill:'',
        round?'round':'defaultRound',
        block?'block':'',
        size?`size-${size}`:'size-n',
        disable?'disable':'pointer'
        ]"
         :title="title?title:''"
         :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }">
      <slot></slot>
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
    type: String
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
  },
  round: {
    type: Boolean,
    default: false
  },
  block: {
    type: Boolean,
    default: false
  },
  disable: {
    type: Boolean,
    default: false
  }
})

const clickCallBack = (evt) => {
  if (props.disable) {
    return
  }
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
  border-radius: @radio-l;
  user-select: none;
  flex-grow: 0;
  width: fit-content;
  border-width: 1px;
  border-style: solid;
}

.btn > * {
  flex-grow: 0;
}

// primary类型按钮
.primary {
  border: @themeColor-bleak 1px solid;
  color: @themeColor-bleak;

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
.light {
  .btn-hover {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: @padding;
    margin: @m-normal;
    user-select: none;
  }
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

// round
// 默认圆角
.defaultRound {
  border-radius: @radio-l;
}

.round {
  border-radius: 1.3rem;
}

// block
.block {
  border-radius: 0;
}

// size
.size-s {
  padding: @p-small;
  margin: @m-small;
  font-size: @fontSize-s;
}

.size-n {
  padding: @p-normal;
  margin: @m-normal;
  font-size: @fontSize-n;
}

.size-l {
  padding: @p-large;
  margin: @m-normal;
  font-size: @fontSize-l;
}

// 默认color
.default-color {
  border: @themeColor 1px solid;
  color: @themeColor;

  &:hover {
    border: @themeColor-bleak 1px solid;
    color: @themeColor-bleak;
  }
}

.btn-colors(@color:var(--hover-color)) {
  border: var(--color) 1px solid;
  color: var(--color);
  border-color: var(--color);

  &:hover {
    border: var(--hover-color) 1px solid;
    color: @color;
    border-color: var(--hover-color);
  }
}

// colors
.light {
  .btn-colors {
    .btn-colors();
  }
}

.dark {
  .btn-colors {
    .btn-colors(white)
  }
}

// disable
.disable {
  display: flex;
  width: fit-content;
  cursor: not-allowed;
  z-index: 2;
  filter: grayscale(80%);
}
</style>
