<template>
  <div class="ice-textarea">
    <ice-text v-if="placeholder.length>0">{{ placeholder }}</ice-text>
    <textarea
        :cols="cols"
        :disabled="disable"
        :rows="rows"
        :value="modelValue"
        @input="handleChange"/>
  </div>

</template>

<script setup>
import {defineProps, defineEmits} from "vue";

defineProps(
    {
      modelValue: {
        type: [Number, String],
      },
      cols: {
        type: Number,
        default: 33
      },
      rows: {
        type: Number,
        default: 5
      },
      disable: {
        type: Boolean,
        default: false
      },
      placeholder: {
        type: String,
        default: ""
      }
    }
);
const emits = defineEmits([
  "update:modelValue",
  "input",
  "clear",
  "blur",
  "focus",
]);

// 监听输入
const handleChange = (e) => {
  const value = e.target.value;
  emits("update:modelValue", value);
  emits("input", value);
};

</script>

<script>
export default {
  name: "ice-textarea"
};
</script>

<style lang="less" scoped>
@import "../../../assets/variables";

.ice-textarea{
  textarea{
    color: @fontColor;
    font-size: @fontSize-n;
    border-radius: @radio-n @radio-n 0 0;
    background: @bac;
    padding: @p-small;
    resize: none;
    outline: none;
    border-style: none;
    border-bottom: @borderColor 1px solid;
  }
}

</style>