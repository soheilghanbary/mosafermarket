<script lang="ts" setup>
  import useAgent from '@/hooks/useAgent';
  import FlightSearch from '@/views/desktop/FlightSearch.vue';
  import MobileFlightSearch from '@/views/mobile/FlightSearch.vue';
import AgencySlider from '../components/AgencySlider.vue';
  const device = useAgent()
</script>

<template>
  <div>
    <FlightSearch v-if="device.desktop" />
    <MobileFlightSearch v-else />
    <AgencySlider />
    <AgencySlider />
  </div>
</template>