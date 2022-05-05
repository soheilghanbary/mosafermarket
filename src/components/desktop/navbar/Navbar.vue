<script lang="ts" setup>
import { useI18n } from "vue-i18n";
import NavItem from "./NavItem.vue";
const { t, locale } = useI18n();
</script>

<template>
  <nav class="navbar">
    <div class="logo">
      <img src="@/assets/images/site.svg" />
      <h3>Mosafer</h3>
    </div>
    <ul>
      <NavItem href="/">{{ t("navs[0].title") }}</NavItem>
      <NavItem href="/agencies">{{ t("navs[1].title") }}</NavItem>
      <NavItem href="/blog">{{ t("navs[2].title") }}</NavItem>
      <NavItem href="/contact">{{ t("navs[4].title") }}</NavItem>
    </ul>
    <div class="navbar-locale">
      <button class="lang-btn" @click="locale = 'en'">EN</button>
      <button class="lang-btn" @click="locale = 'fa'">FA</button>
      <button class="lang-btn" @click="locale = 'ab'">AB</button>
    </div>
  </nav>
</template>


<style lang="scss">
.navbar {
  @apply flex justify-between items-center bg-white py-3 px-4 rounded-lg shadow-md shadow-slate-200/30;

  &.lrt {
    direction: ltr;

    .logo {
      @apply flex-row-reverse;
    }

    ul {
      @apply flex-row-reverse;
    }
  }

  .logo {
    @apply flex items-center gap-4;
    h3 {
      @apply font-semibold text-base lg:text-base xl:text-lg;
    }
    img {
      @apply w-12 h-1/2;
    }
  }
  ul {
    @apply lg:flex hidden items-center gap-2 flex-1 justify-center;
    li {
      @apply px-4 py-3 text-slate-400 font-semibold cursor-pointer duration-150 xl:text-sm lg:text-xs 2xl:text-base;
    }
  }
  .lang-btn {
    @apply bg-slate-50 p-2 font-semibold rounded-md shadow-md shadow-slate-300/30 text-slate-400 flex justify-center items-center lg:text-xs xl:text-sm xl:p-2 2xl:text-base 2xl:p-3 hover:text-primary active:scale-90;
  }

  &-locale {
    @apply gap-2 lg:flex hidden;
  }

  .menu-btn {
    @apply lg:hidden p-2 font-semibold text-slate-400 flex justify-center items-center hover:text-primary active:scale-90;
    svg {
      @apply w-6 h-6;
    }
  }

  .nav-active {
    li {
      @apply text-primary hover:text-primary;
    }
  }
}
</style>
