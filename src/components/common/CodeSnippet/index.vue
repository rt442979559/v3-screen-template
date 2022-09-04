<template>
  <div>
    <pre v-highlight class="hljs-container" :codetype="codetype">
      <code class="language-js hljs" v-html="code"></code>
    </pre>
  </div>
</template>

<script setup lang="ts" name="CodeSnippet">
import { defineProps } from 'vue'
const porps = defineProps({
  code: {
    type: String,
    default: ''
  },
  codetype:{
    type: String,
    default:'JavaScript'
  }
})
</script>


<style lang="scss">
@import '@/components/common/CodeSnippet/index.scss';
</style>