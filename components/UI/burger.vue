<template>
  <div class="burger" @click="toggle">
    <div
      :class="{ 'rotate-45 !translate-y-0': isActive }"
      class="burger__line -translate-y-1"></div>
    <div
      :class="{ '-rotate-45 !translate-y-0': isActive }"
      class="burger__line translate-y-1"></div>
  </div>
</template>

<script setup lang="ts">
  const emit = defineEmits(['open', 'closed']);
  const isActive = ref(false);

  const toggle = () => {
    isActive.value = !isActive.value;
    isActive.value ? emit('open') : emit('closed');
  };
</script>

<style scoped>
  .burger {
    @apply cursor-pointer flex flex-col gap-1 justify-center items-center w-8 h-8 relative z-10;
  }

  .burger__line {
    @apply absolute w-full h-0.5  bg-pureBlack rounded-full origin-center transition-all duration-300 ease-in-out;
  }
</style>
