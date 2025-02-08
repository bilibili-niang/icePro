import { defineComponent } from 'vue'

export default defineComponent({
  name: 'RandomPixels',
  props: {},
  emits: [''],
  setup(props, { emit }) {
    return () => {
      return (
        <div class="RandomPixels">
          RandomPixels 组件~
        </div>
      )
    }
  }
})
