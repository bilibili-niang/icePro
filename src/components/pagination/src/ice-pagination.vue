<template>
  <div class="ice-pagination">
    <ice-row>
      <template v-for="(item,index) in tempTotal" :key="index">
        <ice-tag @click="changePageIndex(item)">
          {{ item }}
        </ice-tag>
      </template>

    </ice-row>

    <ice-row>
      <template v-for="(item,index) in bottomPageIndex" :key="index">
        <ice-tag>
          {{ item }}
        </ice-tag>
      </template>
    </ice-row>
  </div>
</template>
<script setup>
import {defineProps, defineEmits, ref, computed} from "vue";

// const emits =
defineEmits(["update:modelValue", "input", "blur", "focus"]);

let fsPageIndex = ref(1);
const changePageIndex = (index) => {
  fsPageIndex.value = index;
};
const props = defineProps({
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

/*f
const changePage = (index) => {
  emits("update:modelValue", index);
};
*/
let tempTotal = ref([1]);
const init = () => {
  for (let i = 0; i <= props.total; i++) {
    if (i % 5 === 0 && i !== 0) {
      tempTotal.value.push(i);
    }
  }
};
init();

// 子列表
// eslint-disable-next-line vue/return-in-computed-property
const bottomPageIndex = computed(() => {
  console.log(tempTotal.value);
  console.log(fsPageIndex.value);
  if (fsPageIndex.value === 1) {
    return Array.from({length: 5}, (_, i) => i + 1);
  } else {
    console.log("tempTotal.value:");
    console.log(tempTotal.value);
  }
});

</script>

<style lang="less" scoped>

</style>