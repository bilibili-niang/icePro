<script>
export default {
  name: "colorSelector"
};
</script>

<script setup>
import {defineEmits, defineProps, ref} from "vue";

const emits = defineEmits(["update:modelValue"]);
import colorJson from "../../../assets/colors/colors.json";

const colorObj = ref(colorJson);

const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  },
  // 是否使用中国传统色
  chinese: {
    type: Boolean,
    default: false
  }
});
const changeColor = () => {
  emits("update:modelValue", componentVal.value);
};

const componentVal = ref("#fc8c23");

/**
 * 进入时判断是否需要赋值,如果父组件没有传来值,那么将当前值传给父组件
 */
const init = () => {
  props.modelValue ? componentVal.value = props.modelValue : changeColor();
};

init();
const colorListFlag = ref(false);
const changeColorList = () => {
  colorListFlag.value = !colorListFlag.value;
  emits("update:modelValue", componentVal.value);
};
</script>
<template>
  <div class="colorSelector">
    <div v-if="!chinese" class="colorLim">
      <input v-model="componentVal" type="color" @blur="changeColor"/>
    </div>
    <div v-else class="chineseColors">
      <div class="selectedColor" @click="changeColorList">
        <ice-tag :style="{'background':componentVal}" class="noselect">{{ componentVal }}</ice-tag>
      </div>
      <ice-row :class="[colorListFlag?'colorListShow':'colorList']" class="flex-wrap">
        <template v-for="(item,key) in colorObj" :key="key">
          <div :style="{'background':item.hex}"
               class="colorItem ice-column w9percent m-bottom-n align-items-center margin-lr-s"
               @click="componentVal=item.hex;changeColorList()">
          </div>
        </template>
        <ice-text>
        </ice-text>
      </ice-row>

    </div>
  </div>
</template>

<style lang="less" scoped>
.colorLim{
  display: flex;
  width: 2rem;
  height: 2rem;
  border: @borderColor 1px solid;
  border-radius: @radio-n;

  input{
    display: flex;
    width: 100%;
    height: 100%;
    border: none;
  }
}
.chineseColors{
  position: relative;

  .previewBlock{
    display: flex;
    width: 1.3rem;
    height: 1.3rem;
    border-radius: @radio-n;
  }

  .colorList{
    position: absolute;
    top: 2rem;
    left: 0;
    z-index: -9;

    .colorItem{
      transition-duration: @time-l;
      height: 0;
      overflow: hidden;
    }
  }

  .colorListShow{
    position: absolute;
    top: 2rem;
    left: 0;
    z-index: 9;
    overflow: visible;
    background: @bac;
    transition-duration: @time-l;

    .colorItem{
      transition-duration: @time-l;
      height: 2rem;
      overflow: visible;
    }

  }
}

</style>