<template>
  <div
    :class="getProStyle()"
    class="w-full lg:w-[350px] relative flex flex-col gap-8 text-center items-center justify-center p-8 h-full">
    <div
      v-if="props.title === 'Pro'"
      class="absolute top-0 h-1.5 bg-gradient-to-tr left-0 right-0 from-brand-blue via-brand-pink to-brand-orange"></div>
    <h3>{{ title }}</h3>
    <p class="opacity-70">{{ description }}</p>
    <div class="price-wrapper">
      <div class="price text-[40px] font-bold">
        <span class="">$</span>
        <span class="">{{ price.monthly.toFixed(2) }}</span>
        <small class="opacity-70 block text-xs font-normal">per month</small>
      </div>
    </div>
    <UIButton
      :class="{
        dark: props.title === 'Pro',
      }"
      class="w-full"
      to="/pricing"
      >Pick Plan</UIButton
    >
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    title: string;
    description: string;
    price: {
      monthly: number;
      annually: number;
    };
    features_included: string;
  }>();

  const getProStyle = (): string => {
    return props.title === 'Pro'
      ? 'bg-pureBlack text-pureWhite'
      : 'bg-neutral-100 text-pureBlack';
  };
</script>
