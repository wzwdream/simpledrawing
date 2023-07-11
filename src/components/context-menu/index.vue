<template>
  <section v-show="contextMenuStore.visibile" ref="menuEl" class="context-menu">
    <div class="menu-row">
      <div class="menu-text" @click="handleClick('copyToClipboard')">
        <span>复制svg到剪切板</span>
        <span class="clue">Control+Shift+A</span> </div>
      <div class="menu-text" @click="handleClick('selectAll')">
        <span>全部选中</span>
        <span class="clue">Control+A</span>
      </div>
    </div>
    <div class="menu-row" v-show="canvasStore.selectedElement.length > 0">
      <div class="menu-text" @click="handleClick('up')">
        <span>上移一层</span>
        <span class="clue">Control+U</span>
      </div>
      <div class="menu-text" @click="handleClick('down')">
        <span>下移一层</span>
        <span class="clue">Control+P</span>
      </div>
      <div class="menu-text"  @click="handleClick('top')">
        <span>移至顶层</span>
        <span class="clue">Control+T</span>
      </div>
      <div class="menu-text"  @click="handleClick('bottom')">
        <span>移至底层</span>
        <span class="clue">Control+B</span>
      </div>
    </div>
    <div class="menu-row" v-show="canvasStore.selectedElement.length > 0">
      <div class="menu-text" @click="handleClick('copyGraphics')">
        <span>复制</span>
        <span class="clue">Control+D</span>
      </div>
      <div class="menu-text" @click="handleClick('deleteGraphics')">
        <span>删除</span>
        <span class="clue">DELETE/Backspace</span>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts" name="ContextMenu">
import { useContextMenu } from '@/store/contextMenu'
import { useCanvas } from '../../store/canvas'
import { selectAll, deleteGraphics, copyGraphics, movementLayer, copyToClipboard } from '@/utils/canvasHandle'

const contextMenuStore = useContextMenu()
const canvasStore = useCanvas()
// 计算右键菜单位置
const menuEl = ref()
const position = computed(() => {
  let pointX = contextMenuStore.positionX + 10
  let pointY = contextMenuStore.positionY + 10
  if (menuEl.value) {
    const height = menuEl.value.offsetHeight
    const width = menuEl.value.offsetWidth
    if (contextMenuStore.width - pointX <= width) {
      pointX -= (width + 20)
    }
    if (contextMenuStore.height - pointY <= height) {
      pointY -= height
    }
  }
  return {
    pointX: pointX + 'px',
    pointY: pointY + 'px'
  }
})
// 点击事件
const handleClick = (name: string): void => {
  contextMenuStore.visibile = false
  if (name === 'selectAll') selectAll()
  if (name === 'copyGraphics') copyGraphics()
  if (name === 'deleteGraphics') deleteGraphics()
  if (name === 'copyToClipboard') copyToClipboard()
  if (name === 'up' || name === 'down' || name === 'top' || name === 'bottom') movementLayer(name)
}
</script>

<style scoped>
.context-menu {
  position: absolute;
  z-index: 99;
  top: v-bind('position.pointY');
  left: v-bind('position.pointX');
  width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  user-select: none;
  padding: 10px;
  border-radius: var(--border-radius);
  box-shadow: var(--bg-shadow);
  background: var(--background-color);
  color: var(--text-color);
}
.menu-text {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0;
}
.menu-text:hover {
  background: var(--btn-bg-hover-color);
}
.menu-row {
  border-bottom: 1px solid var(--text-color);
}
.clue {
  font-size: 12px;
  color: #ccc;
}
</style>
