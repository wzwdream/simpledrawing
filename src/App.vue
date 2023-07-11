
<template>
  <div class="content" ref="content">
    <div class="toolbar">
      <CanvasToolbar />
      <GraphicalToolbar />
      <StyleToolbar v-show="showToolbar" />
      <OperationToolbar />
    </div>
    <div class="canvas">
      <canvas ref="canvasEl"></canvas>
    </div>
    <UploadFile />
    <ContextMenu />
    <!-- <UserManual /> -->
  </div>
</template>

<script setup lang="ts">
import { resize, canvasInit } from '@/utils/canvasHandle'
import { onPagedown, onPageUp } from '@/utils/keyboardEvents'
import { useCanvas } from './store/canvas'

const content = ref<HTMLDivElement>()
const canvasEl = ref<HTMLCanvasElement>()

const canvasStore = useCanvas()
const showToolbar = computed(() => {
  return canvasStore.selectedElement.length > 0 || canvasStore.selectedGraphics !== 'select'
})
onMounted(() => {
  if (canvasEl.value && content.value) {
    canvasInit(canvasEl.value, content.value)
    resize(content.value)

    document.addEventListener('keydown', onPagedown)
    document.addEventListener('keyup', onPageUp)
  }
})

</script>

<style scoped>
.content {
  position: relative;
  height: 100%;
  width: 100%;
  background: var(--bg-color);
}

.toolbar,
.canvas {
  height: 100%;
  width: 100%;
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
}

.toolbar {
  width: 0;
}

.canvas {
  z-index: 1;
}
</style>
