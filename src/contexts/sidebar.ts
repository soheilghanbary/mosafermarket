import { defineStore } from 'pinia'

export const useSidebar = defineStore({
  id: 'sidebar',
  state: () => ({
    show: false
  }),
  actions: {
    toggleSidebar() {
      this.show = !this.show
    }
  }
})
