import { type Canvas } from 'fabric/fabric-impl'

// 操作历史记录
const history: any[] = []
let historyIndex = -1

// 添加图层操作到历史记录
export function addToHistory (canvasExample: Canvas): void {
  // 清除当前历史记录索引之后的历史记录
  history.splice(historyIndex + 1)

  // 将当前Canvas状态保存到历史记录数组中
  const json = canvasExample.toJSON()
  history.push(json)

  // 更新历史记录索引
  historyIndex++
}

// 撤销操作
export function undo (canvasExample: Canvas): void {
  if (historyIndex > 0) {
    historyIndex--
    loadHistory(canvasExample)
  }
}
// 重做操作
export function redo (canvasExample: Canvas): void {
  if (historyIndex < history.length - 1) {
    historyIndex++
    loadHistory(canvasExample)
  }
}
// 加载历史记录中的状态到Canvas
export function loadHistory (canvasExample: Canvas): void {
  const json = history[historyIndex]
  canvasExample.loadFromJSON(json, function () {
    canvasExample.renderAll()
  })
}
