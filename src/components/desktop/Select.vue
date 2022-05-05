<script setup lang="ts">
import { ref } from "vue";
import { ChevronDownIcon } from "@heroicons/vue/solid";
import { LocationMarkerIcon } from "@heroicons/vue/outline";
const show = ref(false);
interface OptionsProps {
  options: any[];
  change: any;
  selected: any;
  title: string;
}
defineProps<OptionsProps>();
</script>

<template>
  <div class="select">
    <div class="control">
      <button @focus="show = !show" @blur="show = false">
        <LocationMarkerIcon />
        {{ selected.length ? selected : title }}
        <ChevronDownIcon :class="{ arrowActive: show }" />
      </button>
    </div>
    <ul class="options" :class="{ show: show }">
      <li @click="change(option)" v-for="option in options" :key="option.value">
        <LocationMarkerIcon />
        <span class="flex-1">{{ option.label }}</span>
        <span>ann</span>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss">
.select {
  .control {
    @apply flex flex-col gap-1;
    button {
      @apply flex justify-between items-center relative text-slate-500 py-3 px-6 pr-12 shadow shadow-slate-300/30 rounded-lg bg-white w-64 text-right border;
      // xl
      @apply xl:text-base;
      // lg
      @apply lg:text-xs;
      // 2xl
      @apply 2xl:text-base;

      svg {
        @apply absolute left-3 w-6 h-6 duration-150;
        &.arrowActive {
          @apply transform rotate-180;
        }
      }
      svg:nth-child(2) {
        @apply absolute right-3 w-6 h-6 duration-150;
      }
    }
  }

  .options {
    @apply absolute border z-10 mt-2 divide-y divide-slate-200 flex flex-col p-1 gap-1 shadow-md shadow-slate-300/30 rounded-lg bg-white w-64 h-56 duration-200;
    overflow: auto scroll;
    visibility: hidden;
    transform: translateY(1rem);
    opacity: 0;
    li {
      @apply text-slate-500 py-3 flex lg:text-xs 2xl:text-base items-center gap-4 px-4 hover:bg-sky-100 rounded cursor-pointer duration-150;
      svg {
        @apply w-6 h-6 text-slate-400 lg:w-4 lg:h-4 2xl:w-6 2xl:h-6;
      }
    }

    &.show {
      visibility: visible;
      transform: translateY(0);
      opacity: 1;
    }
    &::-webkit-scrollbar {
      width: 0.3rem;
    }

    &::-webkit-scrollbar-track {
      @apply rounded-full;
    }
    &::-webkit-scrollbar-thumb {
      @apply rounded-full bg-slate-300;
    }
    &::-webkit-scrollbar-thumb:hover {
      @apply bg-slate-400;
    }
  }
}
</style>
