// 样式存储
import { defineStore } from 'pinia'

export const useContextMenu = defineStore({
  id: 'contextMenu',
  state: () => {
    return {
      visibile: false,
      positionX: 0,
      positionY: 0,
      width: 0,
      height: 0
    }
  }
})
