<script>
export default {
  name: 'MusicCard'
}
</script>
<script setup>
import { ref, computed } from 'vue'
import musicBac from '../../assets/png/musicBac.png'

const props = defineProps({
  url: {
    type: String,
    default: ''
  },
  coverImg: {
    type: String,
    default: musicBac
  },
  width: {
    type: Number,
    default: 400
  },
  height: {
    type: Number,
    default: 500
  },
  cardColor: {
    type: String,
    default: 'rgba(167,168,189,1)'
  },
  color: {
    type: String,
    default: 'yuanshanzi'
  }
})

// 是否在播放,默认不播放
const state = ref(false)

const audioEnd = () => {
  console.log('audioEnd')
  state.value = false
  currentTime.value = 0
  audio.value.currentTime = 0
}

const currentTime = ref(0)
const totalTime = ref(0)
const audio = ref(null)
const updateTime = () => {
  currentTime.value = parseInt(audio.value.currentTime) || 0
}

const getDuration = () => {
  totalTime.value = parseInt(audio.value.duration) || 0
}

const changeState = () => {
  if (state.value) {
    audio.value.pause()
  } else {
    audio.value.play()
  }
  state.value = !state.value
}
let progressBar = computed(() => {
  return (currentTime.value / totalTime.value) * 100
})

const musicCardStyle = computed(() => {
  const { width, height, cardColor } = props

  return {
    width,
    height,
    backgroundColor: cardColor
  }
})
</script>

<template>
  <div
    class="musicCard"
    :style="musicCardStyle"
  >
    <audio controls ref="audio" :src="props.url"
           @ended="audioEnd"
           class="video"
           controlslist="nodownload noplaybackrate"
           @timeupdate="updateTime"
           @canplay="getDuration"
           hidden=true
    ></audio>
    <div class="collectibleMusic">
      <div class="backCover" :style="{
      'background':'url('+props.coverImg+')'
    }" :class="[
        state?'play':'posed'
    ]">

      </div>
      <div class="controllerContainer">
        <div class="playInfo">
          <div class="cover">
            <img :src="props.coverImg" alt="">
          </div>
        </div>

        <div class="start">
          <ice-tag
            noselect
            pointer
            @click="changeState"
            :color="props.color"
          >
            {{ state ? '「 || 」' : '「▶」' }}
          </ice-tag>
          <div class="bottomLine">
            <div class="timeLine" :style="{
          'width':progressBar+'%'
        }">
            </div>
          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<style scoped lang="less">
.musicCard {
  display: flex;
  background: gray;
  border-radius: @radio-n;
  padding: @p-normal;
}
.collectibleMusic {
  flex: 1;
  width: 100%;
  height: 100%;
  display: flex;
  padding: @p-small;
  position: relative;
  overflow: hidden;
  border-radius: @radio-n;
  .backCover {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: flex;
    background-repeat: no-repeat;
    background-size: contain;
    transition: @time-l;
    border-radius: @radio-n;
  }
  .play {
    width: 100%;
    height: 100%;
    filter: blur(10px);
    border-radius: @radio-n;
  }
  .posed {
    border-radius: 50%;
    height: 0;
    width: 0;
    filter: blur(0px);
    .cover {
      transform: scale(.7);
    }
  }
  .controllerContainer {
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 100%;
    position: relative;
    .playInfo {
      .cover {
        width: 200px;
        max-height: 200px;
        overflow: hidden;
        border-radius: @radio-n;
        justify-content: center;
        align-items: center;
        display: flex;
        margin: 1.3rem auto auto;
        img {
          display: flex;
          width: 90%;
          height: 90%;
          border-radius: @radio-l;
        }
      }
    }
    .start {
      position: absolute;
      bottom: .3rem;
      left: 0;
      width: 100%;
      padding-bottom: .9rem;
      .bottomLine {
        position: absolute;
        bottom: 0;
        left: 0;
        margin-top: @m-normal;
        display: flex;
        width: 100%;
        height: .3rem;
        border-radius: @radio-l;
        background: @themeColor-bleak;
        overflow: hidden;
        transition-duration: @time-n;
        &:hover {
          height: .6rem;
          border-radius: @radio-n;
        }
        .timeLine {
          background: @themeActiveColor;
          display: flex;
          height: 100%;
        }
      }
    }
  }
}
</style>