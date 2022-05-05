<script setup lang="ts">
import { useI18n } from "vue-i18n";
import FlightSearch from "../views/mobile/FlightSearch.vue";
const { t } = useI18n();
</script>

<template>
  <div class="flex lg:flex-row-reverse flex-col items-center gap-10 xl:p-10 lg:p-10 p-7">
    <img class="lg:w-2/5 w-1/2" src="@/assets/icons/plane.svg" />
    <div
      class="lg:w-3/5 flex flex-col gap-4 lg:items-stretch lg:text-right items-center text-center"
    >
      <h1 class="text-3xl font-semibold">{{ t("about.title") }}</h1>
      <p class="leading-8">{{ t("about.description") }}</p>
    </div>
  </div>
</template>
