<template>
  <div :class="[nativeInputValue?'inputNowait':'',
  'size'+size
  ]" class="ice-input">
    <div v-if="placeholder" :class="{nowait:nativeInputValue}" class="wait">
      {{ placeholder }}
    </div>
    <input
      ref="input"
      :disabled="disabled"
      :readonly="readonly"
      :value="nativeInputValue"
      autocomplete="off"
      class="jw-input-inner"
      @blur="handleBlur"
      @focus="handleFocus"
      @input="handleChange"
    />
    <!--:type="type?type:null"-->
  </div>
</template>

<script setup>
import { nextTick } from 'vue'
import { inputEmit, inputProps, useInput } from './index.js'

const props = defineProps(inputProps)
const emits = defineEmits(inputEmit)

const {
  disabled,
  // type,
  placeholder,
  readonly,
  nativeInputValue,
  size
} = useInput(props, emits)

/*
console.log('type')
console.log(type)
*/

const input = document.querySelector('input')
const textarea = document.querySelector('textarea')
const inputOrTextarea = () => input.value || textarea.value

// 监听输入
const handleChange = (e) => {
  const value = e.target.value
  if (value === nativeInputValue.value) return
  emits('update:modelValue', value)
  emits('input', value)
}

const handleBlur = (e) => {
  emits('blur', e)
}

const handleFocus = (e) => {
  emits('focus', e)
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
  select
})

</script>

<script>
export default {
  name: 'ice-input'
}
</script>

<style lang="less" scoped>
@import "../../../assets/variables.less";

.ice-input {
  position: relative;
  padding: @p-normal;
  transition-duration: @time-n;
  height: 1.4rem;
  border: rgba(0, 0, 0, 0) 1px solid;
  margin-top: @m-large;

  // 占位元素
  .wait {
    position: absolute;
    top: 30%;
    left: .3rem;
    //z-index: -3;
    transition-duration: @time-n;
    font-size: @fontSize-n;
    color: @fontColor-bleak;
    padding-left: @p-normal;
  }

  .nowait {
    color: @fontColor-bleak;
    font-size: @fontSize-s;
    top: -25%;
    background: @bac;
    padding-left: @p-small;
    //z-index: -3;
    background: none !important;
  }

  input {
    border: none;
    background: none;
    border-bottom: @themeColor 1px solid;
    display: flex;
    width: 100%;
    height: 100%;
    font-size: @fontSize-n;
    color: @fontColor;
    position: relative;
    z-index: 2;

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
  border-bottom-left-radius: @radio-n;
  border-bottom-right-radius: @radio-n;

  input {
    border: none;
  }
}
</style>
