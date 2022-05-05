<script setup lang="ts">
import { ref } from "vue";
import { SelectorIcon } from "@heroicons/vue/solid";
import options from "@/utils/cities.json";
import Select from "@/components/mobile/Select.vue";
import { useI18n } from "vue-i18n";
import { useTravelStore } from "@/contexts/travel";
import DatePicker from "./DatePicker.vue";
const { t, locale } = useI18n();
const travel = useTravelStore()
const firstSelectHandler = (currentSelect: any) => travel.setOrigin(currentSelect)
const secondSelectHandler = (currentSelect: any) => travel.setDestination(currentSelect)
const changeDirection = () => {
  const firstCity = travel.origin;
  const secondCity = travel.destination;
  travel.setOrigin(secondCity)
  travel.setDestination(firstCity)
};

let data = [
  {
    date: 7,
    month: 5,
    year: 2022,
    price: 500,
  },
  {
    date: 8,
    month: 5,
    year: 2022,
    price: 500,
  },
  {
    date: 9,
    month: 5,
    year: 2022,
    price: 500,
  },
  {
    date: 10,
    month: 5,
    year: 2022,
    price: 500,
  },
];
</script>

<template>
  <div class="flight-search" :class="{ ltr: locale === 'en' }">
    <h3 class="title">{{ t("search-flight") }}</h3>
    <div class="container">
      <div class="section">
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
        <button @click="changeDirection" class="direct-btn">
          <SelectorIcon />
        </button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.flight-search {
  @apply p-5;
  .title {
    @apply relative pb-4 mb-4 text-2xl text-slate-600 font-semibold;
    &::after {
      width: 50px;
      height: 3px;
      border-radius: 10099px;
      content: "";
      display: block;
      position: absolute;
      bottom: 3px;
      background-color: #475569;
    }
  }
  &.ltr {
    .title {
      @apply text-left;
      &::after {
        left: 0;
      }
    }
  }
  .container {
    @apply bg-[#F2F8FF] rounded-lg p-4;
    .section {
      @apply flex flex-col gap-1 relative;
    }
    .direct-btn {
      @apply p-2 absolute top-1/2 left-3 bg-white transform -translate-y-1/2 rounded-full ring-2 ring-slate-500 w-10 h-10;
      svg {
        @apply w-6 h-6;
      }
    }
  }
}
</style>
