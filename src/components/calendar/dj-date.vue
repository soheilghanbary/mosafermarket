<script setup>
import jd from 'jalali-date'
import { JalaliDateTime } from 'jalali-date-time';
import {onUpdated, ref} from "vue";
import {useDateChanger} from "@/contexts/calender";
import { useI18n } from 'vue-i18n'
const { locale } = useI18n()
let GDT = useDateChanger()
let jdt = JalaliDateTime()
let jdate = new jd();
const MmonthChecker = (e) => {
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

let gmd = ref("")
let cm = new jd();
let gd = ref(cm.getDate());
let gm = ref(cm.getMonth());
let gy = ref(cm.getFullYear());
if (gm.value == 12) {
  gmd.value = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
} else {
  gmd.value = cm.getFullYear();
}
let mm = 0
if (gm.value == 12) {
  gmd.value = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
} else {
  gmd.value = cm.getFullYear();
}
let change=()=>{
  localStorage.setItem("PDT","G")
}
function nextMonthes() {

  if ((gm.value + 2) > 12) {
    cm.setMonth(gm.value - 10)
    gm.value = cm.getMonth()
    cm.setFullYear(cm.getFullYear() + 1)

  } else {
    console.log(gm.value)
    cm.setMonth(gm.value + 2)
    gm.value = cm.getMonth()
  }
  gd.value = cm.getDate();
  gy.value = cm.getFullYear();
  if (gm.value == 12) {
    gm.valued = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
  } else {
    gmd.value = cm.getFullYear();
  }
  gm.value = cm.getMonth();
doit()
}
function prevMonth() {
  if ((gm.value - 2) < 1) {
    cm.setMonth(gm.value + 10)
    gm.value = cm.getMonth()
    cm.setFullYear(cm.getFullYear() - 1)
  } else {
    cm.setMonth(gm.value - 2)
    gm.value = cm.getMonth()

  }
  gd.value = cm.getDate();
  gm.value = cm.getMonth();
  gy.value = cm.getFullYear();
  if (gm.value == 12) {
    gmd.value = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
  } else {
    gmd.value = cm.getFullYear();
  }
  doit()
}
let compatible = (e) => (e < 10) ? "0" + e : e
function getSecondMonthDays(y, m) {

  let mnm = y + '-' + compatible(m)
  let result = jdt.calendar(mnm);
  return result
}
let sendDate = (e) => {

  let m = e.date.split("-")
  let s = jdate.toGregorian(m[0], m[1], m[2])
  let dates = {
    jalali: {
      day: parseInt(m[2]),
      month: parseInt(m[1]),
      year: parseInt(m[0]),
    },
    gregorian: {
      day: s.getDate(),
      month: s.getMonth() + 1,
      year: s.getFullYear(),
    }
  }
}
let prices=defineProps({
  prices:Array,
  GDT:String,
  showM:Boolean,
  hide:Function,
  give:Function
})
let firstData=ref([])
let secondtData=ref([])
let firstDay = getSecondMonthDays(gy.value, gm.value)
let secondDay = getSecondMonthDays(((gm.value + 1) > 12 ? gy.value : gy.value+1), ((gm.value + 1) % 12))
let doit=() => {
  firstDay = getSecondMonthDays(gy.value, gm.value)
  secondDay = getSecondMonthDays(((gm.value + 1) < 12 ? gy.value : gy.value +1), ((gm.value + 1) % 12)==0?12:((gm.value + 1) % 12))
  firstData.value=[]
  secondtData.value=[]
  firstDay.weeks.map((item)=>{
    item.map((dayItem)=>{
      if(compatible(gm.value)==dayItem.month.split("-")[1]){
        let price=""
        let td=new jd(parseInt(dayItem.date.split("-")[0]),parseInt(dayItem.date.split("-")[1]),parseInt(dayItem.date.split("-")[2])).toGregorian()
        let mony= prices.prices.filter((item)=>item.day==td.getDate()&&item.month==(td.getMonth()+1)&&item.year==td.getFullYear())
        if(mony[0]!=undefined){ price = mony[0].price}else{ price = "-"}
        let classes= 'calendar-day-item ' + ((jdate.getFullYear()+'-'+compatible(jdate.getMonth())+'-'+compatible(jdate.getDate() )==dayItem.date) ? 'today-calendar-item' : '')
        let obj={
          day:new jd(td).getDay(),
          date:new jd(td).getDate(),
          month:new jd(td).getMonth(),
          year:new jd(td).getFullYear(),
          price:price,
          class:classes,
        }
        firstData.value.push(obj)
      }else {
        let obj={
          day:"",
          date:"",
          month:"",
          year:"",
          price:"",
          class:"calendar-day-item",
        }
        firstData.value.push(obj)
      }

    })
  })
  secondDay.weeks.map((item)=>{

    item.map((dayItem)=>{


      if(compatible((gm.value+1)%12!=0?(gm.value+1)%12:12)==dayItem.month.split("-")[1]){

        let price=""
        let td=new jd(parseInt(dayItem.date.split("-")[0]),parseInt(dayItem.date.split("-")[1]),parseInt(dayItem.date.split("-")[2])).toGregorian()
        let mony= prices.prices.filter((item)=>item.day==td.getDate()&&item.month==(td.getMonth()+1)&&item.year==td.getFullYear())
        if(mony[0]!=undefined){ price = mony[0].price}else{ price = "-"}
        let classes= 'calendar-day-item ' + ((jdate.getFullYear()+'-'+compatible(jdate.getMonth())+'-'+compatible(jdate.getDate() )==dayItem.date) ? 'today-calendar-item' : '')
        let obj={
          day:new jd(td).getDay(),
          date:new jd(td).getDate(),
          month:new jd(td).getMonth(),
          year:new jd(td).getFullYear(),
          price:price,
          class:classes,
        }
        secondtData.value.push(obj)
      }else {
        let obj={
          day:"",
          date:"",
          month:"",
          year:"",
          price:"",
          class:"calendar-day-item",
        }
        secondtData.value.push(obj)
      }

    })
  })

}
doit()
let todaytodo = () => {
  cm.setDate(new jd().getDate());
  cm.setMonth(new jd().getMonth());
  cm.setFullYear(new jd().getFullYear());
  gd.value = cm.getDate();
  gm.value = cm.getMonth();
  gy.value = cm.getFullYear();
  if (gm.value == 12) {
    gmd.value = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
  } else {
    gmd.value = cm.getFullYear();
  }
}

</script>
<template>
  <div class="calendar-contaienr" :class="{ active: showM , ltr: locale === 'en' }">
      <div class="calendar-header">
        <span>سال: {{gmd}}</span>
        <div class="wrapper">
          <button @click="todaytodo">
            <span>تاریخ امروز</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                  d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" />
            </svg>
          </button>
          <button @click="GDT.toGAR()">
            <span>تقویم میلادی</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round"
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </button>
        </div>
      </div>
      <div class="calendar-body">
        <div class="calendar-item">
          <div class="calendar-month">{{ MmonthChecker(gm) }}</div>
          <div class="calendar-weekend">
            <div class="calendar-weekend-item">ش</div>
            <div class="calendar-weekend-item">ی</div>
            <div class="calendar-weekend-item">د</div>
            <div class="calendar-weekend-item">س</div>
            <div class="calendar-weekend-item">چ</div>
            <div class="calendar-weekend-item">پ</div>
            <div class="calendar-weekend-item">ج</div>
          </div>
          <div class="calendar-day-m calendar-day">

            <div v-for="(dayItem,i) in firstData"  @click="give('J',dayItem)" :class="dayItem.class">
              <span :class="{'holidays' : (i%7==6)}">{{ dayItem.date }}</span>

              <span>{{ dayItem.price }}</span>
            </div>

          </div>
        </div>
        <div class="calendar-item">
          <div class="calendar-month">
            {{ MmonthChecker((gm + 1) % 12 == 0 ? 12 : (gm + 1) % 12) }}
          </div>
          <div class="calendar-weekend">
            <div class="calendar-weekend-item">ش</div>
            <div class="calendar-weekend-item">ی</div>
            <div class="calendar-weekend-item">د</div>
            <div class="calendar-weekend-item">س</div>
            <div class="calendar-weekend-item">چ</div>
            <div class="calendar-weekend-item">پ</div>
            <div class="calendar-weekend-item">ج</div>
          </div>
          <div class="calendar-day-m calendar-day">

            <div v-for="(dayItem,i) in secondtData"  @click="give('J',dayItem)" :class="dayItem.class">
              <span :class="{'holidays' : (i%7==6)}">{{ dayItem.date }}</span>

              <span>{{ dayItem.price }}</span>
            </div>

          </div>
          <div class="next-button" @click="nextMonthes">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linejoin="round" stroke-Width="2" d="M15 19l-7-7 7-7" />
            </svg>
          </div>
          <div class="prev-button" @click="prevMonth">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24"
                 stroke="currentColor">
              <path stroke-linecap="round" stroke-Linejoin="round" stroke-Width={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>
        </div>
      </div>
  </div>
</template>
<style lang="scss">
.calendar {
  @apply relative;
  .field {
    @apply flex justify-between items-center relative text-slate-500 py-3 px-6 shadow shadow-slate-300/30 rounded-lg bg-white lg:w-64 xl:w-64 w-full lg:border xl:border text-right mt-1 lg:mt-0 xl:mt-0;
    // xl
    @apply xl:text-base;
    // lg
    @apply lg:text-xs;
    // 2xl
    @apply 2xl:text-base;

    svg {
      @apply absolute left-3 w-6 h-6 duration-150;
      &.arrowActive {
        @apply transform rotate-180;
      }
    }
    svg:nth-child(2) {
      @apply absolute right-3 w-6 h-6 duration-150;
    }
  }
  .date-picker {
    @apply text-slate-400 p-2 duration-200 opacity-0 translate-y-2 rounded-md shadow-md absolute w-[800px] left-0 mt-4 border bg-white z-20;
    visibility: hidden;
    .wrapper {
      @apply grid grid-cols-2 gap-2;
    }

    &.ltr {
      @apply right-0;
    }

    &.active {
      visibility: visible;
      @apply transform-none opacity-100;
    }

    .weekend {
      @apply grid grid-cols-7 items-center bg-sky-50 my-2 rounded-md text-sky-500 shadow shadow-slate-300/30;
      span {
        @apply p-3 text-center flex justify-center items-center;
      }
    }

    .body {
      @apply grid grid-cols-7 items-center gap-1;
      span {
        @apply p-3 hover:bg-teal-100 rounded-md hover:text-teal-500 duration-100 cursor-pointer ring-emerald-50 text-center flex justify-center items-center border border-slate-100 shadow shadow-slate-300/30;
      }
    }
  }
}

.calendar-contaienr {
  @apply absolute w-[700px] top-0 left-0 z-50 max-w-screen-md mt-16 duration-200 justify-center translate-y-3 content-center opacity-0;
  visibility: hidden;
  &.active {
    @apply transform-none opacity-100;
    visibility: visible
  }
  &.ltr {
    @apply right-0;
  }
  .calendar-header {
    @apply flex justify-between items-center bg-white px-3 py-3 rounded-t-md;
    .wrapper {
      @apply flex gap-3;
      button {
        @apply transform active:scale-90 duration-100;
      }
      button:nth-child(1) {
        @apply text-yellow-600 bg-yellow-100 rounded-md shadow px-5 py-2 text-sm inline-flex justify-between items-center gap-3 text-sm text-center;
      }
      button:nth-child(2) {
        @apply bg-blue-100 rounded-md shadow px-5 py-2 text-sm inline-flex justify-between items-center text-blue-500 gap-3;
      }
    }

  }
  }
</style>