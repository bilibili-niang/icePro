<template>
  <div
    :class="['ice-input',
    nativeInputValue?'inputNowait':'',
    'size'+size,
    disabled&&'disabled'
   ]"
  >
    <div
      v-if="placeholder"
      :class="{nowait:nativeInputValue}"
      class="wait">
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
  </div>
</template>

<script setup>
import { nextTick, ref } from 'vue'
import { inputEmit, inputProps, useInput } from './index.js'

const props = defineProps(inputProps)
const emits = defineEmits(inputEmit)

const {
  disabled,
  placeholder,
  readonly,
  nativeInputValue,
  size
} = useInput(props, emits)


const input = ref(null)
const textarea = ref(null)
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

// focus方法
const focus = () => {
  nextTick(() => {
    input.value?.focus()
  })
}

// blur方法
const blur = () => {
  nextTick(() => {
    input.value?.blur()
  })
}

// select方法
const select = () => {
  nextTick(() => {
    input.value?.select()
  })
}

defineExpose({
  input,
  inputOrTextarea,
  textarea,
  focus,
  blur,
  select
})

</script>

<script>
export default {
  name: 'ice-input'
}
</script>

<style lang="less" scoped>

.disabled {
  &:after {
    content: '';
    position: absolute;
    width: 110%;
    height: 1px;
    background: var(--color-bleak);
    bottom: 40%;
    left: 50%;
    transform: translateX(-50%);
  }
}

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
  border-bottom-left-radius: @radio-l;
  border-bottom-right-radius: @radio-l;

  input {
    border: none;
  }
}
</style>
