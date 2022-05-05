<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Zoom, Navigation, Pagination } from "swiper";
import { getMoment } from "jalali-date-time/dist/script/date";
import { data } from "autoprefixer";

interface PropsTypes {
  date: string;
  prices: any[]
}


let monthChecker = (e: number) => {
  switch (e) {
    case 0:
      return "Jan";
    case 1:
      return "Feb"; 
    case 2:
      return "Mar";
    case 3:
      return "Apr";
    case 4:
      return "May";
    case 5:
      return "June";
    case 6:
      return "July";
    case 7:
      return "Aug";
    case 8:
      return "Sept";
    case 9:
      return "Oct";
    case 10:
      return "Nov";
    case 11:
      return "Dec";
  }
};
let props = defineProps<PropsTypes>();
let date = new Date(props.date);
let day = 0;
let days = ref<any>([]);
let swp: any = ref<any>({});
while (day < 15) {
  if (date > new Date()) {
    let price: any = 0;
    if (
      props.prices.filter(
        (a: any) =>
          a.date == date.getDate() &&
          a.month == date.getMonth() + 1 &&
          a.year == date.getFullYear()
      )[0] != undefined
    ) {
      price = props.prices.filter(
        (a: any) =>
          a.date == date.getDate() &&
          a.month == date.getMonth() + 1 &&
          a.year == date.getFullYear()
      )[0].price;
    } else {
      price = "-";
    }
    let obj: any = {
      date: date.getDate(),
      day: date.getDay(),
      month: date.getMonth(),
      monthTitle: monthChecker(date.getMonth()),
      year: date.getFullYear(),
      price: price,
    };
    days.value.push(obj);
  } else {
    let price: any = 0;
    console.log("atron");
    if (
      props.prices.filter(
        (a: any) =>
          a.date == date.getDate() &&
          a.month == date.getMonth() + 1 &&
          a.year == date.getFullYear()
      )[0] != undefined
    ) {
      price = props.prices.filter(
        (a: any) =>
          a.date == date.getDate() &&
          a.month == date.getMonth() + 1 &&
          a.year == date.getFullYear()
      )[0].price;
    } else {
      price = "-";
    }
    let obj: any = {
      date: date.getDate(),
      day: date.getDay(),
      month: date.getMonth(),
      monthTitle: monthChecker(date.getMonth()),
      year: date.getFullYear(),
      price: price,
    };

    days.value.push(obj);
  }
  date.setDate(date.getDate() + 1);
  day++;
}
const onSwiper = (swiper: any) => {
  swp.value = swiper;
};
const onSlideChange = () => {};
let onNext = () => {
  swp.value.slideNext();
};
let onPrev = () => {
  swp.value.slidePrev();
};
const swiperBreakpoints = {
  320: {
    slidesPerView: 3,
  },
  406: {
    slidesPerView: 4,
  },
  640: {
    slidesPerView: 5,
  },
  768: {
    slidesPerView: 5,
  },
  1024: {
    slidesPerView: 6,
  },
  1200: {
    slidesPerView: 6,
  },
};
let modules = [Zoom, Navigation, Pagination];
</script>
<template>
  <div class="grid grid-cols-9" style="direction: ltr">
    <button
      @click="onNext()"
      class="bg-gray-50 w-1/2 h-auto shadow text-2xl mx-auto rounded-2xl text-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-1/2 m-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M11 19l-7-7 7-7m8 14l-7-7 7-7"
        />
      </svg>
    </button>
    <div class="col-span-7">
      <swiper
        :breakpoints="swiperBreakpoints"
        :space-between="10"
        :modules="modules"
        :navigation="true"
        navigation
        :pagination="{ clickable: true }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="i in days">
          <div
            class="card"
            :class="{
              today:
                new Date().getDate() == i.date &&
                new Date().getMonth() == i.month &&
                new Date().getFullYear() == i.year,
            }"
          >
            <span>{{ i.date }}</span>
            <span class="text-[12px] text-blue-400">{{ i.monthTitle }}</span>
            <span class="text-[10px] text-lime-500">{{ i.price }}</span>
          </div>
        </swiper-slide>
      </swiper>
    </div>
    <button
      @click="onPrev()"
      class="bg-gray-50 w-1/2 h-auto shadow text-2xl mx-auto rounded-2xl text-gray-500"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="w-1/2 m-auto"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M13 5l7 7-7 7M5 5l7 7-7 7"
        />
      </svg>
    </button>
  </div>
</template>
<style lang="scss">
.today {
  color: #444 !important;
  background: #2af4 !important;
}
.card {
  @apply m-2 bg-gray-50 hover:bg-blue-100 hover:cursor-pointer flex flex-col items-center p-2 rounded-md shadow-md;
}
</style>
