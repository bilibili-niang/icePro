<template>
  <div class='ice-title' :class="[noselect?'noselect':'']" :title="title">
    <h4 class="slot" :class="[type,size]">
      <slot/>
    </h4>
  </div>
</template>

<script setup>
defineProps({
  type: {
    type: String,
    default: 'normal'
  },
  size: {
    type: String,
    default: 'n'
  },
  title: {
    type: String,
    default: ''
  },
  noselect: {
    type: Boolean,
    default: false
  }
})
</script>
<script>
export default {
  name: 'ice-title'
}
</script>
<style lang='less' scoped>
@import '../../assets/variables.less';

.ice-title {
  color: @themeColor;
  display: flex;
}

// size
.n {
  flex-direction: row;
  font-size: @fontSize-n;
  margin-left: @m-normal;
  padding: @p-normal;
}

// size
.l {
  font-size: @fontSize-l;
  margin-top: @m-large;
  margin-bottom: @m-large;
  font-weight: @fontWeight-l-su;
}
</style>
