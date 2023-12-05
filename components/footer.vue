<template>
  <footer class="bg-pureBlack w-full mt-auto text-pureWhite">
    <nav
      class="max-w-[1440px] w-full px-8 py-24 mx-auto grid grid-cols-12 grid-rows-5 md:grid-rows-2 gap-8 justify-items-center md:justify-items-start items-start overflow-hidden">
      <NuxtLink class="col-span-12 md:col-span-3" :to="logo.href">
        <NuxtImg :alt="logo.alt" :src="logo.src" class="w-[120px] mx-auto" />
      </NuxtLink>
      <div
        class="flex items-center gap-3 col-span-12 w-max md:col-span-3 md:row-start-2">
        <a
          v-for="item in social"
          :key="item.icon"
          :href="item.href"
          class="hover:opacity-50 transition-all duration-300 ease-in-out">
          <NuxtImg
            :alt="item.icon"
            :src="`/${item.icon}.svg`"
            class="w-4 h-4" />
        </a>
      </div>
      <ul
        class="flex md:flex-col gap-6 col-span-12 w-max md:col-span-6 md:row-start-1 md:row-span-2">
        <li v-for="item in links">
          <NuxtLink
            :key="item.text"
            :to="item.href"
            class="nav-link text-pureWhite">
            {{ item.text }}
          </NuxtLink>
        </li>
      </ul>
      <UILink class="col-span-12 md:col-span-3" :to="cta.href">{{
        cta.text
      }}</UILink>
      <small class="text-lightGrey col-span-12 md:col-span-3">
        Copyright {{ new Date().getFullYear() }}. All Rights Reserved
      </small>
    </nav>
  </footer>
</template>

<script setup lang="ts">
  const nav = useNavigation();
  const { cta } = nav.value.header;
  const { social, logo, links } = nav.value.footer;
</script>
