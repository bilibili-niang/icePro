<preview>
textarea-normal
</preview>
<template>
  <ice-text>
    最基础的
  </ice-text>

  <container>
    <ice-textarea v-model="word"></ice-textarea>
    {{ word }}
  </container>
</template>

<script setup>
import {ref} from "vue";

const word = ref("但使龙城飞将在,不教胡马度阴山.");

</script>
