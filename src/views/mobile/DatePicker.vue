<script setup lang="ts">
import MJ from "@/components/calendar/mj-date.vue";
import MG from "@/components/calendar/mg-date.vue";
import { ref } from "vue";
import { useDateChanger } from "@/contexts/calender";
import { CalendarIcon } from "@heroicons/vue/outline";
import useAgent from "@/hooks/useAgent";
import jDate from "jalali-date";
import { useTravelStore } from "@/contexts/travel";
const travel = useTravelStore()
const GDT = useDateChanger();
let price = defineProps({
  data: Array,
});
const show = ref(false);
const date = ref<any>({});
const HideDate = () => {
  show.value = false;
};
const giveDate = (t: any, e:any) => {
  if (e.year != "" && e.month != "" && e.date != "") {
    if (t == "J") {
      console.log(e, t);
      let tt = new jDate(e.year, e.month, e.date)._d;
      let dates = {
        jalali: {
          day: e.date,
          month: e.month,
          year: e.year,
        },
        gregorian: {
          day: tt.getDate(),
          month: tt.getMonth() + 1,
          year: tt.getFullYear(),
        },
      };
      date.value = dates;
      travel.setDate(dates)
    } else {
      let tt = new jDate(new Date(e.year, e.month, e.date));
      let dates = {
        jalali: {
          day: tt.getDate(),
          month: tt.getMonth(),
          year: tt.getFullYear(),
        },
        gregorian: {
          day: e.date,
          month: e.month,
          year: e.year,
        },
      };
      date.value = dates;
      travel.setDate(dates)
    }
    HideDate();
  }
};
</script>
<template>
  <div class="calendar">
    <button @click="show = true" class="field">
      <CalendarIcon />
      <span>{{
        GDT.GDT === "J"
          ? date.jalali?.day != undefined &&
            date.jalali.month != undefined &&
            date.jalali.year != undefined
            ? date.jalali.year +
              "/" +
              date.jalali.month +
              "/" +
              date.jalali?.day
            : "تاریخ"
          : date.gregorian?.day != undefined &&
            date.gregorian?.month != undefined &&
            date.gregorian?.year != undefined
          ? date.gregorian?.year +
            "/" +
            date.gregorian?.month +
            "/" +
            date.gregorian?.day
          : "تاریخ"
      }}</span>
    </button>
    <MG
      v-if="GDT.GDT == 'G'"
      :prices="price.data"
      :showM="show"
      :hide="HideDate"
      :give="giveDate"
    />
    <MJ
      v-else-if="GDT.GDT == 'J'"
      :prices="price.data"
      :showM="show"
      :hide="HideDate"
      :give="giveDate"
    />
  </div>
</template>


<style scoped lang="scss">
  .calendar {
  @apply relative;
  .field {
    @apply flex justify-between items-center relative text-slate-500 py-3 px-6 shadow shadow-slate-300/30 rounded-lg bg-white lg:w-64 xl:w-64 w-full lg:border xl:border text-right mt-1 lg:mt-0 xl:mt-0;
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
  .date-picker {
    @apply text-slate-400 p-2 duration-200 opacity-0 translate-y-2 rounded-md shadow-md absolute w-[800px] left-0 mt-4 border bg-white z-20;
    visibility: hidden;
    .wrapper {
      @apply grid grid-cols-2 gap-2;
    }

    &.ltr {
      @apply right-0;
    }

    &.active {
      visibility: visible;
      @apply transform-none opacity-100;
    }

    .weekend {
      @apply grid grid-cols-7 items-center bg-sky-50 my-2 rounded-md text-sky-500 shadow shadow-slate-300/30;
      span {
        @apply p-3 text-center flex justify-center items-center;
      }
    }

    .body {
      @apply grid grid-cols-7 items-center gap-1;
      span {
        @apply p-3 hover:bg-teal-100 rounded-md hover:text-teal-500 duration-100 cursor-pointer ring-emerald-50 text-center flex justify-center items-center border border-slate-100 shadow shadow-slate-300/30;
      }
    }
  }
}

</style>