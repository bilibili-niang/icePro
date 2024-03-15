<script>
export default {
  name: "colorSelector"
};
</script>

<script setup>
import {defineEmits, defineProps, ref} from "vue";

const emits = defineEmits(["update:modelValue"]);

const props = defineProps({
  modelValue: {
    type: String,
    default: ""
  }
});
const changeColor = () => {
  emits("update:modelValue", componentVal.value);
};

const componentVal = ref("#fc8c23");

const init = () => {
  props.modelValue ? componentVal.value = props.modelValue : "";
};

init();
</script>


<template>
  <div class="colorSelector">
    <div class="colorLim">
      <input v-model="componentVal" type="color" @blur="changeColor"/>
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

</style>