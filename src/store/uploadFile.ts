// 样式存储
import { defineStore } from 'pinia'

export const useUploadFile = defineStore({
  id: 'uploadFile',
  state: (): { inputEl: HTMLInputElement | null, imageUrl: string } => {
    return {
      inputEl: null,
      imageUrl: ''
    }
  }
})
