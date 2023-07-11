<template>
  <div class="tollbar-color-box">
    <div class="tollbar-color-content">
      <Icon class="tollbar-color" name="touming" size="30px" />
      <input :value="modelValue" :class="{'tollbar-color': true, 'isTransparent': modelValue === '#transparent'}" type="color" aria-label="画布背景" @input="colorChange" />
    </div>
    <input :value="modelValue" class="tollbar-text" type="text" aria-label="画布背景" @focus="colorStart = props.modelValue"
      @input="colorChange" @blur="colorBlur" />
  </div>
</template>

<script setup lang="ts" name="ColorSelect">

const props = withDefaults(defineProps<{ modelValue: string }>(), {
  modelValue: '#ffffff'
})

const emit = defineEmits(['update:modelValue', 'change'])

const colorStart = ref('')
const colorChange = (val: Event) => {
  const target = val.target as HTMLInputElement
  const color = target.value
  emit('update:modelValue', color)
  emit('change', color)
}

const colorBlur = () => {
  let color = props.modelValue
  const colorRegex = /^#[A-Fa-f0-9]{6}$/
  if (!colorRegex.test(color) && color !== '#transparent') {
    color = colorStart.value
  }
  emit('update:modelValue', color)
  emit('change', color)
}
</script>

<style scoped>
.tollbar-color-box {
  width: 172px;
  display: flex;
  justify-content: space-around;
  color: var(--text-color);
}
.tollbar-color-content {
  width: 30px;
  height: 30px;
  user-select: none;
  position: relative;
}
.tollbar-color {
  width: 30px;
  height: 30px;
  padding: 0;
  user-select: none;
  cursor: pointer;
  position: absolute;
  top: 0;
  left: 0;
}
.isTransparent {
  opacity: 0;
}
.tollbar-color::-webkit-color-swatch-wrapper {
  padding: 0;
}

.tollbar-color,
.tollbar-color::-webkit-color-swatch-wrapper,
.tollbar-color::-webkit-color-swatch {
  border: none;
  border-radius: var(--border-radius);
  box-shadow: var(--bg-shadow);
}

.tollbar-text {
  font-family: var(--font-family);
  font-weight: 400;
  font-size: var(--font-size);
  color: var(--text-color);
  height: 30px;
  width: 80px;
  padding: 0 10px;
  border: none;
  border-radius: var(--border-radius);
  outline: none;
  box-shadow: var(--bg-shadow);
  background: var(--background-color);
}

.tollbar-text:focus {
  box-shadow: 0 0 0 2px #bcd7ed;
}</style>
