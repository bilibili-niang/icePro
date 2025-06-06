// https://codepen.io/jkantner/pen/xbKYrxv
import { defineComponent, onMounted } from 'vue'
import { printAuthorInfo } from '../../../utils/console'
import './index.css'

export default defineComponent({
  name: 'RgbDotLoading',
  setup(props, { emit }) {
    onMounted(() => {
      printAuthorInfo({
        title: 'RGB Dot Loading',
        author: 'jkantner',
        source: 'https://codepen.io/jkantner/pen/xbKYrxv'
      })
    })

    return () => (
      <div class="RgbDotLoading">
        <div class="pl">
          {Array(6)
            .fill(null)
            .map((_, index) => (
              <div class="pl__dot" key={index}>
                {Array(3)
                  .fill(null)
                  .map((_, layerIndex) => (
                    <div class="pl__dot-layer" key={layerIndex}></div>
                  ))}
              </div>
            ))}
        </div>
      </div>
    )
  }
})
