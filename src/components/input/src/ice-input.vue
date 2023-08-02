<template>
  <div class="ice-input" :class="{inputNowait:nativeInputValue}">
    <div v-if="placeholder" class="wait" :class="{nowait:nativeInputValue}">
      {{ placeholder }}
    </div>
    <input
        ref="input"
        :disabled="disabled"
        :type="type"
        class="jw-input-inner"
        autocomplete="off"
        :readonly="readonly"
        :value="nativeInputValue"
        @input="handleChange"
        @blur="handleBlur"
        @focus="handleFocus"
    />
  </div>
</template>

<script setup>
import { defineProps, nextTick } from 'vue'
import { inputEmit, inputProps, useInput } from '@/components/input/src/ice-input.js'

const props = defineProps(inputProps)
const emits = defineEmits(inputEmit)

const {
  disabled,
  classes,
  clearable,
  type,
  passwordVisible,
  placeholder,
  suffixIcon,
  prefixIcon,
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

const hanldeClear = () => {
  emits("update:modelValue", "")
  emits("input", "")
  emits("clear", "")
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

const handlePasswordVisible = () => {
  passwordVisible.value = !passwordVisible.value
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

<style scoped lang="less">
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
    top: 40%;
    left: .3rem;
    z-index: -1;
    transition-duration: @time-n;
    font-size: @fontSize-n;
    color: @themeColor;
    padding-left: @p-normal;
  }

  .nowait {
    color: @themeColor-bleak;
    font-size: @fontSize-s;
    top: -10%;
    background: @themeColorReversal;
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
