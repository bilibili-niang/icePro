import { computed, ref } from 'vue'

export const inputProps = {
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String
  },
  disabled: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: false
  },
  showPassword: {
    type: Boolean,
    default: false
  },
  suffixIcon: {
    type: String
  },
  prefixIcon: {
    type: String
  },
  readonly: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'n'
  }
}
export const inputEmit = [
  'update:modelValue',
  'input',
  'clear',
  'blur',
  'focus'
]

export const useInput = (props) => {
  const disabled = computed(() => props.disabled)
  const placeholder = computed(() => props.placeholder)
  const clearable = computed(() => props.clearable)

  const showPassword = computed(() => props.showPassword)
  const passwordVisible = ref(false)
  const readonly = computed(() => props.readonly)

  const classes = computed(() => ({
    'is-disabled': disabled.value,
    'is-clearable': clearable.value,
    'show-password': showPassword.value,
    'jw-input-suffix':
      showPassword.value || clearable.value || props.suffixIcon,
    'jw-input-prefix': props.prefixIcon
  }))

  const nativeInputValue = computed(() =>
    props.modelValue === null || props.modelValue === undefined ? '' : String(props.modelValue)
  )
  return {
    disabled,
    classes,
    clearable,
    showPassword,
    passwordVisible,
    placeholder,
    suffixIcon: props.suffixIcon,
    prefixIcon: props.prefixIcon,
    readonly,
    nativeInputValue
  }
}
