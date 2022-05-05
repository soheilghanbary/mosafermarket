import type { CityProps } from "@/interfaces";
import { defineStore } from "pinia";

export const useTravelStore = defineStore({
  id: "travel",
  state: () => ({
    origin: {
        label: '',
        value: ''
    },
    destination: {
        label: '',
        value: ''
    },
    date: {
        day: 0,
        month: 0,
        year: 0,
        price: 0
    },
  }),
  getters: {},
  actions: {
    setOrigin(city: CityProps) {
      this.origin = city;
    },
    setDestination(city: CityProps) {
      this.destination = city;
    },
    setDate(current: any) {
      this.date = current;
    },
  },
});
