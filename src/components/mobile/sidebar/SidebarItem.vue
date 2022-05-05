<script setup lang="ts">
import { RouterLink } from "vue-router";
import { useSidebar } from "@/contexts/sidebar";
const sidebar = useSidebar();
interface NavItemProps {
  href: string;
}
defineProps<NavItemProps>();
</script>
<template>
  <RouterLink :to="href" active-class="sidebar-active">
    <li @click="sidebar.toggleSidebar">
      <slot />
    </li>
  </RouterLink>
</template>
