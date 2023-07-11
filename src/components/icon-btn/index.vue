<template>
  <button :class="{'icon-btn': true, 'noBackground': !background }" type="button" :title="descriptiveText" :aria-label="descriptiveText" @click="handleClick">
    <slot>
      <Icon :name="iconName" :size="iconSize" />
    </slot>
  </button>
</template>

<script setup lang="ts" name="IconBtn">
interface defulutProps {
  iconName?: string,
  width?: string,
  height?: string,
  background?: boolean,
  descriptiveText: string,
  iconSize?: string
}

const props = withDefaults(defineProps<defulutProps>(), {
  iconName: '',
  width: '30px',
  height: '30px',
  background: true,
  descriptiveText: ''
})

const emit = defineEmits(['click'])
const handleClick = () => {
  emit('click', props.iconName)
}
</script>

<style scoped>
.icon-btn {
  width: v-bind('props.width');
  height: v-bind('props.height');
  display: flex;
  justify-content: center;
  align-items: center;
  background: var(--background-color);
  border-radius: var(--border-radius);
  box-shadow: var(--bg-shadow);
  border: none;
  user-select: none;
  cursor: pointer;
}
.noBackground {
  background: none;
}
.icon-btn:hover, .actived {
  background: var(--btn-bg-hover-color);
}
.icon-btn:active {
  background: var(--btn-bg-active-color);
}
</style>
