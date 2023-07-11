import { applyBackground } from '@/utils/canvasHandle'

const LIGHTSCHEME = {
  '--bg-color': '#ffffff',
  '--text-color': '#606266',
  '--background-color': '#ffffff',
  '--bg-shadow': '0 1px 5px rgba(0,0,0,0.15)',
  '--btn-bg-hover-color': '#ecf5ff'
}

const DARKSCHEME = {
  '--bg-color': '#000000',
  '--text-color': '#ffffff',
  '--background-color': '#18222c',
  '--bg-shadow': '0 1px 5px rgb(255 255 255 / 40%)',
  '--btn-bg-hover-color': '#aac7e8'
}

type Scheme = typeof LIGHTSCHEME

// 主题切换
export const applyStyles = (schemeName: string): void => {
  const scheme: Scheme = schemeName === 'LIGHTSCHEME' ? LIGHTSCHEME : DARKSCHEME
  const root = document.documentElement
  for (const [key, value] of Object.entries(scheme)) {
    root.style.setProperty(key, value)
  }
  const bgColor = scheme['--bg-color']
  const storkeColor = scheme['--text-color']
  applyBackground(bgColor, storkeColor)
}
