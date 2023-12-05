<template>
  <section>
    <div class="inner-section">
      <div class="content-block-wrapper" :class="contentOrder">
        <div class="content-block">
          <h1 class="font-bold uppercase">
            {{ title }}
          </h1>
          <p>
            {{ subtitle }}
          </p>
          <UILink class="mt-8" :to="cta.href">{{ cta.text }}</UILink>
        </div>
      </div>
      <div class="image-wrapper">
        <NuxtImg
          :src="image"
          alt="image"
          class="object-cover object-center w-full" />
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    subtitle: string;
    image: string;
    cta: {
      text: string;
      href: string;
    };
    order: 'normal' | 'reverse';
  }>();

  const contentOrder = computed(() => {
    return props.order === 'reverse'
      ? 'order-last  md:order-last'
      : 'order-last  md:order-first';
  });
</script>

<style scoped>
  section {
    @apply w-full  text-pureBlack;
  }

  .inner-section {
    @apply max-w-[1440px] max-h-[690px] md:max-h-[600px] h-full mx-auto grid grid-cols-12 grid-rows-6 md:grid-rows-1 items-stretch w-full;
  }

  .image-wrapper {
    @apply relative overflow-hidden col-span-12 row-span-2 md:col-span-5 lg:col-span-7 self-stretch  h-full   flex items-stretch justify-stretch bg-blue-500;
  }
  .content-block-wrapper {
    @apply col-span-12 row-span-4 md:col-span-7 lg:col-span-5  h-full flex items-center justify-center px-4 py-8;
  }
  .content-block {
    @apply w-full max-w-[400px] flex flex-col gap-6 h-max;
  }
</style>
