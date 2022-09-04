<template>
  <ScaleScreen>
    <router-view></router-view>
  </ScaleScreen>
</template>

<script setup lang="ts">
import ScaleScreen from './components/ScaleScreen.vue'
</script>

<style lang="scss" scoped>
.box {
  background: red;
  width: 600px;
  height: 800px;
}
</style>
