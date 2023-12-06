<template>
  <ContentBlock
    v-for="(item, index) in home.blocks"
    v-bind="{
      ...item,
      order: getOrder(index),
      hero: index === 0,
    }" />
  <section class="stories-wrapper">
    <template v-for="(item, index) in stories.stories">
      <StoriesCard v-bind="item" v-if="index < 5 && !item.featured" />
    </template>
  </section>
  <section class="w-full ppx-8 py-24">
    <div class="features-wrapper">
      <template v-for="(item, index) in features">
        <UIFeature v-bind="item" v-if="index < 3" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  import stories from '@/data/stories.json';
  import features from '@/data/features.json';
  const home = useHome();

  const isZeroOrEven = (num: number): boolean => {
    return num === 0 || num % 2 === 0;
  };

  const getOrder = (index: number): 'normal' | 'reverse' => {
    return isZeroOrEven(index) ? 'normal' : 'reverse';
  };
</script>
