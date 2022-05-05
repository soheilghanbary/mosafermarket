<script setup lang="ts">
import { useSidebar } from "@/contexts/sidebar";
import SidebarItem from "./SidebarItem.vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const sidebar = useSidebar();
</script>
<template>
  <div
    class="sidebar"
    :class="{
      active: sidebar.show,
      ltr: locale === 'en',
      rtl: locale === 'fa' || locale === 'ab',
    }"
  >
    <div class="logo">
      <img src="@/assets/images/site.svg" />
      <h3>{{ t("title") }}</h3>
    </div>
    <ul class="sidebar-body">
      <SidebarItem href="/">{{ t("navs[0].title") }}</SidebarItem>
      <SidebarItem href="/agencies">{{ t("navs[1].title") }}</SidebarItem>
      <SidebarItem href="/blog">{{ t("navs[2].title") }}</SidebarItem>
      <SidebarItem href="/contact">{{ t("navs[4].title") }}</SidebarItem>
    </ul>
    <div class="sidebar-locale">
      <button
        @click="
          () => {
            locale = 'en';
            sidebar.toggleSidebar();
          }
        "
      >
        EN
      </button>
      <button
        @click="
          () => {
            locale = 'fa';
            sidebar.toggleSidebar();
          }
        "
      >
        FA
      </button>
      <button
        @click="
          () => {
            locale = 'ab';
            sidebar.toggleSidebar();
          }
        "
      >
        AB
      </button>
    </div>
  </div>
  <div
    class="sidebar-overlay"
    :class="{ active: sidebar.show }"
    @click="sidebar.toggleSidebar"
  />
</template>

<style lang="scss">
.sidebar {
  @apply transform duration-300 lg:hidden fixed top-0 h-screen bg-white z-30 w-60 shadow-md shadow-slate-300/30;
  &-body {
    @apply p-3 flex flex-col gap-2;
    li {
      @apply py-3 px-4 hover:bg-slate-50 cursor-pointer rounded-md;
    }
  }

  &.rtl {
    @apply -translate-x-full left-0;

    &.active {
      @apply translate-x-0;
    }
  }

  &.ltr {
    @apply right-0 translate-x-full;

    .logo {
      @apply flex-row-reverse;
    }

    &.active {
      @apply translate-x-0;
    }
  }

  &-overlay {
    @apply fixed top-0 duration-300 opacity-0 left-0 w-full h-full bg-[#000000]/30 z-20;
    visibility: hidden;
    &.active {
      @apply opacity-100;
      visibility: visible;
    }
  }
  .sidebar-active {
    li {
      @apply bg-primary text-white;
    }
  }

  .logo {
    @apply flex items-center gap-4 justify-center py-4 border-b;
    h3 {
      @apply font-semibold text-lg;
    }
    img {
      @apply w-12 h-1/2;
    }
  }

  &-locale {
    @apply flex justify-center items-center gap-4 border-t py-4 border-slate-100;
    button {
      @apply bg-slate-50 py-2 px-4 font-semibold rounded-md shadow-md shadow-slate-300/30 text-slate-400 flex justify-center items-center hover:text-primary active:scale-90;
    }
  }
}
</style>
