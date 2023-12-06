<template>
  <ContentBlock
    v-for="(item, index) in page.blocks"
    v-bind="{
      ...item,
      order: getOrder(index),
      hero: index === 0,
    }" />
  <section class="pricing-wrapper w-full py-24 px-8">
    <div class="card-section">
      <UIToggle
        class="md:col-span-3"
        :checked="checked"
        @update:checked="togglePricing" />
      <PricingCard
        v-for="(item, index) in plans"
        v-bind="{
          ...item,
          isYearly: checked,
        }"
        :class="getCardPosition(index)" />
    </div>

    <div class="compare">
      <h2 class="large text-center mt-24 mb-8">Compare</h2>
      <div class="pricing-table">
        <div class="pricing-table-row !hidden md:!grid">
          <p>The Features</p>
          <p>Basic</p>
          <p>Pro</p>
          <p>Business</p>
        </div>
        <div class="pricing-table-row" v-for="(value, key) in plan_features">
          <p>{{ value }}</p>
          <div class="tick icon-no-fill">
            <p class="block md:hidden">Basic</p>
            <SvgoCheck v-if="getPlanFeatures(key, 'basic')" />
          </div>
          <div class="tick icon-no-fill">
            <p class="block md:hidden">Pro</p>
            <SvgoCheck v-if="getPlanFeatures(key, 'pro')" />
          </div>
          <div class="tick icon-no-fill">
            <p class="block md:hidden">Business</p>
            <SvgoCheck v-if="getPlanFeatures(key, 'business')" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  import data from '@/data/plans.json';
  const { plans, plan_features } = data;
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

  const getPlanFeatures = (
    i: string,
    plan: 'basic' | 'pro' | 'business'
  ): boolean => {
    const selectedPlan = plans.filter(
      (item) => item.title.toLowerCase() === plan
    )[0];
    const selectedPlanFeatures = Number(selectedPlan.features_included);
    const currentPlanFeatures = Number(i);
    return currentPlanFeatures <= selectedPlanFeatures;
  };
</script>

<style scoped>
  .card-section {
    @apply grid grid-cols-1  lg:grid-cols-3 gap-0 min-h-[470px] max-w-[1440px] mx-auto place-items-stretch;
  }

  .pricing-table {
    @apply max-w-[730px] mx-auto flex flex-col;
  }

  .pricing-table-row {
    @apply w-full grid gap-2 md:gap-0 grid-cols-3 grid-rows-2 md:grid-rows-1 md:grid-cols-5  p-4 py-6 uppercase tracking-widest font-bold border-b-2 border-neutral-200;
  }

  .pricing-table-row .tick {
    @apply row-start-2 md:row-start-auto;
  }

  .pricing-table-row p {
    @apply text-xs text-center col-span-3 md:col-span-1;
  }

  .tick {
    @apply flex flex-col items-center justify-start gap-2;
  }

  .pricing-table-row:first-child {
    @apply border-b-2 border-pureBlack;
  }

  .pricing-table-row > p:first-child {
    @apply col-span-2 text-left;
  }
</style>
