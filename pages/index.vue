<template>
  <ContentBlock
    v-for="(item, index) in home.blocks"
    v-bind="{
      ...item,
      order: isZeroOrEven(index) ? 'normal' : 'reverse',
      hero: index === 0,
    }" />
</template>

<script setup lang="ts">
  const home = useHome();
  const isZeroOrEven = (num: number): boolean => {
    console.log(num === 0 || num % 2 === 0);
    return num === 0 || num % 2 === 0;
  };
</script>
/
