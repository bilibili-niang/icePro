<template>
  <div class="inlineStyleDemo">

    <ice-avatar :src="myInfo.avatar" block></ice-avatar>
  </div>
</template>

<script>
export default {
  name: "inlineStyleDemo"
};
</script>
<script setup>
import {ref} from "vue";

const myInfo = ref({
  "name": "张嘉凯",
  "avatar": "https://avatars.githubusercontent.com/u/60811236?v=4",
  "email": {"email1": "killicestone@126.com"},
  "website": "https://blog.icestone.work/#/",
  "phone": 18672148720,
  "summary": {"summary1": "暂无内容"},
  "wechatId": "icestone9",
  "address": "湖北-襄阳"
});
</script>
<style lang="less" scoped>

</style>