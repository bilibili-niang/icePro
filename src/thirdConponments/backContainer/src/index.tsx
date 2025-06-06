import './index.less'
import { defineComponent, computed, PropType } from 'vue'

const BackContainer = defineComponent({
  name: 'BackContainer',
  props: {
    level: {
      type: Number,
      default: 3
    }
  },
  setup(props, { slots }) {
    const backContainerStyle = computed(() => ({
      filter: `blur(${props.level}px)`
    }))

    return () => (
      <div class="BackContainer" style={backContainerStyle.value}>
        {slots.default?.()}
      </div>
    )
  }
})

export default BackContainer
