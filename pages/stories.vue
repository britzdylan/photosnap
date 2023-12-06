<template>
  <section class="w-full min-h-650px max-w-[1920px] mx-auto">
    <template v-for="item in stories.stories">
      <StoriesFeatured v-bind="item" v-if="item.featured" />
    </template>
  </section>
  <section class="stories-wrapper">
    <template v-for="item in stories.stories">
      <StoriesCard v-bind="item" v-if="!item.featured" />
    </template>
  </section>
</template>

<script setup lang="ts">
  import stories from '@/data/stories.json';
</script>
