<template>
  <div class="ice-tag noselect" :class="[type,
  round?'round':'defaultRound',
  size?`size-${size}`:'size-default'
  ]">
    <slot></slot>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'normal'
  },
  round: {
    type: Boolean,
    default: false
  },
  size: {
    type: String
  }
})
</script>
<script>
export default {
  name: "iceTag"
}
</script>

<style scoped lang="less">
@import '../../assets/variables.less';

.ice-tag {
  color: @themeColor;
  border-color: @themeColor;
  display: flex;
  background-color: @fonColor-dark-bleak;
  justify-content: center;
}

.normal {
  font-size: @fontSize-n;
}

.defaultRound {
  border-radius: @radio-n;
}

// round
.round {
  border-radius: 50%;
  aspect-ratio: 1;
}

// size
.size-default {
  margin: @m-small @m-normal;
  padding: @p-small @p-normal;
}

.size-large {
  margin: @m-normal @m-large;
  padding: @p-large-su;
}
</style>
