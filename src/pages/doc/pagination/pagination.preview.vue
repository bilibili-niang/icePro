<preview>
message-normal
</preview>
<template>
  <div class="ice-column">
    <ice-text>
      分页器
    </ice-text>
  </div>
  <container>
    <ice-column>
      <ice-text>pageIndex:{{ pageIndex }}</ice-text>
      <ice-text>totalSIze:{{ totalSIze }}</ice-text>
      <ice-pagination v-model="pageIndex" :total="totalSIze" next prev/>
    </ice-column>
  </container>
</template>
<script setup>
import icePagination from "@/components/pagination/src/ice-pagination.vue";
import {ref} from "vue";

let pageIndex = ref(1);
let totalSIze = ref(50);
totalSIze.value = parseInt(Math.random(100) * 100);
</script>
