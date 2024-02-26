<template>
  <div class="ice-textarea">

    <textarea
        :value="modelValue"
        cols="33"
        rows="5" @input="handleChange"/>
  </div>

</template>

<script setup>
import {defineProps, defineEmits} from "vue";

const props = defineProps(
    {
      modelValue: {
        type: [Number, String],
      },
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
    border-radius: @radio-n;
    background: @bac;
    padding: @p-small;
  }
}

</style>