<template>
  <NuxtLink @click="$emit('clicked')" :to="to" class="btn link dark">
    <slot></slot>
    <SvgoArrow />
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    to: string;
  }

  defineProps<Props>();
</script>
