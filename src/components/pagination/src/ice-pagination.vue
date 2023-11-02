<template>
  <div class="ice-pagination">
    <ice-text>
      <!-- {{ index }}%{{ pageStep }}:{{ index % pageStep }}-->
      <template v-for="(item,index) in total" :key="index">
        <ice-tag v-if="(index%pageStep===0 || index===1 ) && index!==0" @click="changePage(index)">
          {{ index }}
          <!--{{ item }}-->
        </ice-tag>
      </template>
    </ice-text>
  </div>
</template>
<script setup>
import {defineProps, defineEmits} from "vue";

const emits = defineEmits(["update:modelValue", "input", "blur", "focus"]);

defineProps({
  modelValue: {
    type: [String, Number],
    default: ""
  },
  total: {
    type: Number,
    default: 0
  },
  pageSize: {
    type: Number,
    default: 10
  },
  prev: {
    type: Boolean,
    default: false
  },
  next: {
    type: Boolean,
    default: false
  },
  pageStep: {
    type: Number,
    default: 5
  }
});

const changePage = (index) => {
  emits("update:modelValue", index);
};

</script>

<style lang="less" scoped>

</style>