// 样式存储
import { defineStore } from 'pinia'
export interface styleStoreType {
  stroke: string
  fill: string
  strokeWidth: string
  strokeDashArray: string
  edges: string
  opacity: number
  fontSize: string
  fontFamily: string
  textAlign: string
}
export const useStyleToolbar = defineStore({
  id: 'styleToolbar',
  state: () => {
    return {
      stroke: '#000000',
      fill: '#transparent',
      strokeWidth: 'thinLine',
      strokeDashArray: 'line',
      edges: 'rightAngle',
      opacity: 1,
      fontSize: '18',
      fontFamily: 'Arial',
      textAlign: 'left'
    }
  }
})
