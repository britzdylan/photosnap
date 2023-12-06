<template>
  <li class="flex flex-col gap-6 items-center max-w-[350px] w-full min-h-[236px] p-8">
    <div class="mb-4 w-max h-max">
      <component :is="getIcon()" class="!w-[72px] !h-[72px] text-pureBlack" />
    </div>
    <h3 class="text-center">{{ title }}</h3>
    <p class="text-center">{{ description }}</p>
  </li>
</template>

<script setup lang="ts">
  const props = defineProps<{
    title: string;
    description: string;
    icon: string;
  }>();

  const getIcon = () => {
    return resolveComponent(`svgo-${props.icon}`);
  };
</script>
