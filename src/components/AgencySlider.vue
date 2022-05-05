<script lang="ts" setup>
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";

const swiperBreakpoints = {
  320: {
    slidesPerView: 2,
    spaceBetween: 20,
  },
  640: {
    slidesPerView: 2,
    spaceBetween: 30,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 10,
  },
  1024: {
    slidesPerView: 4,
    spaceBetween: 20,
  }
};
</script>

<template>
    <swiper
        class="my-10"
      :slides-per-view="3"
      :breakpoints="swiperBreakpoints"
      :space-between="30"
    >
      <swiper-slide v-for="i in [1, 2, 3, 4, 5, 6]" :key="i">
        <div
          class=" w-full flex flex-col p-4 bg-white shadow-md shadow-slate-300/30 rounded-xl"
        >
          <img
            class="bg-cover w-full rounded-lg shadow-md"
            src="https://cdn.sepehr360.ir///Content/image//Tablighat_SafheAvalWeb/12.png?ts=637846582617170000"
          />
          <div class="px-2 py-4 flex flex-col gap-3">
            <h2 class="text-sm lg:text-xl font-semibold">آژانس شماره 1</h2>
            <p class="text-xs lg:text-base">جزئیات شرکت شرکتی 1</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="100.659"
              height="27.135"
              viewBox="0 0 142.659 27.135"
            >
              <g id="rate" transform="translate(-1563.342 -895)">
                <path
                  id="Path_316"
                  data-name="Path 316"
                  d="M15,0l3.368,10.365h10.9l-8.817,6.406,3.368,10.365L15,20.729,6.183,27.135,9.551,16.771.734,10.365h10.9Z"
                  transform="translate(1676.734 895)"
                  fill="#ffcb14"
                />
                <path
                  id="Path_315"
                  data-name="Path 315"
                  d="M15,0l3.368,10.365h10.9l-8.817,6.406,3.368,10.365L15,20.729,6.183,27.135,9.551,16.771.734,10.365h10.9Z"
                  transform="translate(1648.203 895)"
                  fill="#ffcb14"
                />
                <path
                  id="Path_314"
                  data-name="Path 314"
                  d="M15,0l3.368,10.365h10.9l-8.817,6.406,3.368,10.365L15,20.729,6.183,27.135,9.551,16.771.734,10.365h10.9Z"
                  transform="translate(1619.671 895)"
                  fill="#ffcb14"
                />
                <path
                  id="Path_313"
                  data-name="Path 313"
                  d="M15,0l3.368,10.365h10.9l-8.817,6.406,3.368,10.365L15,20.729,6.183,27.135,9.551,16.771.734,10.365h10.9Z"
                  transform="translate(1591.14 895)"
                  fill="#ffcb14"
                />
                <path
                  id="Path_312"
                  data-name="Path 312"
                  d="M15,0l3.368,10.365h10.9l-8.817,6.406,3.368,10.365L15,20.729,6.183,27.135,9.551,16.771.734,10.365h10.9Z"
                  transform="translate(1562.607 895)"
                  fill="#ffcb14"
                />
              </g>
            </svg>
          </div>
        </div>
      </swiper-slide>
    </swiper>
</template>
