<template>
  <ice-card :border="false">
    <template v-slot:header>
      <ice-header noselect>
        {{ component?.__sourceCodeTitle }}
      </ice-header>
    </template>
    <template v-slot:body>
      <div class="pre-component">
        <component :is="component"/>
      </div>
    </template>
    <template v-slot:bottom>
      <div class="pre-code ice-column w100percent">
        <pre class="language-html" v-html="html"/>
        <pre v-if="component.__styleCode" class="language-css" v-html="css"/>
        <pre v-if="component.__script" class="language-javascript" v-html="script"/>
      </div>
    </template>
  </ice-card>
</template>
<script setup>
import "prismjs"
import "prismjs/themes/prism.css"
import { computed } from "vue"

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
  text-shadow: none;
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

/deep/ .ice-title {
  h4 {
    &:before {
      content: '>';
      font-weight: lighter;
      margin-right: 0;
      opacity: 0;
      transition: .5s;
      width: 0;
    }
  }

  &:hover {
    h4 {
      &:before {
        margin-right: 1rem;
        opacity: 1;
        width: fit-content;
      }
    }
  }
}
</style>
