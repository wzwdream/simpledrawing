<template>
  <div ref="slider" class="slider" @click.stop.prevent="sliderClick">
    <div ref="bar" class="slider-bar"></div>
    <div ref="btn" class="slider-btn" @mousedown="startDown"></div>
  </div>
</template>

<script setup lang="ts" name="Slider">
const emit = defineEmits(['update:size', 'change'])

interface defulutProps {
  size: number
}

const props = withDefaults(defineProps<defulutProps>(), {
  size: 0
})

const slider = ref<HTMLDivElement>()
const bar = ref<HTMLDivElement>()
const btn = ref<HTMLDivElement>()
const start = ref(0)
const startx = ref(0)
const isDown = ref(false)
const maxWidth = ref(0)
const graduations = ref(22)

const sliderClick = (event: MouseEvent) => {
  if (isDown.value) return
  btn.value!.style.left = event.offsetX + 'px'
  bar.value!.style.width = event.offsetX + 'px'
  emit('update:size', event.offsetX / graduations.value / 10)
  emit('change', event.offsetX / graduations.value / 10)
}

const startDown = (event: MouseEvent) => {
  startx.value = event.clientX
  start.value = btn.value!.offsetLeft
  isDown.value = true
  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', endUp)
}

const move = (event: MouseEvent) => {
  if (!isDown.value) return
  const barWidth = start.value + (event.clientX - startx.value)
  const width = Math.round(barWidth / graduations.value) * graduations.value
  if (barWidth <= 0) {
    bar.value!.style.width = '0px'
    btn.value!.style.left = '0px'
    emit('update:size', 0)
    emit('change', 0)
  } else if (barWidth >= maxWidth.value) {
    bar.value!.style.width = maxWidth.value + 'px'
    btn.value!.style.left = maxWidth.value + 'px'
    emit('update:size', 1)
    emit('change', 1)
  } else {
    btn.value!.style.left = width + 'px'
    bar.value!.style.width = width + 'px'
    emit('update:size', width / graduations.value / 10)
    emit('change', width / graduations.value / 10)
  }
}

const endUp = () => {
  // 防止click事件触发
  setTimeout(() => {
    isDown.value = false
  }, 0)
  document.removeEventListener('mousemove', move)
  document.removeEventListener('mouseup', endUp)
}

watch(() => props.size, (newValue) => {
  const width = newValue * 10 * graduations.value + 'px'
  bar.value!.style.width = width
  btn.value!.style.left = width
})

onMounted(() => {
  maxWidth.value = slider.value!.offsetWidth || 220
  graduations.value = maxWidth.value / 10
  const width = graduations.value * props.size * 10 + 'px'
  bar.value!.style.width = width
  btn.value!.style.left = width
})
</script>

<style scoped>
.slider {
  width: 100%;
  height: 6px;
  margin: 16px 0;
  background-color: #e4e7ed;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  vertical-align: middle;
  box-shadow: var(--bg-shadow);
}

.slider-bar {
  height: 6px;
  background: #666;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  position: absolute;
}

.slider-btn {
  position: absolute;
  width: 16px;
  height: 16px;
  border: 2px solid #666;
  background-color: #666;
  border-radius: 50%;
  user-select: none;
  top: -8px;
  transform: translateX(-8px);
  box-shadow: var(--bg-shadow);
}

.slider-btn:hover {
  cursor: grab;
  width: 18px;
  height: 18px;
  top: -9px;
  transform: translateX(-9px);
}
</style>
