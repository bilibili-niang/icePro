<preview>
ice-split-text
</preview>
<template>
  <ice-text noselect>
    可以使用
    <ice-tag>text</ice-tag>
    传入文字
  </ice-text>
  <ice-text>
    当然也可以使用
    <ice-tag>position</ice-tag>
    指定文字位置,默认是
    <ice-tag>center</ice-tag>
    ,
    还有
    <ice-tag>left</ice-tag>
    /
    <ice-tag>right</ice-tag>
    可以选择
  </ice-text>

  <container>
    <ice-split text="哎哟,你干嘛~"></ice-split>
    <ice-split position="left" text="你是我的,我是你的,谁~"></ice-split>
    <ice-split position="right" text="你是我的,我是你的,谁~"></ice-split>
  </container>

</template>
<script setup>
</script>