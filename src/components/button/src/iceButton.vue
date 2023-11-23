<template>
  <div class="ice-button" @click="clickCallBack">
    <div :class="[
        type?color?'btn-colors':type:'',
        color?'btn-colors':'',
        fill?fill:'',
        round?'round':'defaultRound',
        block?'block':'',
        size?`size-${size}`:'size-n',
        disable?'disable':'pointer',
        border?'border':''
        ]" :style="{ '--hover-color': findColor(color).color,'--color': findColor(color).hover }"
         :title="title?title:''"
         class='btn btn-time-s  text-nowrap ice-row'>
      <slot></slot>
    </div>
  </div>
</template>

<script setup>
import {defineProps} from "vue";
import {findColor} from "../../../hooks/tools";

const emit = defineEmits(["click"]);
const props = defineProps({
  type: {
    type: String,
    default: "primary"
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
    default: ""
  },
  title: {
    type: String,
    default: ""
  },
  fill: {
    type: String,
    default: ""
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
  },
  border: {
    type: Boolean,
    default: true
  }
});

const clickCallBack = (evt) => {
  if (props.disable) {
    return;
  }
  emit("click", evt);
};
</script>
<script>
export default {
  name: "iceButton",
};
</script>
<style lang="less" scoped>
@import '../../../assets/variables.less';
@import "../../../assets/animate.less";
.ice-button{
  width: fit-content;
}
.btn{
  border-radius: @radio-l;
  user-select: none;
  flex-grow: 0;
  width: fit-content;
}

.border{
  border-width: 1px;
  border-style: solid;
}

.btn > *{
  flex-grow: 0;
}

// primary类型按钮
.primary{
  border-color: @themeColor-bleak;
  color: @themeColor-bleak;

  &:hover{
    color: @themeColor;
    border-color: @themeColor;
  }
}

// danger类型按钮
.danger{
  color: @dangerColor-bleak;
  border-color: @dangerColor-bleak;

  &:hover{
    color: @dangerColor;
    border-color: @dangerColor
  }
}

// success类型按钮
.success{
  color: @successColor-bleak;
  border-color: @successColor-bleak;

  &:hover{
    color: @successColor;
    border-color: @successColor
  }
}

// ready
.ready{
  color: @startColor-bleak;
  border-color: @startColor-bleak;

  &:hover{
    color: @startColor;
    border-color: @startColor;
  }
}

// hover button style
// default style
.light{
  .btn-hover{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: @padding;
    margin: @m-normal;
    user-select: none;
  }
}

// primary hover style
.hoverLim{
  .primary{
    color: @fontColor;
    border-color: @fontColor;

    &:hover{
      background-color: @themeColor;
      color: @fontColor-light;
      border-color: @fontColor-light;
    }
  }
}

// button hover simple
//shadow to right and button
.shadow-r-b{
  border-color: @fontColor;

  &:hover{
    border-color: @fontColor-none;
    box-shadow: @hoverBlurLength @hoverLength-n @hoverLength-n @fontColor;
  }
}

.shadow-r-t{
  border-color: @fontColor;

  &:hover{
    border-color: @fontColor-none;
    box-shadow: @hoverBlurLength -@hoverLength-n @hoverLength-n @fontColor;
  }
}

.shadow-inner{
  border-color: @fontColor;

  &:hover{
    border-color: @fontColor-none;
    box-shadow: inset @hoverBlurLength @hoverLength-n @hoverLength-n @fontColor;
  }
}

.shadow-lt-rb{
  border-color: @fontColor;
  box-shadow: -@hoverLength-n -@hoverLength-n @hoverLength-n @fontColor;

  &:hover{
    border-color: @fontColor-none;
    box-shadow: @hoverBlurLength @hoverLength-n @hoverLength-n @fontColor;
  }
}

//  shadow from inner lt to rb
.shadow-inner-lt-rb{
  position: relative;
  transition: @time-n;
  border-color: @fontColor;

  &:after, &:before{
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

  &:after{
    box-shadow: -@hoverBlurLength -@hoverLength-n @hoverLength-n @fontColor;
    opacity: 1;
  }

  &:before{
    opacity: 0;
    box-shadow: inset 0 0 0 @fontColor;
  }

  &:hover{
    border-color: @fontColor-none;

    &:after{
      opacity: 0;
      box-shadow: 0 0 0 @fontColor;
    }

    &:before{
      opacity: 1;
      box-shadow: inset @hoverBlurLength @hoverLength-n @hoverLength-n @fontColor;
    }
  }
}

// round
// 默认圆角
.defaultRound{
  border-radius: @radio-l;
}

.round{
  border-radius: 1.3rem;
}

// block
.block{
  border-radius: 0;
}

// size
.size-s{
  padding: @p-small;
  margin: @m-small;
  font-size: @fontSize-s;
}

.size-n{
  padding: @p-normal;
  margin: @m-normal;
  font-size: @fontSize-n;
}

.size-l{
  padding: @p-large;
  margin: @m-normal;
  font-size: @fontSize-l;
}

// 默认color
.default-color{
  border-color: @themeColor;
  color: @themeColor;

  &:hover{
    border-color: @themeColor-bleak;
    color: @themeColor-bleak;
  }
}

.btn-colors(){
  border-color: var(--color);
  color: var(--color);

  &:hover{
    border-color: var(--hover-color);
    color: var(--hover-color);
  }
}

// colors
.light{
  .btn-colors{
    border-color: var(--color);
    color: var(--color);

    &:hover{
      border-color: var(--hover-color);
      color: var(--hover-color);
    }
  }
}

.dark{
  .btn-colors{
    border-color: var(--color);
    color: var(--color);

    &:hover{
      border-color: var(--hover-color);
      color: var(--hover-color);
    }
  }
}

// disable
.disable{
  display: flex;
  width: fit-content;
  cursor: not-allowed;
  z-index: 2;
  filter: grayscale(80%);
}
</style>
