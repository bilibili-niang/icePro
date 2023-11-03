<template>
  <div class="ice-pagination">
    <ice-row>
      <template v-for="(item,index) in tempTotal" :key="index">
        <ice-tag v-if="item<=total" @click="changePageIndex(item)">
          {{ item }}
        </ice-tag>
        <template v-if="bottomPageIndex[0]===tempTotal[index]">
          <template v-for="(item,index) in bottomPageIndex" :key="index">
            <ice-tag v-if="item<=total" color="yinzhu"  @click="changeValue(item)">
              {{ item }}
            </ice-tag>
          </template>
        </template>
      </template>
    </ice-row>
  </div>
</template>
<script setup>
import {defineProps, defineEmits, ref, computed} from "vue";

const emits = defineEmits(["update:modelValue", "input", "blur", "focus"]);

let fsPageIndex = ref(1);
const changePageIndex = (index) => {
  fsPageIndex.value = index;
};
const changeValue = (item) => {
  emits("update:modelValue", item);
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
const bottomPageIndex = computed(() => {
  const tempIndex = tempTotal.value.filter(item => item === fsPageIndex.value);
  return Array.from({length: 5}, (_, i) => i + tempIndex[0]);
});

</script>

<style lang="less" scoped>

</style>