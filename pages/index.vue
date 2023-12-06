<template>
  <ContentBlock
    v-for="(item, index) in home.blocks"
    v-bind="{
      ...item,
      order: getOrder(index),
      hero: index === 0,
    }" />
</template>

<script setup lang="ts">
  const home = useHome();

  const isZeroOrEven = (num: number): boolean => {
    return num === 0 || num % 2 === 0;
  };

  const getOrder = (index: number): 'normal' | 'reverse' => {
    return isZeroOrEven(index) ? 'normal' : 'reverse';
  };
</script>
/
