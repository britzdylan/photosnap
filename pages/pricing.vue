<template>
  <ContentBlock
    v-for="(item, index) in page.blocks"
    v-bind="{
      ...item,
      order: getOrder(index),
      hero: index === 0,
    }" />
  <section class="pricing-wrapper w-full py-24 px-8">
    <UIToggle :checked="checked" @update:checked="togglePricing" />
    <div class="card-section">
      <PricingCard
        v-for="(item, index) in plans"
        v-bind="{
          ...item,
          isYearly: checked,
        }"
        :class="getCardPosition(index)" />
    </div>
  </section>
</template>

<script setup lang="ts">
  import data from '@/data/plans.json';
  const { plans } = data;
  const page = usePricing();
  const checked = ref(false);
  const isZeroOrEven = (num: number): boolean => {
    return num === 0 || num % 2 === 0;
  };

  const getOrder = (index: number): 'normal' | 'reverse' => {
    return isZeroOrEven(index) ? 'normal' : 'reverse';
  };

  const getCardPosition = (index: number): string => {
    switch (index) {
      case 0:
        return 'place-self-center ml-auto !h-[80%]';
      case 1:
        return 'place-self-center';
      case 2:
        return 'place-self-center mr-auto !h-[80%]';
      default:
        return 'place-self-center';
    }
  };

  const togglePricing = (c: boolean): void => {
    checked.value = c;
  };
</script>

<style scoped>
  .card-section {
    @apply grid grid-cols-1 lg:grid-cols-3 gap-0 min-h-[470px] max-w-[1440px] mx-auto place-items-stretch;
  }
</style>
