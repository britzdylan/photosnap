<template>
  <div class="min-h-screen flex flex-col">
    <Navigation />
    <main class="flex flex-col flex-grow-1 gap-0 mt-[72px] md:mt-0">
      <slot />
    </main>
    <CallToAction v-bind="callToAction" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  const layout = useLayout();
  const { callToAction } = layout.value;
</script>
