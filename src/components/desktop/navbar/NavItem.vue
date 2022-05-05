<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";

interface NavItemProps {
  href: string;
}

defineProps<NavItemProps>();
</script>
<template>
  <RouterLink :to="href" active-class="nav-active">
    <li>
      <slot />
    </li>
  </RouterLink>
</template>
