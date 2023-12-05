<template>
  <NuxtLink @click="$emit('clicked')" :to="to" class="btn primary">
    <slot></slot>
  </NuxtLink>
</template>

<script setup lang="ts">
  interface Props {
    to: string;
  }

  defineProps<Props>();
</script>
