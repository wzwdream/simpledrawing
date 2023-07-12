import type { Canvas, IEvent } from 'fabric/fabric-impl'
import { fabric } from 'fabric'
import { updateCanvas, updateSelected, loadFromJson, selectedChange, GenNonDuplicateID } from '@/utils/help'
import { createGraphical } from '@/utils/createGraphical'
import { useCanvas } from '@/store/canvas'
import { useUploadFile } from '@/store/uploadFile'
import { type styleStoreType } from '@/store/styleToolbar'
import { addToHistory, redo, undo } from './historicalOperations'
import { restStyle } from './computedStyle'
import { useContextMenu } from '@/store/contextMenu'

export let canvasExample: Canvas

export const canvasInit = (canvas: HTMLCanvasElement, content: HTMLDivElement): void => {
  canvasExample = new fabric.Canvas(canvas, {
    width: content.clientWidth,
    height: content.clientHeight,
    backgroundColor: '#ffffff',
    fireRightClick: true, // 启用右键菜单，btn值位3
    stopContextMenu: true
  })

  // 存储画布大小
  const contextMenuStore = useContextMenu()
  contextMenuStore.width = content.clientWidth
  contextMenuStore.height = content.clientHeight
  // 保持本地记录
  const canvasStore = useCanvas()
  if (canvasStore.canvasExample != null) {
    loadFromJson(canvasExample, canvasStore.canvasExample)
  }

  fabric.Object.prototype.cornerStyle = 'circle'
  // 添加记录
  addToHistory(canvasExample)
  // 画布事件
  canvasExample.on('mouse:down', canvasMouseDown)
  // 选中的图形变化
  canvasExample.on('selection:updated', selectedChange)
  // 选中图形
  canvasExample.on('selection:created', selectedChange)
  // 取消选中图形
  canvasExample.on('selection:cleared', restStyle)
  // 图形移动
  canvasExample.on('object:modified', () => {
    addToHistory(canvasExample)
    updateCanvas(canvasExample)
  })
  // 图形缩放
  // canvasExample.on('object:scaling', (val) => {
  //   console.log(val)
  //   const selectedObject: any = val.target
  //   if (selectedObject != null && canvasStore.KeyboardKey === 'Shift') {
  //     if (selectedObject.type === 'rect') {
  //       const poiner = val.pointer
  //       const dwPoiner = selectedObject.aCoords.tl
  //       const scale = Math.abs(poiner.x - dwPoiner.x) / selectedObject.width
  //       console.log(scale, selectedObject.scaleX)
  //       // console.log('123', selectedObject)
  //       // const minNumber = Math.min(selectedObject.width as number, selectedObject.height as number)
  //       // const scale = Math.min(selectedObject.scaleX, selectedObject.scaleY)
  //       // selectedObject.set({ width: minNumber, height: minNumber, scaleX: scale, scaleY: scale })
  //       canvasExample.requestRenderAll()
  //     }
  //     if (selectedObject.type === 'polygon') {
  //       console.log(selectedObject)
  //     }
  //     if (selectedObject.type === 'ellipse') {
  //       const minNumber = Math.min(selectedObject.rx as number, selectedObject.ry as number)
  //       selectedObject.set('rx', minNumber)
  //       selectedObject.set('ry', minNumber)
  //     }
  //   }
  // })
}

// 更新背景颜色
export const applyBackground = (bgColor: string, strokeColor?: string): void => {
  canvasExample.backgroundColor = bgColor
  if (strokeColor != null) {
    canvasExample.forEachObject((object) => {
      object.set('stroke', strokeColor)
    })
  }
  canvasExample.renderAll()
  addToHistory(canvasExample)
  updateCanvas(canvasExample)
}

// 布局大小变化
export const resize = (content: HTMLDivElement): void => {
  window.addEventListener('resize', () => {
    canvasExample.setDimensions({
      width: content.clientWidth,
      height: content.clientHeight
    })
    updateCanvas(canvasExample)
  })
}

// 鼠标在画布上按下
let x = 0
let y = 0
const canvasMouseDown = (e: IEvent<Event>): void => {
  updateSelected(canvasExample)
  const canvasStore = useCanvas()
  const contextMenuStore = useContextMenu()
  if (e.button === 3) {
    contextMenuStore.positionX = e.pointer?.x as number
    contextMenuStore.positionY = e.pointer?.y as number
    contextMenuStore.visibile = true
  } else {
    contextMenuStore.visibile = false
  }
  if (e.absolutePointer != null) {
    if (canvasStore.KeyboardKey === ' ' && canvasStore.selectedGraphics === 'select') {
      canvasExample.selectionColor = 'transparent'
      canvasExample.selectionBorderColor = 'transparent'
      canvasExample.skipTargetFind = true // 禁止选中
      canvasExample.setCursor('move')
      const evt = e.e as MouseEvent
      x = evt.clientX
      y = evt.clientY
      canvasExample.on('mouse:move', canvasMouseMove)
      canvasExample.on('mouse:up', canvasMouseUp)
    } else {
      createGraphical(canvasExample, e.absolutePointer)
    }
  }
}

// 鼠标在画布上移动
const canvasMouseMove = (e: IEvent<Event>): void => {
  const evt = e.e as MouseEvent
  const vpt = canvasExample.viewportTransform // 聚焦视图的转换
  if (vpt != null) {
    vpt[4] += evt.clientX - x
    vpt[5] += evt.clientY - y
  }
  canvasExample.requestRenderAll() // 重新渲染
  x = evt.clientX
  y = evt.clientY
}
// 鼠标在画布上弹起
const canvasMouseUp = (): void => {
  canvasExample.selection = true
  canvasExample.selectionColor = 'rgba(100, 100, 255, 0.3)'
  canvasExample.selectionBorderColor = 'rgba(255, 255, 255, 0.3)'
  canvasExample.skipTargetFind = false // 允许选中
  canvasExample.setCursor('default')
  canvasExample.setViewportTransform(canvasExample.viewportTransform as number[])
  canvasExample.off('mouse:move', canvasMouseMove)
  canvasExample.off('mouse:up', canvasMouseUp)
  addToHistory(canvasExample)
  updateCanvas(canvasExample)
}

// 清空画布
export const canvasClear = (): void => {
  canvasExample.clear()
  addToHistory(canvasExample)
  updateCanvas(canvasExample)
}

// 导出文件
export const exportFile = (type: string): void => {
  const link = document.createElement('a')
  let href = ''
  let download = ''

  if (type === 'image') {
    href = canvasExample.toDataURL({
      format: 'png',
      multiplier: 2
    })
    download = 'drawing.png'
  }

  if (type === 'json') {
    const json = JSON.stringify(canvasExample.toJSON())
    const blob = new Blob([json], { type: 'application/json;charset=utf-8' })
    href = URL.createObjectURL(blob)
    download = 'drawing.json'
  }

  link.href = href
  link.download = download
  link.style.display = 'none'
  document.body.appendChild(link)
  link.click()

  document.body.removeChild(link)
  type === 'json' && URL.revokeObjectURL(href)
}
// 复制svg到剪切板
export const copyToClipboard = (): void => {
  const text = canvasExample.toSVG()
  const textarea = document.createElement('textarea')
  textarea.value = text
  document.body.appendChild(textarea)
  textarea.select()
  document.execCommand('copy')
  document.body.removeChild(textarea)
}

// 导入文件
export const inputFile = (type: string): void => {
  const uploadFile = useUploadFile()
  if (uploadFile.inputEl != null) {
    uploadFile.inputEl.accept = type
    uploadFile.inputEl.click()
    uploadFile.inputEl.addEventListener('change', (e) => {
      const target = e.target as HTMLInputElement | null
      if (target?.files != null) {
        const file = target?.files[0]
        const reader = new FileReader()

        reader.onload = function (e) {
          if (e.target != null) {
            const contents = e.target.result as string
            type === '.json' && loadFromJson(canvasExample, contents)
            type === 'image/*' && (uploadFile.imageUrl = contents)
          }
        }
        type === 'image/*' && reader.readAsDataURL(file)
        type === '.json' && reader.readAsText(file)
      }
    })
  }
}

type key = keyof styleStoreType
export const updateCanvasStyle = (key: key, value: string | number): void => {
  const activeObject: any = canvasExample.getActiveObject()
  if ((activeObject != null) && activeObject.type === 'activeSelection') {
    // 处理多个图形被选中的情况
    const selectedObjects = activeObject._objects
    selectedObjects.forEach((element: any) => {
      if (element.type === 'rect' && key === 'edges') {
        const rx = value === 'rightAngle' ? 0 : 10
        const ry = value === 'rightAngle' ? 0 : 10
        element.set('rx', rx)
        element.set('ry', ry)
      } else {
        element.set(key, value)
      }
    })
  } else if (activeObject !== null) {
    // 处理单个图形被选中的情况
    if (activeObject.type === 'rect' && key === 'edges') {
      const rx = value === 'rightAngle' ? 0 : 10
      const ry = value === 'rightAngle' ? 0 : 10
      activeObject.set('rx', rx)
      activeObject.set('ry', ry)
    } else {
      activeObject.set(key, value)
    }
  }
  canvasExample.renderAll()
  addToHistory(canvasExample)
  updateCanvas(canvasExample)
}

// 复制图形
export const copyGraphics = (): void => {
  const selectedObject: any = canvasExample.getActiveObject()
  if (selectedObject != null) {
    if (selectedObject.type === 'activeSelection') {
      let differenceX = 0
      let differenceY = 0
      selectedObject._objects.forEach((element: any, index: number) => {
        console.log(element)
        if (index === 0) {
          // 计算与原坐标的差值，用于计算新图形的位置
          differenceX = selectedObject.left - element.left
          differenceY = selectedObject.top - element.top
        }
        element.clone((val: fabric.Object) => {
          let name = GenNonDuplicateID(val.type as string)
          if (val.type === 'path') {
            let path = ''
            const aItem: fabric.Path = val as fabric.Path
            aItem.path?.forEach((element: any) => {
              path += element[0] as string
            })
            path === 'MLMLL' && (name = GenNonDuplicateID('arrows'))
          }
          if ((val.left != null) && (val.top != null)) {
            val.set({
              left: Number(val.left + differenceX) + 10,
              top: Number(val.top + differenceY) + 10,
              name
            })
          }
          canvasExample.add(val)
          canvasExample.renderAll()
          addToHistory(canvasExample)
          updateCanvas(canvasExample)
        })
      })
    } else {
      selectedObject.clone((val: fabric.Object) => {
        let name = GenNonDuplicateID(val.type as string)
        if (val.type === 'path') {
          let path = ''
          const aItem: fabric.Path = val as fabric.Path
          aItem.path?.forEach((element: any) => {
            path += element[0] as string
          })
          path === 'MLMLL' && (name = GenNonDuplicateID('arrows'))
        }
        val.set({
          left: Number(val.left) + 10,
          top: Number(val.top) + 10,
          name
        })
        canvasExample.add(val)
        canvasExample.renderAll()
        addToHistory(canvasExample)
        updateCanvas(canvasExample)
      })
    }
  }
}

// 删除图形
export const deleteGraphics = (): void => {
  const canvasStore = useCanvas()
  const selectedObject: any = canvasExample.getActiveObject()
  if (selectedObject != null) {
    if (selectedObject.type === 'activeSelection') {
      selectedObject._objects.forEach((element: any) => {
        canvasExample.remove(element)
        canvasStore.selectedElement = []
      })
    } else {
      canvasExample.remove(selectedObject)
      canvasStore.selectedElement = []
    }
    canvasExample.discardActiveObject()
    addToHistory(canvasExample)
    updateCanvas(canvasExample)
  }
}

// 图层操作
export const movementLayer = (type: string): void => {
  const selectedObject: fabric.Object | null = canvasExample.getActiveObject()
  if (selectedObject == null) return
  if (type === 'top') selectedObject.bringToFront()
  if (type === 'bottom') selectedObject.sendToBack()
  if (type === 'up') selectedObject.bringForward()
  if (type === 'down') selectedObject.sendBackwards()
  addToHistory(canvasExample)
  updateCanvas(canvasExample)
}

// 缩放画布
export const scalingCanvas = (type: string): void => {
  const canvasStore = useCanvas()
  let zoomLevel = canvasExample.getZoom()
  if (type === 'enlarge') zoomLevel += 0.1
  if (type === 'reduce') zoomLevel = zoomLevel <= 0.1 ? 0.1 : zoomLevel - 0.1
  if (type === 'resetSize') zoomLevel = 1
  canvasStore.zoomLevel = parseFloat(zoomLevel.toFixed(1))
  zoomTo(parseFloat(zoomLevel.toFixed(1)))
  addToHistory(canvasExample)
  updateCanvas(canvasExample)
}

// 缩放画布到指定缩放级别
const zoomTo = (scale: number): void => {
  if ((canvasExample.height != null) && (canvasExample.width != null)) {
    // 计算画布中心点的坐标
    const centerX = canvasExample.width / 2
    const centerY = canvasExample.height / 2

    // 计算缩放后的中心点坐标
    const zoomedCenterX = centerX * scale
    const zoomedCenterY = centerY * scale

    // 计算缩放后的偏移量
    const offsetX = zoomedCenterX - centerX
    const offsetY = zoomedCenterY - centerY

    // 设置画布的缩放级别和偏移量
    canvasExample.setZoom(scale)
    canvasExample.absolutePan({ x: offsetX, y: offsetY })
  }
}

// 撤销与恢复
export const revocationOrrecovery = (type: string): void => {
  if (type === 'revocation') undo(canvasExample)
  if (type === 'recovery') redo(canvasExample)
}

// 全选
export const selectAll = (): void => {
  const objects = canvasExample.getObjects()
  canvasExample.setActiveObject(new fabric.ActiveSelection(objects, { canvas: canvasExample }))
  canvasExample.renderAll()
}
