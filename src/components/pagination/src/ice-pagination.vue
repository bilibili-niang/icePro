<template>
  <div class="ice-pagination">
    <ice-row>
      <template v-for="(item,index) in tempTotal" :key="index">
        <ice-tag v-if="item<=total" finger noselect @click="changePageIndex(item)">
          {{ item }}
        </ice-tag>
        <template v-if="bottomPageIndex[0]===tempTotal[index]">
          <template v-for="(item,index) in bottomPageIndex" :key="index">
            <ice-tag v-if="item<=total" color="yinzhu" finger noselect @click="changeValue(item)">
              {{ item }}
            </ice-tag>
          </template>
        </template>
      </template>
    </ice-row>
  </div>
</template>
<script setup>
import {ref, computed} from "vue";
const emits = defineEmits(["update:modelValue", "input", "blur", "focus", "valueChange"]);
let fsPageIndex = ref(1);
const changePageIndex = (index) => {
  fsPageIndex.value = index;
};
const changeValue = (item) => {
  emits("update:modelValue", item);
  emits("valueChange", item);
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
  step: {
    type: Number,
    default: 20
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

let tempTotal = ref([1]);
const init = () => {
  for (let i = 0; i <= props.total; i++) {
    if (i % props.step === 0 && i !== 0) {
      tempTotal.value.push(i);
    }
  }
};
init();
// 子列表
const bottomPageIndex = computed(() => {
  const tempIndex = tempTotal.value.filter(item => item === fsPageIndex.value);
  return Array.from({length: props.step}, (_, i) => i + tempIndex[0]);
});
</script>
