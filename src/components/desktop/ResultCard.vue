<script setup lang="ts">
interface data {
  title: string;
  desc: string;
  pic: string;
  score: number;
  price: { man: number; child: number; kind: number };
  link: string;
}
const props = defineProps<data>();
console.log(props);
</script>
<template>
  <div class="result-card">
    <div class="col-1">
      <img :src="pic" />
      <div class="info">
        <h2>{{ title }}</h2>
        <h3>... {{ desc.slice(0, 18) }}</h3>
        <div class="stars">
          <svg
            v-for="s in score"
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"
            />
          </svg>
        </div>
      </div>
    </div>
    <div class="col-2">
      <span class="price">{{ price?.man }} <br />تومان</span>
      <span>نمایش در جریمه <br />استرداد</span>
    </div>
    <div class="col-3">
      <button @click="$router.push(link)">خرید</button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.result-card {
  @apply grid grid-cols-5 justify-center gap-6 items-center my-4 bg-white shadow-lg shadow-slate-300/30 rounded-lg p-4;

  .col-1 {
    @apply col-span-2 flex items-center gap-4;

    img {
      @apply w-16 h-16 object-cover rounded-lg;
    }

    .info {
      @apply flex flex-col gap-2;

      h2 {
        @apply text-sm font-semibold;
      }

      h3 {
        @apply text-xs;
      }

      .stars {
        @apply flex items-center text-amber-400;
      }
    }
  }

  .col-2 {
    @apply col-span-2 flex gap-5 items-center;

    .price {
      @apply text-base text-pink-400;

      span:nth-child(1) {
        @apply text-sm text-primary;
      }
    }
  }

  .col-3 {
    @apply col-span-1 flex justify-center items-center;

    button {
      @apply py-3 px-6 rounded-lg bg-primary text-white font-semibold;
    }
  }
}
</style>
