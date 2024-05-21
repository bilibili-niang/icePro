<preview>
tabs-normal
</preview>

<template>
  <ice-text>基础使用</ice-text>

  <container class="ice-column">
    <ice-tabs v-model="activeName">

      <ice-tab-item label="first" name="白日梦想家">
        <ice-card :border="false">
          <template v-slot:header>
            <ice-title>
              白日梦想家
            </ice-title>
          </template>
          <template v-slot:body>
            <ice-text>
              Beautiful things don't ask for attention.
            </ice-text>
            <ice-text>
              真正美丽的东西，并不会刻意寻求别人的目光。
            </ice-text>
          </template>
        </ice-card>
      </ice-tab-item>

      <ice-tab-item label="second" name="宇宙探索编辑部">
        <ice-text>
          数学就是太确定了，所以我喜欢语文。我知道诗歌只是人类情感沟通的工具，数学才是全宇宙通用的语言，但我就是讨厌这种确定
        </ice-text>
      </ice-tab-item>


      <ice-tab-item label="second" name="I GOT SMOKE">
        <ice-text>
          满身烟味的我 走路带上点浮夸
        </ice-text>
        <ice-text>
          想买悦刻五代找我丁真就对了
        </ice-text>
      </ice-tab-item>

    </ice-tabs>
  </container>

</template>

<script setup>
import {ref} from 'vue'

const activeName = ref('白日梦想家');

</script>
