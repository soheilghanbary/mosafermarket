<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { PhoneIcon, MailIcon } from "@heroicons/vue/solid";
const { t, locale } = useI18n();
</script>

<template>
  <footer class="footer" :class="{ ltr: locale === 'en' }">
    <div class="section">
      <h3>{{ t("footer[0]") }}</h3>
      <ul>
        <li>{{ t("navs[0].title") }}</li>
        <li>{{ t("navs[1].title") }}</li>
        <li>{{ t("navs[2].title") }}</li>
        <li>{{ t("navs[3].title") }}</li>
        <li>{{ t("navs[4].title") }}</li>
      </ul>
    </div>
    <div class="section">
      <h3>{{ t("footer[1]") }}</h3>
      <ul>
        <li>{{ t("navs[0].title") }}</li>
        <li>{{ t("navs[1].title") }}</li>
        <li>{{ t("navs[2].title") }}</li>
        <li>{{ t("navs[3].title") }}</li>
        <li>{{ t("navs[4].title") }}</li>
      </ul>
    </div>
    <div class="section">
      <h3>Chamedansafar.ir</h3>
      <ul>
        <li>
          <span>09121405424</span>
          <PhoneIcon />
        </li>
        <li>
          <span>info@chamedansafar.ir</span>
          <MailIcon />
        </li>
      </ul>
      <ul class="enamads">
        <li>
          <img src="@/assets/images/enamad.png" />
        </li>
        <li>
          <img src="@/assets/images/namad.png" />
        </li>
        <li>
          <img src="@/assets/images/havapeimaee.png" />
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss" scoped>
.footer {
  @apply flex lg:flex-row lg:pb-20 xl:pb-20 mt-auto xl:flex-row lg:items-center items-stretch gap-10 flex-col justify-evenly p-10 bg-[#63B4F5] rounded-t-3xl;

  &.ltr {
    @apply text-left;
    li {
      @apply mr-auto;
    }
  }
  .section {
    h3 {
      @apply text-2xl font-semibold text-white border-white mb-8;
    }

    ul {
      @apply flex flex-col gap-4;
      li {
        @apply text-white flex gap-3 items-center;
        svg {
          @apply w-6 h-6;
        }
      }
    }
    .enamads {
      @apply flex items-center gap-4 flex-row mt-6;
      li {
        @apply flex justify-center items-center w-20 h-20 bg-white rounded-md;
        img {
          @apply w-full bg-cover p-1;
        }
      }
    }
  }
}
</style>
