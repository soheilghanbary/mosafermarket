<script setup lang="ts">
import Select from "@/components/desktop/Select.vue";
import options from "@/utils/cities.json";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import useAgent from "@/hooks/useAgent";
import { useTravelStore } from "@/contexts/travel";
import DatePicker from "./DatePicker.vue";
const { t, locale } = useI18n();
const travel = useTravelStore()
const firstSelectHandler = (currentSelect: any) => travel.setOrigin(currentSelect)
const secondSelectHandler = (currentSelect: any) => travel.setDestination(currentSelect)
const device = useAgent();

interface PriceProps {
  day: number;
  month: number;
  year: number;
  price: number | string;
}

let data:PriceProps[] = [
  {
    day:7,
    month:6,
    year:2022,
    price:500,
  },{
    day:8,
    month:6,
    year:2022,
    price:500,
  },{
    day:9,
    month:6,
    year:2022,
    price:500,
  },{
    day:10,
    month:6,
    year:2022,
    price:500,
  }
]
</script>

<template>
  <div class="home-section" v-if="device.desktop">
    <h1>{{ t("title") }}</h1>
    <h3>{{ t("description") }}</h3>
    <div class="flight-search" :class="{ ltr: locale === 'en' }">
      <Select
        :title="t('origin')"
        :options="options"
        :change="firstSelectHandler"
        :selected="travel.origin.label"
      />
      <Select
        :title="t('destination')"
        :options="options"
        :change="secondSelectHandler"
        :selected="travel.destination.label"
      />
      <DatePicker :data="data" />
      <button
        @click="$router.push('search')"
        class="py-3 px-8 rounded-md bg-blue-500 text-white lg:text-xs 2xl:text-base"
      >
        {{ t("search") }}
      </button>
    </div>
  </div>
</template>
