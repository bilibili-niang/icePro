import './index.less'
import { defineComponent, computed } from 'vue'

export default defineComponent({
  name: 'BackContainer',
  props: {
    level: {
      type: Number,
      default: 3
    }
  },
  setup(props, { slots }) {
    const BackContainerStyle = computed(() => {
      return {
        filter: `blur(${props.level}px)`
      }
    })

    return () => {
      return (
        <div
          class="BackContainer"
          style={BackContainerStyle.value}
        >
          {slots?.default()}
        </div>
      )
    }
  }
})
