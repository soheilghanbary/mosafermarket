<script setup lang="ts">
  import { MenuIcon } from "@heroicons/vue/outline"
  import { useSidebar } from '@/contexts/sidebar'
  const sidebar = useSidebar()
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/images/site.svg" />
      <h3>{{ $t('title')}}</h3>
    </div>
    <MenuIcon class="w-6 h-6" @click="sidebar.toggleSidebar" />
  </nav>
</template>
