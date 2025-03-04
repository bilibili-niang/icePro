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

    return () => {
      return (
        <div class="RgbDotLoading">
          <div class="pl">
            <div class="pl__dot">
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
            </div>
            <div class="pl__dot">
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
            </div>
            <div class="pl__dot">
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
            </div>
            <div class="pl__dot">
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
            </div>
            <div class="pl__dot">
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
            </div>
            <div class="pl__dot">
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
              <div class="pl__dot-layer"></div>
            </div>
          </div>
        </div>
      )
    }
  }
})
