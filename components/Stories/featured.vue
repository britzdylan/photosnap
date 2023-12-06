<template>
  <div class="story">
    <div class="absolute top-0 right-0 left-0 bottom-0 overflow-hidden -z-20">
      <NuxtImg
        :src="cover_image"
        class="object-cover w-full h-full object-top" />
    </div>
    <div
      class="absolute top-0 right-0 left-0 bottom-0 bg-pureBlack/30 -z-10"></div>
    <div class="text-pureWhite w-full mx-auto max-w-[1440px]">
      <div class="flex flex-col gap-6 h-max max-w-[400px]">
        <h4>Last months featured story</h4>
        <h1>{{ title }}</h1>
        <small class="block">
          {{ renderDate(published_date) }}<b> by {{ author }}</b>
        </small>
        <p class="text-lightGrey">{{ description }}</p>
        <hr class="border-pureWhite/70" />
        <UILink class="dark w-full mt-4 justify-between" to="/"
          >Read Story</UILink
        >
      </div>
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

  const renderDate = (date: number): string => {
    const d = new Date(date);
    return `${d.toLocaleString('default', {
      month: 'long',
    })} ${d.getDate()}, ${d.getFullYear()}`;
  };
</script>

<style scoped>
  .story {
    @apply h-[650px]  relative overflow-hidden flex flex-col items-start justify-center p-8;
  }
</style>
