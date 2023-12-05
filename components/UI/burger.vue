<template>
  <div class="burger">
    <div
      :class="{ 'rotate-45 !translate-y-0': open }"
      class="burger__line -translate-y-1"></div>
    <div
      :class="{ '-rotate-45 !translate-y-0': open }"
      class="burger__line translate-y-1"></div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{ open: boolean }>();
  const emit = defineEmits(['clicked']);
</script>

<style scoped>
  .burger {
    @apply cursor-pointer flex flex-col gap-1 justify-center items-center w-8 h-8 relative z-10 md:hidden;
  }

  .burger__line {
    @apply absolute w-full h-0.5  bg-pureBlack rounded-full origin-center transition-all duration-300 ease-in-out;
  }
</style>
