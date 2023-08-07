<template>
  <ice-card>
    <template v-slot:header>
      <ice-title noselect>
        {{ component.__sourceCodeTitle }}
      </ice-title>
      <!--      <iceButton type="simple" @click="hideCode" color="wanshoujuhuang" v-if="codeVisible">隐藏代码</iceButton>-->
      <!--      <iceButton type="simple" @click="showCode" color="wanshoujuhuang" v-else>查看代码</iceButton>-->
    </template>
    <template v-slot:body>
      <div class="pre-component">
        <component :is="component"/>
      </div>
    </template>
    <template v-slot:bottom>
      <div class="pre-code ice-column w100percent">
        <pre class="language-html" v-html="html"/>
        <pre class="language-css" v-html="css" v-if="component.__styleCode"/>
        <pre class="language-javascript" v-html="script" v-if="component.__script"/>
      </div>
    </template>
  </ice-card>
</template>

<script setup>
import "prismjs"
import "prismjs/themes/prism.css"
import { computed, ref } from "vue"
import IceCard from '@/components/card/ice-card.vue'
import IceTitle from '@/components/text/ice-title.vue'

const Prism = window.Prism

const props = defineProps({
  component: Object,
})

const html = computed(() => {
  return Prism.highlight(
      props.component.__sourceCode,
      Prism.languages.html,
      "html"
  )
})
const css = computed(() => {
  return Prism.highlight(
      props.component.__styleCode,
      Prism.languages.css,
      "css"
  )
})

const script = computed(() => {
  return Prism.highlight(
      props.component.__script,
      Prism.languages.javascript,
      "javascript"
  )
})

const codeVisible = ref(false)
const showCode = () => ( codeVisible.value = true )
const hideCode = () => ( codeVisible.value = false )

</script>
<style lang="less" scoped>
@border-color: #d9d9d9;

.pre {
  border: 1px solid @border-color;
  margin: 16px 0 32px;
  width: 100%;

  .title {
    justify-content: space-between;
  }

  .pre-code {
    border-top: 1px dashed @border-color;
    transition-duration: .5s;
    overflow-y: hidden;
    font-size: @fontSize-n;

    > pre {
      line-height: 1;
      margin: 0;
    }
  }

  .hideCode {
    height: 0;
  }

  .showCode {
    height: 100%;
  }
}

*::selection {
  color: red !important;
}
</style>
