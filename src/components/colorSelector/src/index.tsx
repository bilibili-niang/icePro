import { defineComponent, ref } from 'vue'
import './index.less'
import purpleTheme from '../../../assets/colors/theme-purple.json'

interface ColorSwatch {
  weight: string
  hex: string
  rgba: string
}

interface ColorTheme {
  color: string
  variations: ColorSwatch[]
}

export default defineComponent({
  name: 'ColorSelector',
  props: {
    modelValue: {
      type: String,
      default: ''
    }
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const selectedColor = ref(props.modelValue || (purpleTheme as ColorTheme[])[0].variations[0].hex)

    const handleColorSelect = (hex: string) => {
      selectedColor.value = hex
      emit('update:modelValue', hex)
    }

    return () => (
      <div class="color-selector">
        {(purpleTheme as ColorTheme[]).map(theme => (
          <div class="color-box" key={theme.color}>
            <h3 class="color-title">{theme.color}</h3>
            {theme.variations.map(swatch => (
              <div 
                class="color-row" 
                key={swatch.weight}
                onClick={() => handleColorSelect(swatch.hex)}
              >
                <div 
                  class="color-dot" 
                  style={{ backgroundColor: swatch.hex }}
                />
                <ice-text class="color-weight">{swatch.weight}</ice-text>
                <ice-text class="color-hex">{swatch.hex}</ice-text>
              </div>
            ))}
          </div>
        ))}
      </div>
    )
  }
})
