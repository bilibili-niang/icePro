<template>
  <ice-card class="preview-card" :border="false">
    <template v-slot:header>
      <ice-header noselect>
        {{ component?.__sourceCodeTitle }}
      </ice-header>
    </template>
    <template v-slot:body>
      <div class="pre-component">
        <component :is="component" />
      </div>
    </template>
    <template v-slot:bottom>
      <div class="pre-code ice-column w100percent">
        <div class="m-top-n m-bottom-l" v-if="component.__sourceCode">
          <ice-tag>html:</ice-tag>
        </div>
        <pre class="language-html" v-html="html" />

        <div class="m-top-n m-bottom-l" v-if="component.__script">
          <ice-tag>script:</ice-tag>
        </div>
        <pre v-if="component.__script" class="language-javascript" v-html="script" />

        <div class="m-top-n m-bottom-l" v-if="component.__styleCode">
          <ice-tag>css:</ice-tag>
        </div>
        <pre v-if="component.__styleCode" class="language-css" v-html="css" />
      </div>
    </template>
  </ice-card>
</template>

<script setup>
import 'prismjs'
import 'prismjs/themes/prism-tomorrow.min.css'
import { computed, ref, watch } from 'vue'

const isOpen = ref(false)

const props = defineProps({
  component: Object,
  content: {
    type: String,
    default: ''
  },
  layout: {
    type: Boolean,
    default: false
  }
})

function handleClick() {
  isOpen.value = !isOpen.value
}

const Prism = window.Prism

const html = computed(() => {
  return Prism.highlight(props.component?.__sourceCode || '-', Prism.languages.html, 'html')
})
const css = computed(() => {
  return Prism.highlight(props.component?.__styleCode || '-', Prism.languages.css, 'css')
})

const script = computed(() => {
  return Prism.highlight(props.component?.__script || '-', Prism.languages.javascript, 'javascript')
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
  font-size: 0.75rem;
  font-weight: bold;

  .token .tag {
    color: gray;
  }

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

:deep(.ice-title) {
  h4 {
    &:before {
      content: '>';
      font-weight: lighter;
      margin-right: 0;
      opacity: 0;
      transition: 0.5s;
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

.preview-card {
  margin-bottom: 3rem !important;
}
</style>
