<template>
  <section>
    <div class="inner-section">
      <div class="content-block-wrapper" :class="[contentOrder, isHero]">
        <div
          v-if="hero"
          class="absolute md:hidden block h-1.5 w-[304px] bg-gradient-to-tr top-0 from-brand-blue via-brand-pink to-brand-orange"></div>
        <div
          v-if="hero"
          class="absolute hidden md:block w-1.5 h-[304px] bg-gradient-to-tr left-0 from-brand-blue via-brand-pink to-brand-orange"></div>
        <div class="content-block">
          <h1 class="font-bold uppercase text-inherit">
            {{ title }}
          </h1>
          <p :class="descriptionColor">
            {{ subtitle }}
          </p>
          <UILink
            v-if="cta"
            class="mt-8 text-inherit"
            :class="{
              dark: hero,
              '': !hero,
            }"
            :to="cta.href"
            >{{ cta.text }}</UILink
          >
        </div>
      </div>
      <div class="image-wrapper">
        <NuxtImg :src="image" alt="image" class="object-cover w-full" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    subtitle: string;
    image: string;
    cta?: {
      text: string;
      href: string;
    };
    order: 'normal' | 'reverse';
    hero: boolean;
  }>();

  const contentOrder = computed(() => {
    return props.order === 'reverse'
      ? 'order-last  md:order-last'
      : 'order-last  md:order-first';
  });

  const isHero = computed(() => {
    return props.hero ? 'relative bg-pureBlack !text-pureWhite' : '';
  });

  const descriptionColor = computed(() => {
    return props.hero ? 'text-pureWhite/80' : 'text-pureBlack/80';
  });
</script>

<style scoped>
  section {
    @apply w-full;
  }

  .inner-section {
    @apply max-w-[1920px] h-[690px] md:h-[600px]  mx-auto grid grid-cols-12 grid-rows-6 md:grid-rows-1 items-stretch w-full;
  }

  .image-wrapper {
    @apply relative overflow-hidden col-span-12 row-span-2 md:col-span-5 lg:col-span-7 self-stretch  h-full   flex items-stretch justify-stretch;
  }
  .content-block-wrapper {
    @apply col-span-12 row-span-4 md:col-span-7 lg:col-span-5  h-full flex items-center justify-center px-4 py-8 text-pureBlack;
  }
  .content-block {
    @apply w-full max-w-[400px] flex flex-col gap-6 h-max;
  }
</style>
