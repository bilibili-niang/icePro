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

      pageIndex:{{ pageIndex }}
      <ice-pagination v-model="pageIndex" :total="50" next prev/>

    </ice-column>
  </container>
</template>
<script setup>
import icePagination from "@/components/pagination/src/ice-pagination.vue";
import {ref} from "vue";

let pageIndex = ref(1);
</script>
