import { useCanvas } from '@/store/canvas'
import { useStyleToolbar } from '@/store/styleToolbar'
import type { Canvas, IEvent } from 'fabric/fabric-impl'
import { reverseColorStye, reverseStrokeDashArrayStyle, reverseStrokeWidthStyle } from './computedStyle'

export const updateCanvas = (canvasExample: Canvas): void => {
  const canvasStore = useCanvas()
  // 做一次深克隆，保证更新的数据能够实时更新到localStorage中
  canvasStore.canvasExample = JSON.parse(JSON.stringify(canvasExample))
}

export const updateSelected = (canvasExample: Canvas): void => {
  const canvasStore = useCanvas()
  if (canvasStore.selectedGraphics === 'select') {
    canvasExample.selection = true
    canvasExample.selectionColor = 'rgba(100, 100, 255, 0.3)'
    canvasExample.selectionBorderColor = 'rgba(255, 255, 255, 0.3)'
    canvasExample.skipTargetFind = false // 允许选中
  } else {
    canvasExample.selectionColor = 'transparent'
    canvasExample.selectionBorderColor = 'transparent'
    canvasExample.skipTargetFind = true // 禁止选中
  }
  updateCanvas(canvasExample)
}

export const restSelectedElement = (): void => {
  const canvasStore = useCanvas()
  canvasStore.selectedElement = []
}

export const resetSelection = (): void => {
  const canvasStore = useCanvas()
  if (!canvasStore.lockStatus) {
    canvasStore.selectedGraphics = 'select'
  }
}

export const GenNonDuplicateID = (prefix: string): string => {
  return prefix + '-' + Number(Math.random().toString().slice(3, 12) + String(Date.now())).toString(36)
}

// 防抖函数
type Timer = ReturnType<typeof setTimeout>
export function debounce<T extends (...args: any[]) => void> (func: T, delay: number): (...args: Parameters<T>) => void {
  let timer: Timer | null

  return (...args: Parameters<T>): void => {
    if (timer != null) {
      clearTimeout(timer)
    }

    timer = setTimeout(() => {
      func(...args)
      timer = null
    }, delay)
  }
}
// 节流函数
export function throttle<T extends (...args: any[]) => void> (func: T, delay: number): any {
  let timeout: any
  let lastArgs: any

  const throttled = function (...args: any[]): void {
    lastArgs = args
    if (timeout == null) {
      timeout = setTimeout(() => {
        timeout = null
        if (lastArgs != null) {
          func.apply(null, lastArgs)
          lastArgs = null
        }
      }, delay)
    }
  }

  return throttled
}

// 初始化的一些操作

// 恢复本地记录
export const loadFromJson = (canvasExample: Canvas, json: any): void => {
  const canvasStore = useCanvas()
  canvasExample.loadFromJSON(json, () => {
    // 序列化后图形的name属性会丢失，需要在恢复的时候添加上
    canvasExample.getObjects().forEach(item => {
      item.name = GenNonDuplicateID(item.type as string)
      if (item.type === 'path') {
        let path = ''
        const aItem: fabric.Path = item as fabric.Path
        aItem.path?.forEach((element: any) => {
          path += element[0] as string
        })
        path === 'MLMLL' && (item.name = GenNonDuplicateID('arrows'))
      }
    })
    canvasStore.$reset()
    setTimeout(() => {
      updateCanvas(canvasExample)
    }, 0)
  })
}

// 更新样式
export const selectedChange = (event: IEvent<MouseEvent>): void => {
  const styleStore = useStyleToolbar()
  const canvasStore = useCanvas()
  canvasStore.selectedElement = []
  const len = event.selected?.length
  event.selected?.forEach((item: any) => {
    canvasStore.selectedElement.push({ name: item.name as string, type: item.type as string })
    if (len === 1) {
      styleStore.stroke = reverseColorStye(item.stroke as string)
      styleStore.fill = reverseColorStye(item.fill as string)
      styleStore.strokeWidth = reverseStrokeWidthStyle(item.strokeWidth as number)
      styleStore.strokeDashArray = reverseStrokeDashArrayStyle(item.strokeDashArray as number[])
      styleStore.edges = item.edges === 0 ? 'rightAngle' : 'roundedCorners'
      styleStore.opacity = item.opacity as number
      styleStore.fontSize = String(item.fontSize)
      styleStore.fontFamily = item.fontFamily as string
      styleStore.textAlign = item.textAlign as string
      if (item.type === 'textbox') {
        styleStore.stroke = reverseColorStye(item.fill as string)
      }
    }
  })
}
