<preview>
text-underLine
</preview>
<template>
  <ice-text>
    支持
    <ice-tag>underLine</ice-tag>
    的传入
    ,
    默认为
    <ice-tag>false</ice-tag>
    ,
    当然也可以传入
    <ice-tag>color</ice-tag>
    控制它的颜色
  </ice-text>
  <show>
    <div class="lim">
      <ice-text underLine>
        晴空一鹤排云上
      </ice-text>
      <ice-text underLine color="tieshuihong">
        晴空一鹤排云上
      </ice-text>
    </div>
  </show>
</template>

<script setup>
</script>
<style lang='less' scoped>
.lim {
  width: 600px;
  overflow: hidden;
}

</style>
