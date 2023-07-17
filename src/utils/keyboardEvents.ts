import { useCanvas } from '@/store/canvas'
import { selectAll, deleteGraphics, inputFile, copyGraphics, scalingCanvas, movementLayer, revocationOrrecovery } from './canvasHandle'
import { useStyleToolbar } from '@/store/styleToolbar'
export const onPagedown = (e: KeyboardEvent): void => {
  const canvasStore = useCanvas()
  if (canvasStore.KeyboardKey === e.key) return
  if (canvasStore.KeyboardKey.length === 0) {
    // 单个按键
    canvasStore.KeyboardKey = e.key
    singleEvent(e.key)
  } else {
    // 多个按键
    combinationEvent(e)
  }
}
export const onPageUp = (e: KeyboardEvent): void => {
  const canvasStore = useCanvas()
  if (e.key === canvasStore.KeyboardKey) {
    canvasStore.KeyboardKey = ''
  }
}
// 单个按键
const keys = ['1', '2', '3', '4', '5', '6', '7', '8', '9']
const singleEvent = (key: string): void => {
  const canvasStore = useCanvas()
  if (key === 'Backspace' || key === 'Delete') deleteGraphics()
  if (keys.includes(key)) changeSelected(key)
  if (key === 'q') canvasStore.lockStatus = !canvasStore.lockStatus
}
// 组合按键
const combinationEvent = (e: KeyboardEvent): void => {
  const canvasStore = useCanvas()
  if (canvasStore.KeyboardKey === 'Control') controlEvent(e)
}

// 选择下次绘制的图形
const changeSelected = (key: string): void => {
  const keyMap = new Map([
    ['1', 'select'],
    ['2', 'rect'],
    ['3', 'rhombus'],
    ['4', 'circle'],
    ['5', 'arrows'],
    ['6', 'line'],
    ['7', 'painting'],
    ['8', 'text'],
    ['9', 'image']
  ])
  const styleStore = useStyleToolbar()
  styleStore.$reset()
  const canvasStore = useCanvas()
  canvasStore.selectedGraphics = keyMap.get(key) as string
  if (key === '9') inputFile('image/*')
}

// control组合事件
const controlEvent = (e: KeyboardEvent): void => {
  e.preventDefault()
  if (e.key === 'a') {
    selectAll()
  }
  if (e.key === 'd') copyGraphics()
  if (e.key === '-' || e.key === '=') {
    scalingCanvas(e.key === '-' ? 'reduce' : 'enlarge')
  }
  if (e.key === 't' || e.key === 'b' || e.key === 'u' || e.key === 'p') {
    const type = e.key === 't' ? 'top' : e.key === 'b' ? 'bottom' : e.key === 'u' ? 'up' : 'down'
    movementLayer(type)
  }
  if (e.key === 'p' || e.key === 'z') {
    revocationOrrecovery(e.key === 'p' ? 'recovery' : 'revocation')
  }
}
