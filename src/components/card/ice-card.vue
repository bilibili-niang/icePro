<template>
  <!--变量-->
  <div class="ice-card" :class="size,color? color: ''"
       :style="{'--hover-color': themeColor.hoverColor,'--color': themeColor.color}">
    <div class="slot" :class="type">
      <div class="header">
        <ice-title>
          <slot name="header"></slot>
        </ice-title>
      </div>
      <split></split>
      <div class="body">
        <slot name="body"></slot>
      </div>
    </div>

  </div>
</template>

<script setup>
import { reactive } from 'vue'
import { findColor } from '../../hooks/tools.js'

const props = defineProps({
  type: {
    type: String,
    default: 'normal'
  },
  size: {
    type: String,
    default: 'n'
  },
  color: {
    type: String,
    default: ''
  }
})

let themeColor = reactive({})
if (props.color) {
  const colorObj = findColor(props.color)
  themeColor = {
    color: `rgba(${ colorObj.RGB[0] },${ colorObj.RGB[1] },${ colorObj.RGB[2] },1)`,
    hoverColor: `rgba(${ colorObj.RGB[0] },${ colorObj.RGB[1] },${ colorObj.RGB[2] },0.5)`
  }
}

</script>
<script>
export default {
  name: "ice-card"
}
</script>

<style scoped lang="less">
@import "../../assets/variables.less";

.ice-card {
  border: @themeColor 1px solid;
  width: 100%;

  .header {
    line-height: @lineHeight-n;
    color: @themeColor;
  }

  .body {
    font-size: @fontSize-n;
    line-height: @lineHeight-n;
    color: @themeColor;
    font-weight: @fontWeight-n;
  }
}

// size
.n {
  padding: @p-normal;
  margin: @m-normal;
  border-radius: @radio-n;
}
</style>
