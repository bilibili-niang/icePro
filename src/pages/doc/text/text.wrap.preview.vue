<preview>
text-nowrap
</preview>
<template>
  <ice-text>
    默认换行,
    <ice-tag>nowrap</ice-tag>
    禁止换行
  </ice-text>

  <show>
    <div class="lim">
      <ice-text>
        overhead the albatross，hangs motionless upon the air，
        and deep beneath the rolling waves，
        in labyrinths of coral caves，an echo of a distant time，
        comes willowing across the sand，and everything is green and
        submarine.
      </ice-text>
      <ice-text nowrap>
        overhead the albatross，hangs motionless upon the air，
        and deep beneath the rolling waves，
        in labyrinths of coral caves，an echo of a distant time，
        comes willowing across the sand，and everything is green and
        submarine.
      </ice-text>
    </div>
  </show>
</template>
<style lang='less' scoped>
.lim {
  width: 600px;
  overflow: hidden;
}
</style>
