<template>
  <div class="story">
    <div class="absolute top-0 right-0 left-0 bottom-0 overflow-hidden -z-20">
      <NuxtImg :src="cover_image" class="object-cover w-full h-full" />
    </div>
    <div
      class="absolute top-0 right-0 left-0 bottom-0 bg-gradient-to-t from-pureBlack/70 -z-10"></div>
    <div
      class="text-pureWhite flex flex-col gap-3 h-full w-full justify-end p-8 relative group">
      <h3>{{ title }}</h3>
      <p>by {{ author }}</p>
      <hr class="border-pureWhite/70" />
      <UILink class="dark w-full mt-4 justify-between" to="/"
        >Read Story</UILink
      >
      <div
        class="absolute hidden group-hover:block h-1.5 bg-gradient-to-tr left-0 right-0 bottom-0 from-brand-blue via-brand-pink to-brand-orange"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
  export interface Story {
    title: string;
    description: string;
    author: string;
    published_date: number;
    slug: string;
    featured: boolean;
    cover_image: string;
  }

  defineProps<Story>();
</script>

<style scoped>
  .story {
    @apply min-h-[500px] min-w-[360px] relative overflow-hidden justify-items-stretch place-items-stretch aspect-[360/500]  transition-all ease-out duration-300 hover:-translate-y-10;
  }
</style>
