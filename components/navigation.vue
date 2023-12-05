<template>
  <nav
    class="max-w-[1440px] h-[72px] bg-pureWhite w-full flex justify-between items-center p-8 mx-auto">
    <NuxtLink :to="logo.href">
      <NuxtImg :alt="logo.alt" :src="logo.src" class="w-[120px]" />
    </NuxtLink>

    <ul class="hidden md:flex justify-center items-center">
      <li v-for="item in links">
        <NuxtLink :key="item.text" :to="item.href" class="nav-link">
          {{ item.text }}
        </NuxtLink>
      </li>
    </ul>
    <UIButton class="hidden md:flex" :to="cta.href">{{ cta.text }}</UIButton>

    <UIBurger :open="showMobile" @click="toggleMobile" />
    <div
      v-show="showMobile"
      @click="toggleMobile"
      class="md:hidden absolute top-[72px] left-0 right-0 bottom-0 bg-black/10 transition-all duration-300 ease-out">
      <div
        :class="{
          '!h-max': showMobile,
        }"
        class="flex flex-col gap-6 w-full bg-pureWhite p-8 h-20 transition-all duration-300 ease-out overflow-hidden">
        <ul
          class="flex flex-col justify-center items-center gap-6 border-b border-lightGrey pb-6">
          <li v-for="item in links">
            <NuxtLink :key="item.text" :to="item.href" class="nav-link">
              {{ item.text }}
            </NuxtLink>
          </li>
        </ul>
        <UIButton class="flex w-full" :to="cta.href">{{ cta.text }}</UIButton>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
  const showMobile = ref(false);
  const nav = useNavigation();
  const { logo, cta, links } = nav.value.header;

  const toggleMobile = () => (showMobile.value = !showMobile.value);
</script>
