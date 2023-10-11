<preview>
card-normal
</preview>
<template>
  <ice-text noselect>
    最基础的内容展现,使用具名插槽
    <ice-tag>header</ice-tag>
    和
    <ice-tag>body</ice-tag>
  </ice-text>
  <container>
    <ice-card>
      <template v-slot:header>
        <ice-title>
          水调歌头-崔与之
        </ice-title>
      </template>
      <template v-slot:body>
        <ice-text>"万里云间戍，立马剑门关。",</ice-text>
        <ice-text>"乱山极目无际，直北是长安。",</ice-text>
        <ice-text>"人苦百年涂炭，鬼哭三边锋镝，天道久应还。",</ice-text>
        <ice-text>"手写留屯奏，炯炯寸心丹。",</ice-text>
      </template>
    </ice-card>
  </container>
</template>

