<template>
  <svg class="icon" aria-hidden="true">
    <use :xlink:href="`#icon-${props.name}`" />
  </svg>
</template>

<script setup lang="ts" name="Icon">
interface defulutProps {
  name: string,
  size?: string
}

const props = withDefaults(defineProps<defulutProps>(), {
  name: '',
  size: '20px'
})
</script>

<style scoped>
.icon {
  width: v-bind('props.size');
  height: v-bind('props.size');
}
</style>
