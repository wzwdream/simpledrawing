<template>
  <input type="file" ref="inputEl" aria-label="文件上传" />
</template>

<script setup lang="ts" name="UploadFile">
import { useUploadFile } from '@/store/uploadFile'
const inputEl = ref()
const uploadFile = useUploadFile()
onMounted(() => {
  uploadFile.inputEl = inputEl.value
})
</script>

<style scoped>
input {
  display: none;
}
</style>
