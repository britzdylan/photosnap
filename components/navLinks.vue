<template>
  <ul class="hidden md:flex justify-center items-center">
    <li v-for="item in links">
      <NuxtLink :key="item.text" :to="item.href" class="nav-link">
        {{ item.text }}
      </NuxtLink>
    </li>
  </ul>
</template>

<script lang="ts">
import type 
</script>
