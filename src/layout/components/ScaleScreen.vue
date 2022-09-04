<template>
  <div :style="style">
    <slot />
  </div>
</template>
<script setup lang="ts">
import { onMounted, onUnmounted, ref, nextTick } from 'vue'

interface Props {
  height?: number
  width?: number
}

const props = withDefaults(defineProps<Props>(), {
  height: 1080,
  width: 1920,
})

const tran = ref('scale(1) translate(-50%, -50%)')
const style = ref({
  width: props.width + 'px',
  position: 'absolute',
  transform: tran,
  transformOrigin: '0 0',
  height: props.height + 'px',
  top: '50%',
  left: '50%',
  background: '#eee',
})

//按比例自适应
function changeSize(re = false) {
  const htmlDom = document.documentElement

  let vw = 1
  let w = htmlDom.clientWidth
  let h = htmlDom.clientHeight
  let w_tran = (htmlDom.clientWidth / props.width) * vw
  let h_tran = htmlDom.clientHeight / props.height

  if (props.height * w_tran <= h) {
    tran.value =
      'scale(' +
      (htmlDom.clientWidth / props.width) * vw +
      ') translate(-50%, -50%)'
  } else {
    let s = htmlDom.clientHeight / props.height
    tran.value = 'scale(' + s + ') translate(-50%, -50%)'
  }
  htmlDom.style.height = htmlDom.clientHeight + 'px'
  if (!re) {
    nextTick(() => {
      changeSize(true)
    })
  }
}

onMounted(() => {
  changeSize()
  //尺寸按比例自适应
  window.addEventListener('resize', function () {
    changeSize()
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', function () {
    changeSize()
  })
})

const cont = `<div onclick="">button</div>`
</script>

<style>
/*全局样式*/
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
html {
  background-color: black;
}
</style>