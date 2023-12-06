<template>
  <ContentBlock
    v-for="(item, index) in page.blocks"
    v-bind="{
      ...item,
      order: getOrder(index),
      hero: index === 0,
    }" />
  <section class="w-full ppx-8 py-24">
    <div class="features-wrapper">
      <template v-for="(item, index) in features">
        <UIFeature v-bind="item" />
      </template>
    </div>
  </section>
</template>

<script setup lang="ts">
  import features from '@/data/features.json';
  const page = useFeatures();

  const isZeroOrEven = (num: number): boolean => {
    return num === 0 || num % 2 === 0;
  };

  const getOrder = (index: number): 'normal' | 'reverse' => {
    return isZeroOrEven(index) ? 'normal' : 'reverse';
  };
</script>
