<template>
  <div class="ice-avatar"
       :class="[
      round&&!block?'':'background'
  ]"
  >
    <img :src="src"
         :alt="title"
         :title="title"
         :class="[
        'avatar',
        size==='default-size'?'default-size':'',
        round&&!block?'round':'block'
    ]"
         @error="handleError"
         :style="{'object-fit': fit,'width':size+'px','height':size+'px',}"
    >
  </div>
</template>
<script setup>
import { defineProps } from 'vue'

const defaultPng = 'http://blog.icestone.work/default.png'
const handleError = (e) => {
  e.target.src = defaultPng
}
defineProps({
  src: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'default-size'
  },
  round: {
    type: Boolean,
    default: true
  },
  block: {
    type: Boolean,
    default: false
  },
  fit: {
    type: String,
    default: 'fill'
  }
})

</script>
<script>
export default {
  name: "iceAvatar"
}
</script>

<style scoped lang="less">
@import '../../../assets/variables.less';

.background {
  background: @themeColor-bleak-bleak;
}

.ice-avatar {
  margin: @m-normal;
  width: fit-content;
  height: fit-content;

  .avatar {
    display: flex;
    object-fit: cover;
  }

  .round {
    border-radius: 50%;
  }

  .block {
    border-radius: .3rem;
  }

  .default-size {
    display: flex;
    width: 3rem;
    height: 3rem;
  }
}
</style>
