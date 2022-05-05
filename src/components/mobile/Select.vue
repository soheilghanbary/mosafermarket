<script setup lang="ts">
import { ref } from "vue";
import { useVueFuse } from "vue-fuse";
import {
  XCircleIcon,
  LocationMarkerIcon,
  SearchIcon,
} from "@heroicons/vue/solid";
const show = ref(false);

interface OptionItemProps {
  value: string;
  label: string;
}

interface OptionsProps {
  options: OptionItemProps[];
  change?: any;
  selected?: any;
  title?: string;
}

const props = defineProps<OptionsProps>();
const { search, results, noResults } = useVueFuse(props.options, {
  keys: ["label"],
});
</script>

<template>
  <button @click="show = true" class="mobile-select-field">
    <LocationMarkerIcon />
    <span>{{ selected.length ? selected : title }}</span>
  </button>
  <div class="mobile-select" :class="{ active: show }">
    <div class="header">
      <h3>{{ title }}</h3>
      <button @click="show = false">
        <XCircleIcon />
      </button>
    </div>
    <div class="search">
      <SearchIcon />
      <input type="text" v-model="search" placeholder="جستجو شهر" />
    </div>
    <ul class="list">
      <li
        v-if="!results.length"
        v-for="option in options"
        @click="
          change(option);
          show = false;
        "
        :key="option.value"
      >
        {{ option.label }}
      </li>
      <li
        v-if="results.length"
        v-for="option in results"
        @click="
          change(option);
          show = false;
          results.length = 0;
          search = '';
        "
        :key="option.value"
      >
        {{ option.label }}
      </li>
    </ul>
  </div>
  <div class="select-overlay" @click="show = false" :class="{ active: show }" />
</template>

<style scoped lang="scss">
.mobile-select {
  @apply fixed rounded-t-3xl left-0 bottom-0 w-full bg-white opacity-0 h-3/4 z-30 p-3 duration-300 transform translate-y-full;
  box-shadow: 0 -3px 3px rgba($color: #000000, $alpha: 0.05);
  .header {
    @apply flex justify-between items-center px-4 pt-2;
    h3 {
      @apply font-semibold text-slate-600 text-2xl;
    }
    button {
      @apply flex justify-center items-center bg-white rounded-full ring-slate-500 w-6 h-6;
    }
  }

  &.active {
    @apply transform-none opacity-100;
  }

  .search {
    @apply flex items-center relative;
    input {
      @apply rounded-full w-full border border-slate-300 py-3 pl-6 pr-14 leading-6 my-4 focus:ring-2 ring-primary duration-100;
    }
    svg {
      @apply w-6 h-6 absolute right-5 top-1/2 transform -translate-y-1/2;
    }
  }

  &-field {
    @apply flex bg-white gap-4 items-center relative text-slate-500 py-3 px-6 rounded-lg;
    svg {
      @apply text-slate-500 w-6 h-6;
    }
  }

  .list {
    @apply flex flex-col gap-2 divide-y divide-slate-200 h-3/4;
    overflow: auto scroll;
    li {
      @apply p-3;
    }
  }
}

.select-overlay {
  @apply fixed top-0 left-0 w-full h-full z-20 duration-300;
  background-color: rgba($color: #000000, $alpha: 0.5);
  visibility: hidden;
  opacity: 0;
  &.active {
    opacity: 1;
    visibility: visible;
  }
}
</style>
