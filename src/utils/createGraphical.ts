import { fabric } from 'fabric'
import { type Point, type Canvas, type IEvent } from 'fabric/fabric-impl'
import { useCanvas } from '@/store/canvas'
import { useStyleToolbar } from '@/store/styleToolbar'
import { colorStye, strokeDashArrayStyle, strokeWidthStyle } from '@/utils/computedStyle'
import { updateCanvas, resetSelection, GenNonDuplicateID } from './help'
import { useUploadFile } from '@/store/uploadFile'
import { addToHistory } from './historicalOperations'

let downPoint: Point
let canvasExample: Canvas

export const createGraphical = (canvasEl: Canvas, point: Point): void => {
  downPoint = point
  canvasExample = canvasEl
  canvasExample.isDrawingMode = false
  const canvasStore = useCanvas()
  const styleStore = useStyleToolbar()
  switch (canvasStore.selectedGraphics) {
    case 'rect':
      // canvasExample.on('mouse:up', createRect)
      createRect()
      break
    case 'circle':
      createCircle()
      break
    case 'line':
      createLine()
      break
    case 'rhombus':
      createRhombus()
      break
    case 'arrows':
      createArrows()
      break
    case 'painting':
      canvasExample.isDrawingMode = true
      canvasExample.freeDrawingBrush.color = colorStye(styleStore.stroke)
      canvasExample.freeDrawingBrush.width = strokeWidthStyle(styleStore.strokeWidth) + 2
      canvasExample.renderAll()
      addToHistory(canvasExample)
      break
    case 'text':
      createText()
      break
    case 'image':
      createImage()
  }
}

// 创建矩形
let rect: fabric.Rect
const createRect = (): void => {
  const styleStore = useStyleToolbar()
  rect = new fabric.Rect({
    name: GenNonDuplicateID('rect'),
    top: downPoint.y,
    left: downPoint.x,
    width: 0,
    height: 0,
    fill: colorStye(styleStore.fill),
    strokeWidth: strokeWidthStyle(styleStore.strokeWidth),
    stroke: colorStye(styleStore.stroke),
    opacity: styleStore.opacity,
    rx: styleStore.edges === 'rightAngle' ? 0 : 10,
    ry: styleStore.edges === 'rightAngle' ? 0 : 10,
    strokeUniform: true,
    strokeDashArray: strokeDashArrayStyle(styleStore.strokeDashArray)
  })
  canvasExample.add(rect)
  canvasExample.on('mouse:move', moveReact)
  canvasExample.on('mouse:up', createRectUp)
}

const moveReact = (e: IEvent<Event>): void => {
  const pointer = e.absolutePointer
  if (pointer != null) {
    const top = Math.min(downPoint.y, pointer.y)
    const left = Math.min(downPoint.x, pointer.x)
    let width = Math.abs(downPoint.x - pointer.x)
    let height = Math.abs(downPoint.y - pointer.y)
    const canvasStore = useCanvas()
    if (canvasStore.KeyboardKey === 'Shift') {
      const minNumber = Math.min(width, height)
      width = minNumber
      height = minNumber
    }
    rect.set('top', top)
    rect.set('left', left)
    rect.set('width', width)
    rect.set('height', height)
    canvasExample.requestRenderAll()
  }
}
const createRectUp = (e: IEvent<Event>): void => {
  resetSelection()
  canvasExample.off('mouse:move', moveReact)
  canvasExample.off('mouse:up', createRectUp)
  if (JSON.stringify(downPoint) === JSON.stringify(e.absolutePointer)) {
    canvasExample.remove(circle)
    return
  }
  updateCanvas(canvasExample)
  addToHistory(canvasExample)
}

// 创建圆形
let circle: fabric.Ellipse
const createCircle = (): void => {
  if (downPoint == null) return
  const styleStore = useStyleToolbar()
  circle = new fabric.Ellipse({
    name: GenNonDuplicateID('circle'),
    top: downPoint.y,
    left: downPoint.x,
    rx: 0,
    ry: 0,
    fill: colorStye(styleStore.fill),
    strokeWidth: strokeWidthStyle(styleStore.strokeWidth),
    stroke: colorStye(styleStore.stroke),
    opacity: styleStore.opacity,
    strokeUniform: true,
    strokeDashArray: strokeDashArrayStyle(styleStore.strokeDashArray)
  })

  canvasExample.add(circle)

  canvasExample.on('mouse:move', moveCircle)
  canvasExample.on('mouse:up', createCircleUp)
}

const moveCircle = (e: IEvent<Event>): void => {
  const pointer = e.absolutePointer

  if (pointer != null) {
    let rx = Math.abs(downPoint.x - pointer.x) / 2
    let ry = Math.abs(downPoint.y - pointer.y) / 2
    const canvasStore = useCanvas()
    if (canvasStore.KeyboardKey === 'Shift') {
      const minNumber = Math.min(rx, ry)
      rx = minNumber
      ry = minNumber
    }
    const top = pointer.y > downPoint.y ? downPoint.y : downPoint.y - ry * 2
    const left = pointer.x > downPoint.x ? downPoint.x : downPoint.x - rx * 2
    circle.set('rx', rx)
    circle.set('ry', ry)
    circle.set('top', top)
    circle.set('left', left)
    canvasExample.requestRenderAll()
  }
}

const createCircleUp = (e: IEvent<Event>): void => {
  resetSelection()
  canvasExample.off('mouse:move', moveCircle)
  canvasExample.off('mouse:up', createCircleUp)
  if (JSON.stringify(downPoint) === JSON.stringify(e.absolutePointer)) {
    canvasExample.remove(circle)
    return
  }

  updateCanvas(canvasExample)
  addToHistory(canvasExample)
}

// 创建线段
let line: fabric.Line
const createLine = (): void => {
  const styleStore = useStyleToolbar()

  line = new fabric.Line(
    [
      downPoint.x, downPoint.y, // 起始点坐标
      downPoint.x, downPoint.y // 结束点坐标
    ],
    {
      name: GenNonDuplicateID('line'),
      strokeWidth: strokeWidthStyle(styleStore.strokeWidth),
      stroke: colorStye(styleStore.stroke),
      opacity: styleStore.opacity,
      strokeUniform: true,
      strokeDashArray: strokeDashArrayStyle(styleStore.strokeDashArray)
    }
  )
  canvasExample.add(line)
  canvasExample.on('mouse:move', moveLine)
  canvasExample.on('mouse:up', createLineUp)
}

const moveLine = (e: IEvent<Event>): void => {
  const currentPoint = e.absolutePointer

  if (currentPoint != null) {
    line.set('x2', currentPoint.x)
    line.set('y2', currentPoint.y)
  }

  canvasExample.requestRenderAll()
}

const createLineUp = (e: IEvent<Event>): void => {
  resetSelection()
  canvasExample.off('mouse:move', moveLine)
  canvasExample.off('mouse:up', createLineUp)
  if (JSON.stringify(downPoint) === JSON.stringify(e.absolutePointer)) {
    canvasExample.remove(line)
    return
  }

  updateCanvas(canvasExample)
  addToHistory(canvasExample)
}

// 创建菱形
let rhombus: fabric.Polygon | null = null
const createRhombus = (): void => {
  if (downPoint == null) return
  canvasExample.on('mouse:move', moveRhombus)
  canvasExample.on('mouse:up', createRhombusUp)
}

const moveRhombus = (e: IEvent<Event>): void => {
  const canvasStore = useCanvas()
  const pointer = e.absolutePointer
  if (pointer != null) {
    let x1 = (pointer.x - downPoint.x) / 2 + downPoint.x
    let y1 = downPoint.y
    let x2 = pointer.x
    let y2 = (pointer.y - downPoint.y) / 2 + downPoint.y
    let x3 = x1
    let y3 = pointer.y
    let x4 = downPoint.x
    let y4 = y2
    let left = Math.min(downPoint.x, pointer.x)
    let top = Math.min(downPoint.y, pointer.y)
    if (canvasStore.KeyboardKey === 'Shift') {
      const minNumber = Math.min(Math.abs(pointer.x - downPoint.x), Math.abs(pointer.y - downPoint.y))
      x1 = minNumber / 2 + downPoint.x
      y1 = downPoint.y
      x2 = downPoint.x + minNumber
      y2 = minNumber / 2 + downPoint.y
      x3 = x1
      y3 = downPoint.y + minNumber
      x4 = downPoint.x
      y4 = y2
      const offsetX = pointer.x - downPoint.x > 0 ? minNumber : -minNumber
      const offsetY = pointer.y - downPoint.y > 0 ? minNumber : -minNumber
      left = Math.min(downPoint.x, downPoint.x + offsetX)
      top = Math.min(downPoint.y, downPoint.y + offsetY)
    }
    const points = [
      { x: x1, y: y1 },
      { x: x2, y: y2 },
      { x: x3, y: y3 },
      { x: x4, y: y4 }
    ]
    // 创建菱形
    const styleStore = useStyleToolbar()
    if (rhombus != null) canvasExample.remove(rhombus)
    rhombus = new fabric.Polygon(points, {
      name: GenNonDuplicateID('rhombus'),
      left,
      top,
      fill: colorStye(styleStore.fill),
      strokeWidth: strokeWidthStyle(styleStore.strokeWidth),
      stroke: colorStye(styleStore.stroke),
      opacity: styleStore.opacity,
      strokeUniform: true,
      strokeDashArray: strokeDashArrayStyle(styleStore.strokeDashArray)
    })

    canvasExample.add(rhombus)
    canvasExample.renderAll()
  }
}

const createRhombusUp = (e: IEvent<Event>): void => {
  resetSelection()
  canvasExample.off('mouse:move', moveRhombus)
  canvasExample.off('mouse:up', createRhombusUp)
  if ((rhombus != null) && JSON.stringify(downPoint) === JSON.stringify(e.absolutePointer)) {
    canvasExample.remove(rhombus)
  }
  rhombus = null
  updateCanvas(canvasExample)
  addToHistory(canvasExample)
}

// 创建箭头
let arrows: fabric.Path | null = null
const createArrows = (): void => {
  if (downPoint == null) return
  canvasExample.on('mouse:move', moveArrows)
  canvasExample.on('mouse:up', createArrowsUp)
}

const moveArrows = (e: IEvent<Event>): void => {
  const pointer = e.absolutePointer
  if (pointer != null) {
    const styleStore = useStyleToolbar()
    if (arrows != null) canvasExample.remove(arrows)
    arrows = new fabric.Path(drawArrowBase(downPoint.x, downPoint.y, pointer.x, pointer.y), {
      name: GenNonDuplicateID('arrows'),
      left: Math.min(downPoint.x, pointer.x),
      top: Math.min(downPoint.y, pointer.y),
      fill: colorStye(styleStore.fill),
      strokeWidth: strokeWidthStyle(styleStore.strokeWidth),
      stroke: colorStye(styleStore.stroke),
      opacity: styleStore.opacity,
      strokeUniform: true
    })

    canvasExample.add(arrows)
    canvasExample.renderAll()
  }
}
const drawArrowBase = (fromX: number, fromY: number, toX: number, toY: number): string => {
  // 计算各角度和对应的P2,P3坐标
  const angle = (Math.atan2(fromY - toY, fromX - toX) * 180) / Math.PI
  const angle1 = ((angle + 30) * Math.PI) / 180
  const angle2 = ((angle - 30) * Math.PI) / 180
  const topX = 10 * Math.cos(angle1)
  const topY = 10 * Math.sin(angle1)
  const botX = 10 * Math.cos(angle2)
  const botY = 10 * Math.sin(angle2)
  let arrowX = fromX - topX
  let arrowY = fromY - topY
  let path = ` M ${fromX} ${fromY}`
  path += ` L ${toX} ${toY}`
  arrowX = toX + topX
  arrowY = toY + topY
  path += ` M ${arrowX} ${arrowY}`
  path += ` L ${toX} ${toY}`
  arrowX = toX + botX
  arrowY = toY + botY
  path += ` L ${arrowX} ${arrowY}`
  return path
}
const createArrowsUp = (e: IEvent<Event>): void => {
  resetSelection()
  canvasExample.off('mouse:move', moveArrows)
  canvasExample.off('mouse:up', createArrowsUp)
  if ((arrows != null) && JSON.stringify(downPoint) === JSON.stringify(e.absolutePointer)) {
    canvasExample.remove(arrows)
    return
  }
  arrows = null
  updateCanvas(canvasExample)
  addToHistory(canvasExample)
}

// 创建文本框
let text: fabric.Textbox | null = null
const createText = (): void => {
  const styleStore = useStyleToolbar()
  text = new fabric.Textbox('', {
    name: GenNonDuplicateID('text'),
    left: downPoint.x,
    top: downPoint.y,
    fontSize: Number(styleStore.fontSize),
    fontFamily: styleStore.fontFamily,
    textAlign: styleStore.textAlign,
    width: 150,
    fill: colorStye(styleStore.stroke)
  })
  canvasExample.add(text)
  canvasExample.renderAll()
  addToHistory(canvasExample)

  canvasExample.setActiveObject(text)
  text.enterEditing()
  canvasExample.on('selection:cleared', () => {
    // 检查文本框是否为空
    if ((text != null) && text.text === '') {
      canvasExample.remove(text)
      canvasExample.renderAll()
      addToHistory(canvasExample)
      updateCanvas(canvasExample)
      text = null
    }
  })
  resetSelection()
}

// 创建图片
let image: fabric.Image | null = null
const createImage = (): void => {
  const styleStore = useStyleToolbar()
  const uploadFile = useUploadFile()
  const img = new Image()
  img.onload = function () {
    const width = img.width
    const height = img.height
    const scaleX = 10 / width
    const scaleY = 10 / height
    image = new fabric.Image(img, {
      name: GenNonDuplicateID('image'),
      left: downPoint.x,
      top: downPoint.y,
      width,
      height,
      opacity: styleStore.opacity,
      scaleX,
      scaleY
    })
    canvasExample.add(image)
    canvasExample.renderAll()
  }
  img.onerror = function () {
    console.log('图片加载失败')
  }
  img.src = uploadFile.imageUrl
  canvasExample.on('mouse:move', moveImage)
  canvasExample.on('mouse:up', imageUp)
}

const moveImage = (e: IEvent<Event>): void => {
  const pointer = e.absolutePointer
  if (pointer != null) {
    const top = Math.min(downPoint.y, pointer.y)
    const left = Math.min(downPoint.x, pointer.x)
    const width = Math.abs(downPoint.x - pointer.x)
    const height = Math.abs(downPoint.y - pointer.y)
    image?.set({ left, top })
    image?.scaleToWidth(width)
    image?.scaleToHeight(height)
    canvasExample.renderAll()
  }
}
const imageUp = (e: IEvent<Event>): void => {
  const uploadFile = useUploadFile()
  const canvasStore = useCanvas()
  uploadFile.imageUrl = ''
  canvasStore.selectedGraphics = 'select'
  canvasExample.off('mouse:move', moveImage)
  canvasExample.off('mouse:up', imageUp)
  if ((arrows != null) && JSON.stringify(downPoint) === JSON.stringify(e.absolutePointer)) {
    canvasExample.remove(image as fabric.Image)
    return
  }
  image = null
  addToHistory(canvasExample)
  updateCanvas(canvasExample)
}
