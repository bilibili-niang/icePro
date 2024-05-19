<template>
  <Teleport to="body">
    <div :class="[
    direction?direction:'left',
    modelValue?'fadeIn':'fadeOut'
  ]"
         :style="{
          'flex-direction':layoutDirection
         }"
         class="ice-drawer"
    >
      <div :style="styleObj" class="slotStyle">
        <ice-text>
          {{ styleObj }}
        </ice-text>
        <slot></slot>
      </div>

      <div class="blank" @click="close">
        <ice-text>
          modelValue:{{ modelValue }}
        </ice-text>
        <br>
        <ice-text>
          direction:{{ direction }}
        </ice-text>
        <ice-button color="honglan" @click="close">close</ice-button>
      </div>
    </div>
  </Teleport>
</template>
<script setup>
import {computed, ref, watch } from "vue";

const emits = defineEmits(["update:modelValue"]);
const props = defineProps({
  // 如果不定义绑定的值的名称，默认为modelValue
  modelValue: Boolean,
  // 指定值的名称为value
  value: String,
  width: {
    type: String,
    default: "10rem"
  },
  direction: {
    type: String,
    default: "left"
  },
  percent: {
    type: String,
    default: "20%"
  }
});
const close = () => {
  emits("update:modelValue", false);
};

const styleObj = computed(() => {
  if (props.direction === "left" || props.direction === "right") {
    return {
      width: props.percent,
    };
  } else {
    return {
      height: props.percent,
    };
  }
});
const layoutDirection = computed(() => {
  if (props.direction === "left" || props.direction === "right") {
    return "row";
  } else {
    return "column";
  }
});

const body = ref(document.querySelector("body"));
watch(() => props.modelValue, (newVal) => {
  if (newVal) {
    body.value.classList.value += " showDrawer";
  } else {
    body.value.classList.value = body.value.classList.value.replaceAll(" showDrawer", "");
  }
});
</script>
<script>
export default {
  name: "ice-drawer"
};
</script>

<style lang="less" scoped>
@import '../../../assets/variables.less';
@import "../../../assets/animate.less";

.ice-drawer{
  position: fixed;
  transition: all @time-l ease;
  height: 100vh;
  width: 100vw;
  display: flex;
  z-index: 17;

  .blank{
    flex: 1;
    transition: all 1s ease;
  }

  .slotStyle{
    height: 100%;
    background: @bac;
    border: @borderColor 1px solid;
  }
}

// direction
.left{
  height: 100%;
  left: 0;
  top: 0;
}

.right{
  height: 100%;
  right: 0;
  top: 0;
}

.top{
  width: 100%;
  top: 0;
  left: 0;
}

.bottom{
  width: 100%;
  bottom: 0;
  left: 0;
}

.fadeIn{
  left: 0;
}

.fadeOut{
  left: -100%;
}

@keyframes fadeIn{
  0%{
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

</style>
