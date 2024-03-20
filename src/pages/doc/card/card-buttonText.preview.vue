<preview>
card-normal
</preview>
<template>
  <ice-column>
    <ice-text noselect>
      自定义按钮关闭/展开的文字,使用
      <ice-tag>button-text</ice-tag>
      传入数组
    </ice-text>
    <ice-text noselect>
      第一个为
      <ice-tag color="shihong">关闭</ice-tag>
      的按钮文字,第二个为
      <ice-tag color="shihong">
        展开
      </ice-tag>
      的按钮文字
    </ice-text>
  </ice-column>

  <container>
    <ice-card :buttonText="['fold','unfold']">
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
      <template #bottom>
        <ice-column>
          你干嘛,哎呦~
        </ice-column>
      </template>
    </ice-card>
  </container>
</template>
