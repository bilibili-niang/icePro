<template>
  <div :class="{inputNowait:nativeInputValue}" class="ice-input">
    <div v-if="placeholder" :class="{nowait:nativeInputValue}" class="wait">
      {{ placeholder }}
    </div>
    <input
        ref="input"
        :disabled="disabled"
        :readonly="readonly"
        :type="type"
        :value="nativeInputValue"
        autocomplete="off"
        class="jw-input-inner"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleChange"
    />
  </div>
</template>

<script setup>
import { defineProps, nextTick } from 'vue'
import { inputEmit, inputProps, useInput } from './ice-input.js'

const props = defineProps(inputProps)
const emits = defineEmits(inputEmit)

const {
  disabled,
  type,
  placeholder,
  readonly,
  nativeInputValue,
} = useInput(props, emits)

const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const inputOrTextarea = () => input.value || textarea.value


// 监听输入
const handleChange = (e) => {
  const value = e.target.value
  if (value === nativeInputValue.value) return
  emits("update:modelValue", value)
  emits("input", value)
}


const handleBlur = (e) => {
  emits("blur", e)
}

const handleFocus = (e) => {
  emits("focus", e)
}

const focus = () => {
  nextTick(() => {
    inputOrTextarea.value?.focus()
  })
}

const blur = () => {
  nextTick(() => {
    inputOrTextarea.value?.blur()
    const selection = document.getSelection()
    const range = document.createRange()
    range.selectNode(inputOrTextarea.value)
    selection.removeAllRanges()
  })
}

const select = () => {
  nextTick(() => {
    inputOrTextarea.value?.focus()
    const selection = document.getSelection()
    const range = document.createRange()
    range.selectNode(inputOrTextarea.value)
    selection.removeAllRanges()
    selection.addRange(range)
  })
}

defineExpose({
  input,
  inputOrTextarea,
  textarea,
  blur,
  focus,
  select,
})


</script>

<script>
export default {
  name: "ice-input"
}
</script>

<style lang="less" scoped>
@import "../../../assets/variables.less";

.ice-input {
  position: relative;
  padding: @p-normal;
  transition-duration: @time-n;
  height: 2rem;
  border: rgba(0, 0, 0, 0) 1px solid;

  // 占位元素
  .wait {
    position: absolute;
    top: 30%;
    left: .3rem;
    z-index: 3;
    transition-duration: @time-n;
    font-size: @fontSize-n;
    color: @themeColor;
    padding-left: @p-normal;
  }

  .nowait {
    color: @themeColor-bleak;
    font-size: @fontSize-s;
    top: -25%;
    background: @bac;
    padding-left: @p-small;
  }

  input {
    border: none;
    background: none;
    border-bottom: @themeColor 1px solid;
    display: flex;
    width: 100%;
    height: 100%;
    font-size: @fontSize-n;
    color: @themeColor;

    &:focus {
      outline: none;
    }
  }
}

// 等待输入的样式
.inputNowait {
  border-bottom: @themeColor 1px solid;
  border-left: @themeColor 1px solid;
  border-right: @themeColor 1px solid;
  border-radius: @radio-n;
}
</style>
