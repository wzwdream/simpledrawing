import { useCanvas } from '@/store/canvas'
import { applyStyles } from '@/utils/scheme'
import { applyBackground, canvasClear, exportFile, inputFile } from '@/utils/canvasHandle'
import { debounce } from '@/utils/help'

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const useToolbar = () => {
  const canvasStore = useCanvas()

  const bgClocor = ref('#ffffff')
  const bgColorChange = (color: string): void => {
    // 如果更新得太频繁，会造成卡顿
    const debounceApply = debounce(applyBackground, 280)
    debounceApply(color)
  }

  const handleClick = (name: string): void => {
    if (name === 'reset') canvasClear()
    if (name === 'exportImage') exportFile('image')
    if (name === 'export') exportFile('json')
    if (name === 'inport') inputFile('.json')
  }

  const schemeChange = (): void => {
    canvasStore.scheme = canvasStore.scheme === 'LIGHTSCHEME' ? 'DARKSCHEME' : 'LIGHTSCHEME'
    applyStyles(canvasStore.scheme)
  }

  const lockStatusChange = (): void => {
    canvasStore.lockStatus = !canvasStore.lockStatus
  }

  return {
    handleClick,
    canvasStore,
    schemeChange,
    lockStatusChange,
    bgClocor,
    bgColorChange
  }
}

export default useToolbar
