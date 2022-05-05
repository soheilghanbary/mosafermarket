<script lang="ts" setup>
import Navbar from "@/components/desktop/navbar/Navbar.vue";
import MobileNavbar from "@/components/mobile/navbar/Navbar.vue";
import useAgent from '@/hooks/useAgent'
import Sidebar from './mobile/sidebar/Sidebar.vue'
import Footer from './Footer.vue'
const device = useAgent()
</script>

<template>
  <div class="max-w-screen-xl p-3 mx-auto">
    <Navbar v-if="device.desktop" />
    <MobileNavbar v-else />
    <div class="p-2 min-h-screen">
      <slot />
    </div>
    <Sidebar />
  </div>
  <Footer />
</template>