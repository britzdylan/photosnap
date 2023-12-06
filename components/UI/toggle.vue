<template>
  <div
    class="flex gap-6 text-pureBlack items-center justify-center w-full py-8">
    <span class="text-sm">Monthly</span>
    <div class="relative">
      <label
        @click="$emit('update:checked', !props.checked)"
        :class="bg"
        class="flex items-center justify-center w-14 h-8 rounded-full cursor-pointer relative">
        <span
          class="absolute w-6 h-6 rounded-full bg-pureWhite transition-all ease-out transform duration-300 left-1"
          :class="{
            'translate-x-6': checked,
          }"></span>
      </label>
    </div>
    <span class="text-sm">Yearly</span>
  </div>
</template>

<script lang="ts" setup>
  const props = defineProps<{
    checked: boolean;
  }>();

  const bg = computed(() => {
    return props.checked ? 'bg-pureBlack' : 'bg-neutral-200';
  });
</script>
