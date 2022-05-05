<script setup>
import {useDateChanger} from "@/contexts/calender"
import {onUpdated, ref} from "vue";
import { CalculatorIcon, XIcon } from "@heroicons/vue/solid";
import {checkMonth} from "jalali-date-time/dist/script/date";
let GDT = useDateChanger()
const MmonthChecker = (e) => {
  switch (e) {
    case 1:
      return "January";
    case 2:
      return "February";

    case 3:
      return "March";

    case 4:
      return "April";

    case 5:
      return "May";

    case 6:
      return "June";

    case 7:
      return "July";

    case 8:
      return "August";

    case 9:
      return "September";

    case 10:
      return "October";

    case 11:
      return "November";

    case 12:
      return "December";
  }
};
let prices=defineProps({prices:Array,showM:Boolean,hide:Function,give:Function})
let ym=0
let cm = new Date();
let years = ref([]);

while (ym<12){
  let gd = ref(cm.getDate());
  let gm = ref(cm.getMonth());
  let gy = ref(cm.getFullYear());
  let getSecondMonthDays = (y, m) => {
    var dd = new Date(y, m, 1)
    let days = []
    let month = []
    let day = 0
    while (dd.getMonth() === m) {
      day = dd.getDay()
      if (dd.getDay() == 6) {
        if (day != 0 && dd.getDate() == 1) {

          for (let i = 0; i < day; i++) {
            days.push(null)
          }
        }
        days.push(new Date(dd))
        month.push(days)
        days = []
      } else {
        if (day != 0 && dd.getDate() == 1) {

          for (let i = 0; i < day; i++) {
            days.push(null)
          }
        }
        days.push(new Date(dd))

      }
      dd.setDate(dd.getDate() + 1)
    }
    month.push(days)


    return month

  }
  let compatible = (e) => (e < 10) ? "0" + e : e
  let firstData = ref([])
  let year = ref([])
  let firstDay = getSecondMonthDays(gy.value, gm.value)
  firstDay.map((item) => {
    item.map((dayItem) => {
      if (dayItem != null) {

        let mony = ""


        if (prices.prices){

          if (prices.prices.filter((item)=>item.date==dayItem.getDate()&&item.month==(dayItem.getMonth()+1)&&item.year==dayItem.getFullYear())[0]!=undefined){
            mony = prices.prices.filter((item)=>item.date==dayItem.getDate()&&item.month==(dayItem.getMonth()+1)&&item.year==dayItem.getFullYear())[0]
            mony=mony.price
          }else {
            mony=""
          }
        }else {
          mony=""
        }
        let classes= 'calendar-day-item ' + ((new Date(dayItem).getDate() == new Date().getDate() && new Date(dayItem).getMonth() == new Date().getMonth() && new Date(dayItem).getFullYear() == new Date().getFullYear()) ? ' today-calendar-item' : '')
        let obj = {
          day: new Date(dayItem).getDay(),
          date: new Date(dayItem).getDate(),
          month: new Date(dayItem).getMonth(),
          year: new Date(dayItem).getFullYear(),
          price: mony,
          class: classes,
        }
        firstData.value.push(obj)
      } else {
        let obj = {
          day: "",
          date: "",
          month: "",
          year: "",
          price: "",
          class: "calendar-day-item",
        }
        firstData.value.push(obj)
      }

    })
  })
  ym++
  let mtit=MmonthChecker(cm.getMonth()+1)
  cm.setMonth(cm.getMonth()+1)
  years.value.push({name:mtit,values:firstData.value})
}

let show=prices.showM
</script>
<template>
  <div class="mobile-calendar-container" :class="{ active: showM }">
    <div class="header">
      <div class="flex justify-between items-center">
        <button @click="show = false">
          <XIcon />
        </button>
        <button class="btn-datepicker" @click="GDT.toJAL">
          <CalculatorIcon />
          <span>شمسی</span>
        </button>
      </div>
      <ul class="weekend">
        <li >Sat</li>
        <li >Fri</li>
        <li >Thur</li>
        <li >Wed</li>
        <li >Tue</li>
        <li >Mon</li>
        <li >Sun</li>
      </ul>
    </div>
    <div class="mobile-calendar" v-for="(item,i) in years" :key="i">

      <h3 class="text-lg text-center mb-3">{{item.name}}</h3>
      <ul class="days gar">
        <li v-for="day in item.values"  @click="give('G',day)" class="flex flex-col p-2 rounded-3xl items-center align-middle" :class="{nond:(day.date == '')}+day.class">
        <span :class="{holidays:(day.day == 0)}">{{day.date==""?"-":day.date}}</span>
        <span class="text-xs text-blue-600">{{day.price==""?"-":day.price}}</span>
        </li>
      </ul>

    </div>
  </div>
</template>

<style lang="scss">
  .mobile-calendar-container {
  @apply bg-white top-0 px-4 pb-4 left-0 fixed z-50 w-full h-full flex flex-col gap-4 duration-300 translate-x-full opacity-0;
  overflow: auto scroll;

  &.active {
    @apply transform-none opacity-100;
  }

  .header {
    @apply flex flex-col gap-4 py-3 border-b sticky top-0 bg-white;
    svg {
      @apply w-6 h-6;
    }

    .btn-datepicker {
      @apply flex items-center gap-3 text-sm bg-amber-100 text-amber-600 px-6 py-2 rounded-md shadow-md;
      svg {
        @apply w-5 h-5;
      }
    }
  }

  .weekend {
    @apply grid grid-cols-7 rounded-md bg-primary text-white items-center;
    li {
      @apply px-4 py-4 flex justify-center items-start text-center text-sm;
    }
  }

  .days {
    @apply grid grid-cols-7 rounded-md text-slate-600 items-center gap-1 mt-2;
    li {
      @apply px-4 py-4 flex justify-center items-start text-center border rounded-md text-sm items-center;
    }
  }

  .today-calendar-item {
    @apply bg-primary; 
    span {
      @apply text-white;
    }
  }
}
</style>