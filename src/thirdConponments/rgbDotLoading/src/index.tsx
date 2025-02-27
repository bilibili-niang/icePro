// https://codepen.io/jkantner/pen/xbKYrxv
import { defineComponent } from 'vue'
import './index.css'

export default defineComponent({
  name: 'RgbDotLoading',
  props: {},
  emits: [''],
  setup(props, { emit }) {
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
