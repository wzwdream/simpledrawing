import type { Canvas } from 'fabric/fabric-impl'
import { defineStore } from 'pinia'

interface CanvasStore {
  canvasExample: Canvas | null
  selectedGraphics: string
  selectedElement: Array<{ name: string, type: string }>
  KeyboardKey: string // 按键值
  scheme: 'DARKSCHEME' | 'LIGHTSCHEME'
  lockStatus: boolean
  zoomLevel: number
}
export const useCanvas = defineStore({
  id: 'canvas',
  state: (): CanvasStore => {
    return {
      canvasExample: null,
      selectedGraphics: 'select',
      selectedElement: [],
      KeyboardKey: '',
      scheme: 'LIGHTSCHEME',
      lockStatus: false,
      zoomLevel: 1
    }
  },
  actions: {
    updateCanvas (canvasExample: Canvas) {
      // 做一次深克隆，保证更新的数据能够实时更新到localStorage中
      this.canvasExample = JSON.parse(JSON.stringify(canvasExample))
    }
  },
  // 开启数据持久化
  persist: {
    storage: window.localStorage
  }
})
