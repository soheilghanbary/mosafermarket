<script setup lang="ts">
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Zoom, Navigation, Pagination } from "swiper";
import { getMoment } from "jalali-date-time/dist/script/date";
import { data } from "autoprefixer";
import jDate from "jalali-date";

interface PriceProps {
  day: number;
  month: number;
  year: number;
  price: number | string;
}

interface PropsTypes {
  date: any;
  prices: PriceProps[];
}

let monthChecker = (e: number) => {
  switch (e) {
    case 1:
      return "فروردین";
    case 2:
      return "اردیبهشت";

    case 3:
      return "خرداد";

    case 4:
      return "تیر";

    case 5:
      return "مرداد";

    case 6:
      return "شهریور";

    case 7:
      return "مهر";

    case 8:
      return "آبان";

    case 9:
      return "اذر";

    case 10:
      return "دی";

    case 11:
      return "بهمن";

    case 12:
      return "اسفند";
  }
};
let props = defineProps<PropsTypes>();
let date = new Date(props.date);
let day = 0;
let days = ref<any>([]);
let swp: any = ref<any>({});
while (day < 15) {
  let tt = new jDate(date);
  if (date > new Date()) {
    let getPrice: any = 0;
    if (
      props.prices.filter(
        (a: any) =>
          a.date == date.getDate() &&
          a.month == date.getMonth() + 1 &&
          a.year == date.getFullYear()
      )[0] != undefined
    ) {
      getPrice = props.prices.filter(
        (a: any) =>
          a.date == date.getDate() &&
          a.month == date.getMonth() + 1 &&
          a.year == date.getFullYear()
      )[0].price;
    } else {
      getPrice = "-";
    }
    let obj: any = {
      date: tt.getDate(),
      gdate: date.getDate(),
      day: tt.getDay(),
      month: tt.getMonth(),
      gmonth: date.getMonth(),
      monthTitle: monthChecker(tt.getMonth()),
      year: tt.getFullYear(),
      gyear: date.getFullYear(),
      price: getPrice,
    };
    days.value.push(obj);
  } else {
    let getPrice: number | string = 0;
    if (
      props.prices.filter(
        (a: any) =>
          a.date == date.getDate() &&
          a.month == date.getMonth() + 1 &&
          a.year == date.getFullYear()
      )[0] != undefined
    ) {
      getPrice = props.prices.filter(
        (a: any) =>
          a.date == date.getDate() &&
          a.month == date.getMonth() + 1 &&
          a.year == date.getFullYear()
      )[0].price;
    } else {
      getPrice = "-";
    }
    let obj: any = {
      date: tt.getDate(),
      gdate: date.getDate(),
      day: tt.getDay(),
      month: tt.getMonth(),
      gmonth: date.getMonth(),
      monthTitle: monthChecker(tt.getMonth()),
      year: tt.getFullYear(),
      gyear: date.getFullYear(),
      price: getPrice,
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
    slidesPerView: 6,
  },
  768: {
    slidesPerView: 6,
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
      <Swiper
        :breakpoints="swiperBreakpoints"
        :space-between="5"
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
                new Date().getDate() == i.gdate &&
                new Date().getMonth() == i.gmonth &&
                new Date().getFullYear() == i.gyear,
            }"
          >
            <span>{{ i.date }}</span>
            <span class="text-[12px] text-blue-400">{{ i.monthTitle }}</span>
            <span class="text-[10px] text-lime-500">{{ i.price }}</span>
          </div>
        </swiper-slide>
      </Swiper>
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
