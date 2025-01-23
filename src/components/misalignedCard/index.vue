<!--错位卡片-->
// 'copy from https://twitter.com/intent/follow?screen_name=jh3yy
<script>
export default {
  name: 'misalignedCard'
}
</script>

<script setup>
import gsap from 'gsap'
import frontImg from '../../assets/png/foreground.png'
import backgroundImg from '../../assets/png/background.jpg'
import { Icon } from '@vicons/utils'
import { computed } from 'vue'

const UPDATE = ({ x, y }) => {
  gsap.set(document.documentElement, {
    '--x': gsap.utils.mapRange(0, window.innerWidth, -1, 1, x),
    '--y': gsap.utils.mapRange(0, window.innerHeight, -1, 1, y)
  })
}

window.addEventListener('mousemove', UPDATE)

const handleOrientation = ({ beta, gamma }) => {
  const isLandscape = window.matchMedia('(orientation: landscape)').matches
  gsap.set(document.documentElement, {
    '--x': gsap.utils.clamp(-1, 1, isLandscape ? gsap.utils.mapRange(-45, 45, -1, 1, beta) : gsap.utils.mapRange(-45, 45, -1, 1, gamma)),
    '--y': gsap.utils.clamp(-1, 1, isLandscape ? gsap.utils.mapRange(20, 70, 1, -1, Math.abs(gamma)) : gsap.utils.mapRange(20, 70, 1, -1, beta))
  })
}

const START = () => {
  if (
    DeviceOrientationEvent?.requestPermission
  ) {
    Promise.all([
      DeviceOrientationEvent.requestPermission()
    ]).then((results) => {
      if (results.every((result) => result === 'granted')) {
        window.addEventListener('deviceorientation', handleOrientation)
      }
    })
  } else {
    window.addEventListener('deviceorientation', handleOrientation)
  }
}
document.body.addEventListener('click', START, { once: true })

const props = defineProps({
  title: {
    type: String,
    default: 'CTRL'
  },
  topContent: {
    type: String,
    default: '全民制作人'
  },
  bottomContent: {
    type: String,
    default: '大家好,我是蔡徐坤'
  },
  foreground: {
    type: String,
    default: frontImg
  },
  background: {
    type: String,
    default: backgroundImg
  },
  width: {
    type: Number,
    default: 600
  },
  height: {
    type: Number,
    default: 300
  },
  color: {
    type: String,
    default: '#ffffff'
  }
})

const articleStyle = computed(() => {
  const { width, height } = props
  return {
    width: width + 'px',
    height: height + 'px'
  }
})
const fontColor = computed(() => {
  const { color } = props
  return { color }
})

</script>

<template>
  <article
    :style="articleStyle"
  >
    <div class="assets">
      <img :src="props.background" alt="" />
      <h3 :style="fontColor">{{ props.title }}</h3>
      <img :src="props.foreground" alt="" />
    </div>
    <div class="blur">
      <div>
        <div class="layer" style="--index:1;"></div>
        <div class="layer" style="--index:2;"></div>
        <div class="layer" style="--index:3;"></div>
        <div class="layer" style="--index:4;"></div>
        <div class="layer" style="--index:5;"></div>
      </div>
    </div>
    <div class="content">
      <p>
        <Icon name="AcUnitFilled">
        </Icon>
        <span :style="fontColor">{{ props.topContent }}</span>
      </p>
      <p :style="fontColor">{{ props.bottomContent }}</p>
    </div>
  </article>
</template>

<style scoped lang="css">
@import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap');
article {
  *,
  *:after,
  *:before {
    box-sizing: border-box;
  }
  touch-action: none;
  font-family: 'SF Pro Text', 'SF Pro Icons', 'AOS Icons', 'Helvetica Neue',
  Helvetica, Arial, sans-serif, system-ui;
  aspect-ratio: 2 / 1.1;
  max-height: calc(100svh - 2rem);
  position: relative;
  overflow: hidden;
  max-width: calc(100% - 2rem);
  border-radius: 4em;
  user-select: none;
}
:root {
  --x: 0;
  --y: 0;
}
.assets {
  inset: 0;
}
.assets > img {
  position: absolute;
  top: 0;
  left: 50%;
  translate: -50% 0;
  height: 100%;
  width: 110%;
  object-fit: cover;
  object-position: center 43%;
  user-select: none;
  pointer-events: none;
}
.assets > img:first-of-type {
  filter: saturate(1.5) brightness(0.9);
  object-position: calc(-50% + (var(--x) * 30px)) calc(43% + (var(--y) * -20px));
}
.assets > img:last-of-type {
  object-position: calc(-50% + (var(--x) * 40px)) calc(43% + (var(--y) * -40px));
}
.assets h3 {
  animation-duration: .3s;
  position: absolute;
  left: 40%;
  top: 6%;
  margin: 0;
  font-size: 8rem;
  translate: -50% 0;
  text-transform: uppercase;
  font-family: 'Bebas Neue', sans-serif;
  translate: calc(-90% + (var(--x) * -30px)) calc(var(--y) * -20px);
}
.content {
  min-height: 32%;
  position: absolute;
  bottom: 0;
  width: 100%;
  display: grid;
  gap: 0.2rem;
  place-items: center;
  align-content: center;
  padding-bottom: 0.5rem;
  z-index: 2;
}
.content p {
  margin: 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.2rem;
  position: relative;
}
.content p:first-of-type::after {
  content: '';
  position: absolute;
  bottom: calc(100% + 1rem);
  left: 50%;
  width: 6ch;
  background: white;
  height: 1px;
  translate: -50% 0;
}
.content p:last-of-type {
  opacity: 0.8;
}
.blur {
  --layers: 5;
  position: absolute;
  inset: 0;
}
.blur .layer {
  --blur: calc(sin(((var(--layers) - var(--index)) / var(--layers)) * 90deg) * 30);
  --stop: calc(sin(((var(--index)) / var(--layers)) * 90deg) * 15);
  position: absolute;
  inset: 0;
  background: hsl(0 0% 60% / 0.05);
  backdrop-filter: blur(calc(var(--blur) * 1px));
  mask: radial-gradient(150% 130% at 45% 90%,
  #fff 15%,
  #0000 calc((15 + var(--stop)) * 1%));
}
</style>