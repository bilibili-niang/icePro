<template>
  <div class="ice-textarea">
    <ice-header v-if="placeholder.length>0">{{ placeholder }}</ice-header>
    <textarea
        :cols="cols"
        :disabled="disable"
        :rows="rows"
        :value="modelValue"
        @input="handleChange"/>
  </div>

</template>

<script setup>

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

.ice-textarea {
  margin-top: @m-small;
  height: fit-content;

  textarea {
    color: @fontColor;
    font-size: @fontSize-n;
    border-radius: @radio-n @radio-n 0 0;
    background: @bac-dark-bleak;
    padding: @p-small;
    resize: none;
    outline: none;
    border-style: none;
    border-bottom: @borderColor 1px solid;
    width: 100%;
    box-sizing: border-box;
    margin-left: @m-small;
    margin-right: @m-small;
  }

  /* 针对WebKit浏览器（如Chrome和Safari）的滚动条样式 */

  textarea::-webkit-scrollbar {
    width: 5px; /* 滚动条的宽度 */
  }

  /* 滚动条轨道的背景色 */

  textarea::-webkit-scrollbar-track {
    background: @themeActiveColor;
  }

  /* 滚动条滑块的背景色 */

  textarea::-webkit-scrollbar-thumb {
    background: @bac-reversal-bleak;
  }

  /* 鼠标悬停时滚动条滑块的背景色 */

  textarea::-webkit-scrollbar-thumb:hover {
    background: @bac-reversal-bleak;
  }
}

</style>