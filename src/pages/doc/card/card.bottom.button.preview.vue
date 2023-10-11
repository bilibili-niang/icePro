<preview>
card-normal
</preview>
<template>
  <ice-text noselect>
    使用具名插槽
    <ice-tag>bottom</ice-tag>
    来配置底部需要显示的内容
  </ice-text>
  <container>
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
      <template v-slot:bottom>
        <div class="ice-column">
          <ice-title>
            渭城曲 朝代：唐朝|作者：王维
          </ice-title>
          <ice-text>
            渭城朝雨浥轻尘， 客舍青青柳色新。
          </ice-text>
          <ice-text>
            劝君更尽一杯酒， 西出阳关无故人。
          </ice-text>
        </div>
      </template>
    </ice-card>
  </container>
</template>

