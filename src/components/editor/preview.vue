<template>
  <ice-card>
    <template v-slot:header>
      <ice-title noselect>
        {{ component.__sourceCodeTitle }}
      </ice-title>
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
import { computed } from "vue"
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

</script>
<style lang="less" scoped>

pre::-webkit-scrollbar {
  display: none;
}

pre {
  width: 100%;
  padding: 0 !important;
  margin: 0 !important;
  font-size: .9rem;
  font-weight: bold;

  .title {
    justify-content: space-between;
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
