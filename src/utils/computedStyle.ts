import { useCanvas } from '@/store/canvas'
import { useStyleToolbar } from '@/store/styleToolbar'

export const colorStye = (color: string): string => {
  if (color === '#transparent') return 'transparent'
  return color
}

export const reverseColorStye = (color: string): string => {
  if (color === null || color === 'transparent') return '#transparent'
  return color
}

export const strokeWidthStyle = (strokeWidth: string): number => {
  if (strokeWidth === 'thinLine') return 1
  if (strokeWidth === 'thickLine') return 3
  return 2
}

export const reverseStrokeWidthStyle = (strokeWidth: number): string => {
  if (strokeWidth === 1) return 'thinLine'
  if (strokeWidth === 3) return 'thickLine'
  return 'normalLine'
}

export const strokeDashArrayStyle = (strokeDashArray: string): number[] => {
  if (strokeDashArray === 'dottedDashedLine') return [1, 1]
  if (strokeDashArray === 'dottedLine') return [5, 5]
  return []
}

export const reverseStrokeDashArrayStyle = (strokeDashArray: number[]): string => {
  // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
  if (!strokeDashArray) return 'line'
  if (strokeDashArray.includes(1)) return 'dottedDashedLine'
  if (strokeDashArray.includes(5)) return 'dottedLine'
  return 'line'
}

export const restStyle = (): void => {
  const canvasStore = useCanvas()
  // canvasStore.selectedElement = canvasStore.selectedElement.filter(item => {
  //   return !((event.deselected?.some(el => item.name === el.name)) ?? false)
  // })
  canvasStore.selectedElement = []
  const styleStore = useStyleToolbar()
  styleStore.$reset()
}
