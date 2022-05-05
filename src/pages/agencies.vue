<script setup lang="ts">
import useAgent from "@/hooks/useAgent";
import Select from "@/components/mobile/Select.vue";
import options from "@/utils/cities.json";
import { ref } from "vue";
import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();
const device = useAgent();
const firstSelected = ref("");
// Second City Selected
const secondSelected = ref("");
// First Select Handler
const firstSelectHandler = (currentSelect: any) =>
  (firstSelected.value = currentSelect.label);
// Second Select Handler
const secondSelectHandler = (currentSelect: any) =>
  (secondSelected.value = currentSelect.label);
// Change City Direction
const changeDirection = () => {
  const firstCity = firstSelected.value;
  const secondCity = secondSelected.value;
  firstSelected.value = secondCity;
  secondSelected.value = firstCity;
};
</script>

<template>
  <div>
    <Select
      :title="t('origin')"
      :options="options"
      :change="firstSelectHandler"
      :selected="firstSelected"
    />
    <Select
      :title="t('destination')"
      :options="options"
      :change="secondSelectHandler"
      :selected="secondSelected"
    />
  </div>
</template>
