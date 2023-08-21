<preview>
card-border
</preview>
<template>
  <ice-text noselect>
    你可以选择是否展示card的
    <ice-tag>border</ice-tag>
    ,
    如果你选择了
    <ice-tag>border=false</ice-tag>
    ,那么意味着你将不会使用
    <ice-tag color="dahong">!important</ice-tag>
    来设置card的border样式
  </ice-text>
  <show>
    <ice-card :border="false">
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
  </show>
</template>

