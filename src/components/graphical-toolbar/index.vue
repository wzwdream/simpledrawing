<template>
  <section class="toolbar-card">
    <div class="toolbar-row">
      <BtnGroup :iconBtns="graphics" :activeName="canvasStore.selectedGraphics" width="40px" height="40px" @click="handleClick" />
    </div>
    <div v-show="canvasStore.selectedElement.length === 0" class="toolbar-text">如果需要移动画布，请先按住空格在拖动鼠标</div>
  </section>
</template>

<script setup lang="ts" name="GraphicalToolbar">
import { useCanvas } from '@/store/canvas'
import { inputFile } from '@/utils/canvasHandle'
import { useStyleToolbar } from '@/store/styleToolbar'

const canvasStore = useCanvas()

const graphics = [
  { iconName: 'select', descriptiveText: '选择-1' },
  { iconName: 'rect', descriptiveText: '矩形-2' },
  { iconName: 'rhombus', descriptiveText: '菱形-3' },
  { iconName: 'circle', descriptiveText: '圆/椭圆-4' },
  { iconName: 'arrows', descriptiveText: '箭头-5' },
  { iconName: 'line', descriptiveText: '线条-6' },
  { iconName: 'painting', descriptiveText: '自由绘画-7' },
  { iconName: 'text', descriptiveText: '文字-8' },
  { iconName: 'image', descriptiveText: '图片-9' }
]
const handleClick = (iconName: string): void => {
  const styleStore = useStyleToolbar()
  styleStore.$reset()
  canvasStore.selectedGraphics = iconName
  if (iconName === 'image') inputFile('image/*')
}
</script>

<style scoped>
.toolbar-card {
  width: 460px;
  position: absolute;
  top: 10px;
  left: 260px;
}
.toolbar-text {
  position: absolute;
  top: 60px;
  left: 80px;
  user-select: none;
}
</style>
