<template>
  <ContentBlock
    v-for="(item, index) in home.blocks"
    v-bind="{
      ...item,
      order: getOrder(index),
      hero: index === 0,
    }" />
  <section
    class="stories-wrapper">
    <template v-for="(item, index) in stories.stories">
      <StoriesCard v-bind="item" v-if="index < 5 && !item.featured" />
    </template>
  </section>
</template>

<script setup lang="ts">
  import type { Story } from '@/components/Stories/card.vue';
  import stories from '@/data/stories.json';
  const home = useHome();

  console.log('stories', stories);
  const isZeroOrEven = (num: number): boolean => {
    return num === 0 || num % 2 === 0;
  };

  const getOrder = (index: number): 'normal' | 'reverse' => {
    return isZeroOrEven(index) ? 'normal' : 'reverse';
  };
</script>
