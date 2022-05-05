import { defineStore } from 'pinia'
export const useDateChanger = defineStore('datepicker', {
    state: () => ({
        GDT: "J",
        date: {
            jalali: {
                day:0,
                month:0,
                year:0
            },
            gregorian: {
                day:0,
                month:0,
                year:0
            }
        }
    }),
    // could also be defined as
    // state: () => ({ count: 0 })
    actions: {
        toGAR() {
            this.GDT="G"
        },
        toJAL() {
            this.GDT="J"
        },
        setDate(e:any) {
            this.GDT=e
        },
    },
})