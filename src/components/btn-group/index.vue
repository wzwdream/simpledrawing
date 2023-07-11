<template>
  <IconBtn v-for="item in iconBtns" :key="item.iconName" :iconName="item.iconName" :width="item.width || width" :height="item.height || height" :class="{ 'actived': checkActived && activedName === item.iconName }" :descriptiveText="item.descriptiveText" @click="handleClick(item.iconName)">
    <div v-if="item.slotText">
      <span>{{ item.slotText }}</span>
    </div>
  </IconBtn>
</template>

<script setup lang="ts" name="BtnGroup">
interface iconBtn {
  iconName: string
  descriptiveText: string
  slotText?: string
  width?: string
  height?: string
}
type defualtProps = {
  iconBtns: iconBtn[],
  checkActived?: boolean
  activeName?: string,
  width?: string
  height?: string
}
const props = withDefaults(defineProps<defualtProps>(), {
  checkActived: true,
  activeName: '',
  width: '30px',
  height: '30px'
})
const emit = defineEmits(['click'])

watch(() => props.activeName, () => {
  activedName.value = props.activeName
})
const activedName = ref(props.activeName)
const handleClick = (iconName: string): void => {
  if (props.checkActived) {
    activedName.value = iconName
  }
  emit('click', iconName)
}
</script>

<style scoped>
span {
  font-weight: 700;
  color: var(--text-color);
}
</style>
