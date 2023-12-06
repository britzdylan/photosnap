<template>
  <div class="bg-cta-bg bg-bottom">
    <div class="h-[280px] w-full p-8 relative bg-pureBlack/50">
      <div
        class="absolute hidden md:block w-1.5 bg-gradient-to-tr left-0 top-0 bottom-0 from-brand-blue via-brand-pink to-brand-orange"></div>
      <div
        class="flex flex-col md:flex-row md:items-center h-full justify-between max-w-[1440px] mx-auto">
        <h2 class="large text-pureWhite max-w-xs">{{ title }}</h2>
        <UILink class="dark" :to="cta.href">{{ cta.text }}</UILink>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  defineProps<{
    title: string;
    cta: {
      text: string;
      href: string;
    };
    image: string;
  }>();
</script>
