<template>
  <div v-if=dashed :class="type" class="split dashed"></div>
  <div v-else :class="type" class='split'></div>
</template>

<script setup>
import {defineProps} from "vue";

defineProps({
  type: {
    type: String,
    default: "landscape"
  },
  dashed: {
    type: Boolean,
    default: false
  }
});
</script>
<script>
export default {
  name: "iceSplit"
};

</script>
<style lang='less' scoped>
@import '../../assets/variables.less';

.split{
  border-color: @themeColor-bleak;
  margin-bottom: @m-large;
  margin-top: @m-normal;
}

.dashed{
  border-style: dashed !important;
  border-bottom: @themeColor 1px solid;
}

.landscape{
  width: 100%;
  border-bottom: @themeColor 1px solid;
}

.vertical{
  width: 0;
  height: 100%;
  min-height: 3rem;
  border-right: @themeColor 1px solid;
  margin-right: @m-large;
  margin-bottom: @m-normal;
}
</style>
