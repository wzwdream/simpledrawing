<template>
  <section class="toolbar-card">
    <div class="toolbar-row">
      <BtnGroup :iconBtns="operation" :checkActived="false" @click="handleClick" />
    </div>
  </section>
</template>

<script setup lang="ts" name="OperationToolbar">
import { useCanvas } from '@/store/canvas'
import { scalingCanvas, revocationOrrecovery } from '@/utils/canvasHandle'
interface OperationType {
  iconName: string
  descriptiveText: string
  slotText?: string
  width?: string
}
const operation: OperationType[] = reactive([
  { iconName: 'enlarge', descriptiveText: '放大-control + +' },
  { iconName: 'reduce', descriptiveText: '缩小-control + -' },
  reactive({ iconName: 'resetSize', descriptiveText: '重置大小', slotText: '100%', width: '50px' }),
  { iconName: 'revocation', descriptiveText: '撤销-control + z' },
  { iconName: 'recovery', descriptiveText: '恢复-control + p' }
])
const canvasStore = useCanvas()
const handleClick = (icconName: string) => {
  if (icconName === 'enlarge' || icconName === 'reduce' || icconName === 'resetSize') {
    scalingCanvas(icconName)
  }
  if (icconName === 'revocation' || icconName === 'recovery') revocationOrrecovery(icconName)
}
watch(() => canvasStore.zoomLevel, () => {
  operation[2].slotText = (canvasStore.zoomLevel * 100).toFixed(0) + '%'
})
</script>

<style scoped>
.toolbar-card {
  position: absolute;
  bottom: 10px;
  left: 10px;
}
</style>
