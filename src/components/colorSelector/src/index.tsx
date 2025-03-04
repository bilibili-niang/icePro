import { defineComponent, ref, onMounted, watch } from 'vue'
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
    const themes = purpleTheme as ColorTheme[]
    const selectedTheme = ref<ColorTheme | null>(null)
    const selectedColor = ref(props.modelValue || '')
    const isExpanded = ref(false)

    const handleThemeSelect = (theme: ColorTheme) => {
      if (selectedTheme.value?.color === theme.color) {
        isExpanded.value = !isExpanded.value
        return
      }
      selectedTheme.value = theme
      if (theme.variations.length > 0) {
        handleColorSelect(theme.variations[theme.variations.length - 1].hex)
      }
    }

    const handleColorSelect = (hex: string) => {
      if (selectedColor.value === hex) return
      selectedColor.value = hex
      emit('update:modelValue', hex)
      isExpanded.value = false
    }

    onMounted(() => {
      if (themes.length > 0) {
        handleThemeSelect(themes[0])
      }
    })

    watch(() => selectedTheme.value, (newTheme) => {
      if (newTheme) {
        handleColorSelect(newTheme.variations[newTheme.variations.length - 1].hex)
      }
    })

    return () => (
      <div class={['color-selector', { expanded: isExpanded.value }]}>
        <div 
          class="theme-item"
          onClick={() => selectedTheme.value && handleThemeSelect(selectedTheme.value)}
        >
          <div 
            class="theme-dot" 
            style={{ backgroundColor: selectedColor.value }}
          />
        </div>

        <div class="expanded-content">
          {isExpanded.value && (
            <>
              <div class="theme-list-expanded">
                {themes.map(theme => (
                  <div 
                    class={['theme-item', { active: selectedTheme.value?.color === theme.color }]}
                    key={theme.color}
                    onClick={() => handleThemeSelect(theme)}
                  >
                    <div 
                      class="theme-dot" 
                      style={{ backgroundColor: theme.variations[4]?.hex || theme.variations[0].hex }}
                    />
                  </div>
                ))}
              </div>
              
              {selectedTheme.value && (
                <div class="color-box">
                  <h3 class="color-title">{selectedTheme.value.color}</h3>
                  <div class="variations-list">
                    {selectedTheme.value.variations.map((swatch) => (
                      <div 
                        class={['color-row', { active: selectedColor.value === swatch.hex }]}
                        key={swatch.weight}
                        onClick={() => handleColorSelect(swatch.hex)}
                      >
                        <div 
                          class="color-dot" 
                          style={{ backgroundColor: swatch.hex }}
                        />
                        <span class="color-weight">{swatch.weight}</span>
                        <span class="color-hex">{swatch.hex}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    )
  }
})
