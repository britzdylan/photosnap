<template>
  <div class="min-h-screen flex flex-col">
    <Navigation />
    <main class="flex flex-col flex-grow-1 gap-0 mt-[72px] md:mt-0">
      <slot />
    </main>
    <CallToAction v-show="showCTA" v-bind="layout.callToAction" />
    <Footer />
  </div>
</template>

<script setup lang="ts">
  const layout = useLayout();
  const router = useRouter();
  const route = useRoute();
  const currentRoute = ref(route.name);

  router.beforeEach((to, from, next) => {
    console.log('to', to.name);
    currentRoute.value = to.name;
    next();
  });

  const showCTA = computed((): boolean => {
    // @ts-ignore
    return ['pricing', 'features'].includes(currentRoute.value!);
  });
</script>
