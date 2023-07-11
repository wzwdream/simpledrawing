<template>
  <section class="toolbar-card">
    <div class="toolbar-row">
      <BtnGroup :iconBtns="iconBtn" :checkActived="false" @click="handleClick" />
      <IconBtn
        :iconName="canvasStore.lockStatus ? 'locking' : 'unlock'"
        width="30px"
        height="30px"
        :background="false"
        :descriptiveText="canvasStore.lockStatus ? '锁定' : '解锁'"
        @click="lockStatusChange"
      />
    </div>
    <div class="toolbar-row">
      <ColorSelect v-model="bgClocor" @change="bgColorChange" />
      <IconBtn
        :iconName="canvasStore.scheme === 'LIGHTSCHEME' ? 'light' : 'dark'"
        width="30px"
        height="30px"
        :background="false"
        :descriptiveText="canvasStore.scheme === 'LIGHTSCHEME' ? '深色' : '浅色'"
        @click="schemeChange"
      />
    </div>
  </section>
</template>

<script setup lang="ts" name="CanvasToolbar">
import useToolbar from '@/hooks/useToolbar'

const { handleClick, canvasStore, schemeChange, lockStatusChange, bgClocor, bgColorChange } = useToolbar()
const iconBtn = [
  { iconName: 'reset', descriptiveText: '重置画布' },
  { iconName: 'inport', descriptiveText: '导入文件' },
  { iconName: 'export', descriptiveText: '导出文件' },
  { iconName: 'exportImage', descriptiveText: '导出图片' }
]
</script>

<style scoped>
.toolbar-card {
  position: absolute;
  top: 10px;
  left: 10px;
}
</style>
