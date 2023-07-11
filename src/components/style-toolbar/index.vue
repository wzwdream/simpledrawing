<template>
  <section class="toolbar-card">
    <div v-show="!isImage" class="toolbar-row">
      <span class="toolbar-row-title">描边</span>
      <ColorSelect v-model="styleStore.stroke" @change="(color: string) => colorChange('stroke', color)" />
    </div>
    <div v-show="isShowBg" class="toolbar-row">
      <span class="toolbar-row-title">填充</span>
      <ColorSelect v-model="styleStore.fill" @change="(color: string) => colorChange('fill', color)" />
    </div>
    <div v-show="isText" class="toolbar-row">
      <span class="toolbar-row-title">字体大小</span>
      <div class="toolbar-row-icon tollbar-row-icon2">
        <BtnGroup :iconBtns="fontSize" :activeName="styleStore.fontSize" width="48px" height="26px" @click="(iconName: string) => handleCilck('fontSize', iconName)" />
      </div>
    </div>
    <div v-show="isText" class="toolbar-row">
      <span class="toolbar-row-title">字体</span>
      <div class="toolbar-row-icon">
        <BtnGroup :iconBtns="fontFamily" :activeName="styleStore.fontFamily" width="48px" height="26px" @click="(iconName: string) => handleCilck('fontFamily', iconName)" />
      </div>
    </div>
    <div v-show="isText" class="toolbar-row">
      <span class="toolbar-row-title">文本对齐</span>
      <div class="toolbar-row-icon">
        <BtnGroup :iconBtns="textAlign" :activeName="styleStore.textAlign" width="48px" height="26px" @click="(iconName: string) => handleCilck('textAlign', iconName)" />
      </div>
    </div>
    <div v-show="isShowBg || isLine || isArrows" class="toolbar-row">
      <span class="toolbar-row-title">描边宽度</span>
      <div class="toolbar-row-icon">
        <BtnGroup :iconBtns="strokeWidth" :activeName="styleStore.strokeWidth" width="48px" height="26px" @click="(iconName: string) => handleCilck('strokeWidth', iconName)" />
      </div>
    </div>
    <div v-show="isShowBg || isLine" class="toolbar-row">
      <span class="toolbar-row-title">描边样式</span>
      <div class="toolbar-row-icon">
        <BtnGroup :iconBtns="strokeStyle" :activeName="styleStore.strokeDashArray" width="48px" height="26px" @click="(iconName: string) => handleCilck('strokeDashArray', iconName)" />
      </div>
    </div>
    <div v-show="isRect" class="toolbar-row">
      <span class="toolbar-row-title">边角</span>
      <div class="toolbar-row-icon tollbar-row-icon1">
        <BtnGroup :iconBtns="edges" :activeName="styleStore.edges" width="48px" height="26px" @click="(iconName: string) => handleCilck('edges', iconName)" />
      </div>
    </div>
    <div class="toolbar-row">
      <span class="toolbar-row-title">透明度</span>
      <div class="toolbar-row-icon tollbar-row-icon2">
        <Slider v-model:size="styleStore.opacity" @change="(iconName: string) => handleCilck('opacity', iconName)" />
      </div>
    </div>
    <div class="toolbar-row">
      <span class="toolbar-row-title">图层</span>
      <div class="toolbar-row-icon tollbar-row-icon2">
        <BtnGroup :iconBtns="layer" :checkActived="false" width="48px" height="26px" @click="movementLayer" />
      </div>
    </div>
    <div class="toolbar-row">
      <span class="toolbar-row-title">操作</span>
      <div class="toolbar-row-icon tollbar-row-icon1">
        <BtnGroup :iconBtns="handle" :checkActived="false" width="48px" height="26px" @click="handleEvent" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts" name="StyleToolbar">
import { styleStoreType, useStyleToolbar } from '@/store/styleToolbar'
import { useCanvas } from '../../store/canvas'
import { updateCanvasStyle, copyGraphics, deleteGraphics, movementLayer } from '@/utils/canvasHandle'
import { debounce } from '@/utils/help'
import { colorStye, strokeDashArrayStyle, strokeWidthStyle } from '@/utils/computedStyle'

const styleStore = useStyleToolbar()
const canvasStore = useCanvas()

const isText = computed(() => {
  const isTextBox = canvasStore.selectedElement.some(item => item.type === 'textbox')
  return canvasStore.selectedGraphics === 'text' || isTextBox
})
const isImage = computed(() => {
  const isImage = canvasStore.selectedElement.some(item => item.type === 'image')
  return canvasStore.selectedGraphics === 'image' || isImage
})
const isShowBg = computed(() => {
  const isShow = canvasStore.selectedElement.some(item => (item.type === 'rect' || item.type === 'ellipse' || item.type === 'polygon'))
  return (canvasStore.selectedGraphics === 'rect' || canvasStore.selectedGraphics === 'rhombus' || canvasStore.selectedGraphics === 'circle') || isShow
})
const isLine = computed(() => {
  const isShow = canvasStore.selectedElement.some(item => item.type === 'line')
  return canvasStore.selectedGraphics === 'line' || isShow
})
const isRect = computed(() => {
  const isShow = canvasStore.selectedElement.some(item => item.type === 'rect')
  return canvasStore.selectedGraphics === 'rect' || isShow
})
const isArrows = computed(() => {
  const isShow = canvasStore.selectedElement.some(item => item.name && item.name?.indexOf('arrow') > -1)
  return canvasStore.selectedGraphics === 'rect' || isShow
})
const debounceApply = debounce(updateCanvasStyle, 50)
const debounceApply1 = debounce(updateCanvasStyle, 300)
// 颜色变化
type key = keyof styleStoreType
const colorChange = (type: key, color: string) => {
  const styleStore = useStyleToolbar()
  styleStore[type] = color as never
  debounceApply1(type, colorStye(color))
}
// 其它属性变化
const handleCilck = (type: key, iconName: string): void => {
  const styleStore = useStyleToolbar()
  styleStore[type] = iconName as never
  let value: number | string | number[] = iconName
  if (type === 'strokeWidth') value = strokeWidthStyle(iconName)
  if (type === 'strokeDashArray') value = strokeDashArrayStyle(iconName)
  debounceApply(type, value as string)
}
// 操作
const handleEvent = (iconName: string): void => {
  if (iconName === 'copy') copyGraphics()
  if (iconName === 'delete') deleteGraphics()
}
// 字体大小
const fontSize = [
  { iconName: '14', descriptiveText: '小号', slotText: 'S' },
  { iconName: '18', descriptiveText: '中等', slotText: 'M' },
  { iconName: '22', descriptiveText: '大号', slotText: 'L' },
  { iconName: '26', descriptiveText: '超大号', slotText: 'XL' }
]

// 字体
const fontFamily = [
  { iconName: 'ourier New', descriptiveText: 'ON字体', slotText: 'ON' },
  { iconName: 'Arial', descriptiveText: '默认', slotText: 'NOR' },
  { iconName: 'Comic Sans MS', descriptiveText: 'CSM字体', slotText: 'CSM' }
]

// 文本对齐
const textAlign = [
  { iconName: 'left', descriptiveText: 'left' },
  { iconName: 'center', descriptiveText: 'center' },
  { iconName: 'right', descriptiveText: 'right' }
]

// 描边宽度
const strokeWidth = [
  { iconName: 'thinLine', descriptiveText: '细' },
  { iconName: 'normalLine', descriptiveText: '适中' },
  { iconName: 'thickLine', descriptiveText: '粗' }
]

// 描边样式
const strokeStyle = [
  { iconName: 'line', descriptiveText: '实线' },
  { iconName: 'dottedLine', descriptiveText: '虚线' },
  { iconName: 'dottedDashedLine', descriptiveText: '点虚线' }
]

// 边角
const edges = [
  { iconName: 'rightAngle', descriptiveText: '直角' },
  { iconName: 'roundedCorners', descriptiveText: '圆角' }
]

// 图层
const layer = [
  { iconName: 'top', descriptiveText: '置于顶层' },
  { iconName: 'bottom', descriptiveText: '置于底层' },
  { iconName: 'up', descriptiveText: '上移一层' },
  { iconName: 'down', descriptiveText: '下移一层' }
]

// 操作
const handle = [
  { iconName: 'copy', descriptiveText: '复制' },
  { iconName: 'delete', descriptiveText: '删除' }
]
</script>

<style scoped>
.toolbar-card {
  position: absolute;
  top: 100px;
  left: 10px;
  max-height: 540px;
  overflow: hidden auto;
}

.toolbar-row {
  flex-direction: column;
  align-items: start;
  height: 50px;
}

.toolbar-row-title {
  user-select: none;
  margin-left: 10px;
  font-weight: 700;
}

.toolbar-row-icon {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

.toolbar-row-icon {
  width: 200px;
}

.tollbar-row-icon1 {
  width: 130px;
}

.tollbar-row-icon2 {
  width: 220px;
  margin-left: 6px;
}</style>
