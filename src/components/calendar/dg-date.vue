<script setup lang="ts">
import jd from "jalali-date";
import { onUpdated, ref } from "vue";
import { useDateChanger } from "@/contexts/calender";
import { useI18n } from 'vue-i18n'

interface PriceProps {
  day: number;
  month: number;
  year: number;
  price: number | string;
}

interface PropsTypes {
  prices: PriceProps[],
  GDT: string,
  showM: boolean,
  hide: any,
  give: any,
}

const { locale } = useI18n()
let GDT = useDateChanger();
let getDateInMonth = (y: any, m: any) => {
  var dd = new Date(y, m, 1);
  let days = [];
  let month = [];
  let day = 0;
  while (dd.getMonth() === m) {
    day = dd.getDay();
    if (dd.getDay() == 6) {
      if (day != 0 && dd.getDate() == 1) {
        for (let i = 0; i < day; i++) {
          days.push(null);
        }
      }
      days.push(new Date(dd));
      month.push(days);
      days = [];
    } else {
      if (day != 0 && dd.getDate() == 1) {
        for (let i = 0; i < day; i++) {
          days.push(null);
        }
      }
      days.push(new Date(dd));
    }
    dd.setDate(dd.getDate() + 1);
  }
  month.push(days);
  return month;
};
const MmonthChecker = (e: any) => {
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
let gmd = ref("");
let count = 0;
let cm = new Date();
let gd = ref(cm.getDate());
let gm = ref(cm.getMonth());
let gy = ref(cm.getFullYear());
if (gm.value == 12) {
  gmd.value = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
} else {
  gmd.value = "" + cm.getFullYear();
}
function nextMonth() {
  if (count < 12) {
    count = gm.value + 2;
    cm.setMonth(count);
    gd.value = cm.getDate();
    gm.value = cm.getMonth();
    gy.value = cm.getFullYear();
    if (gm.value == 12) {
      gmd.value = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
    } else {
      gmd.value = "" + cm.getFullYear();
    }
  } else {
    count = 0;
  }
  doit();
}
function prevMonth() {
  if (count > 0) {
    count = gm.value - 2;
    cm.setMonth(count);
    gd.value = cm.getDate();
    gm.value = cm.getMonth();
    gy.value = cm.getFullYear();
    if (gm.value == 12) {
      gmd.value = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
    } else {
      gmd.value = "" + cm.getFullYear();
    }
  } else {
    count = 12;
  }
  doit();
}
let todaytodo = () => {
  cm.setDate(new Date().getDate());
  cm.setMonth(new Date().getMonth());
  cm.setFullYear(new Date().getFullYear());
  gd.value = cm.getDate();
  gm.value = cm.getMonth();
  gy.value = cm.getFullYear();
  if (gm.value == 12) {
    gmd.value = cm.getFullYear() + " - " + (cm.getFullYear() + 1);
  } else {
    gmd.value = "" + cm.getFullYear();
  }
};
let props = defineProps<PropsTypes>();
let firstData = ref<any>([]);
let secondtData = ref<any>([]);
let firstDay = getDateInMonth(gy.value, gm.value);
let secondDay = getDateInMonth(gy.value, (gm.value + 1) % 12);
let change = () => {
  props.GDT;
};
firstDay.map((item) => {
  item.map((dayItem) => {
    if (dayItem != null) {
      let getPrice: string | number = "";
      let mony: any[] = []
      mony = props.prices.filter(
        (item: any) =>
          item.date == new Date(dayItem).getDate() &&
          item.month == new Date(dayItem).getMonth() + 1 &&
          item.year == new Date(dayItem).getFullYear()
      );
      if (mony[0] != undefined) {
        getPrice = mony[0].price;
      } else {
        getPrice = "-";
      }
      let classes =
        "calendar-day-item " +
        (new Date(dayItem).getDate() == new Date().getDate() &&
        new Date(dayItem).getMonth() == new Date().getMonth() &&
        new Date(dayItem).getFullYear() == new Date().getFullYear()
          ? "today-calendar-item"
          : "");
      let obj: any = {
        day: new Date(dayItem).getDay(),
        date: new Date(dayItem).getDate(),
        month: new Date(dayItem).getMonth(),
        year: new Date(dayItem).getFullYear(),
        price: getPrice,
        class: classes,
      };
      firstData.value.push(obj);
    } else {
      let obj = {
        day: "",
        date: "",
        month: "",
        year: "",
        price: "",
        class: "calendar-day-item",
      };
      firstData.value.push(obj);
    }
  });
});
secondDay.map((item) => {
  item.map((dayItem) => {
    if (dayItem != null) {
      let getPrice: string | number = "";
      let mony: any[] = []
      mony = props.prices.filter(
        (item:any) =>
          item.day == new Date(dayItem).getDate() &&
          item.month == new Date(dayItem).getMonth() + 1 &&
          item.year == new Date(dayItem).getFullYear()
      );
      if (mony[0] !== undefined) {
        getPrice = mony[0].price;
      } else {
        getPrice = "-";
      }
      
      let classes =
        "calendar-day-item " +
        (new Date(dayItem).getDate() == new Date().getDate() &&
        new Date(dayItem).getMonth() == new Date().getMonth() &&
        new Date(dayItem).getFullYear() == new Date().getFullYear()
          ? "today-calendar-item"
          : "");
      let obj = {
        day: new Date(dayItem).getDay(),
        date: new Date(dayItem).getDate(),
        month: new Date(dayItem).getMonth(),
        year: new Date(dayItem).getFullYear(),
        price: getPrice,
        class: classes,
      };
      secondtData.value.push(obj);
    } else {
      let obj = {
        day: "",
        date: "",
        month: "",
        year: "",
        price: "",
        class: "calendar-day-item",
      };
      secondtData.value.push(obj);
    }
  });
});
let doit = () => {
  firstDay = getDateInMonth(gy.value, gm.value);
  secondDay = getDateInMonth(gy.value, (gm.value + 1) % 12);
  firstData.value = [];
  secondtData.value = [];
  firstDay.map((item) => {
    item.map((dayItem) => {
      if (dayItem != null) {
        let getPrice: string | number = "";
        let mony: any[] = []
        mony = props.prices.filter(
          (item: any) =>
            item.date == new Date(dayItem).getDate() &&
            item.month == new Date(dayItem).getMonth() + 1 &&
            item.year == new Date(dayItem).getFullYear()
        );
        if (mony[0] != undefined) {
          getPrice = mony[0].price;
        } else {
          getPrice = "-";
        }

        let classes =
          "calendar-day-item " +
          (new Date(dayItem).getDate() == new Date().getDate() &&
          new Date(dayItem).getMonth() == new Date().getMonth() &&
          new Date(dayItem).getFullYear() == new Date().getFullYear()
            ? "today-calendar-item"
            : "");
        let obj = {
          day: new Date(dayItem).getDay(),
          date: new Date(dayItem).getDate(),
          month: new Date(dayItem).getMonth(),
          year: new Date(dayItem).getFullYear(),
          price: getPrice,
          class: classes,
        };
        firstData.value.push(obj);
      } else {
        let obj = {
          day: "",
          date: "",
          month: "",
          year: "",
          price: "",
          class: "calendar-day-item",
        };
        firstData.value.push(obj);
      }
    });
  });
  secondDay.map((item) => {
    item.map((dayItem) => {
      if (dayItem != null) {
        let getPrice: string | number = "";
        let mony: any[] = []
        mony = props.prices.filter(
          (item: any) =>
            item.date == new Date(dayItem).getDate() &&
            item.month == new Date(dayItem).getMonth() + 1 &&
            item.year == new Date(dayItem).getFullYear()
        );
        if (mony[0] != undefined) {
          getPrice = mony[0].price;
        } else {
          getPrice = "-";
        }
        let classes =
          "calendar-day-item " +
          (new Date(dayItem).getDate() == new Date().getDate() &&
          new Date(dayItem).getMonth() == new Date().getMonth() &&
          new Date(dayItem).getFullYear() == new Date().getFullYear()
            ? "today-calendar-item"
            : "");
        let obj = {
          day: new Date(dayItem).getDay(),
          date: new Date(dayItem).getDate(),
          month: new Date(dayItem).getMonth(),
          year: new Date(dayItem).getFullYear(),
          price: getPrice,
          class: classes,
        };
        secondtData.value.push(obj);
      } else {
        let obj = {
          day: "",
          date: "",
          month: "",
          year: "",
          price: "",
          class: "calendar-day-item",
        };
        secondtData.value.push(obj);
      }
    });
  });
};
</script>
<template>
  <div class="calendar-contaienr" :class="{ active: showM , ltr: locale === 'en' }">
    <div class="calendar-header">
      <span>سال: {{ gmd }}</span>
      <div class="wrapper">
        <button @click="todaytodo">
          <span>تاریخ امروز</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <button @click="GDT.toJAL()">
          <span>تقویم شمسی</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="{2}"
              d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
            />
          </svg>
        </button>
      </div>
    </div>
    <div class="calendar-body">
      <div class="calendar-item">
        <div class="calendar-month">
          {{ MmonthChecker((gm + 1 + 1) % 12 == 0 ? 12 : (gm + 1 + 1) % 12) }}
        </div>
        <div class="calendar-weekend">
          <div class="calendar-weekend-item">Sat</div>
          <div class="calendar-weekend-item">Fri</div>
          <div class="calendar-weekend-item">Thur</div>
          <div class="calendar-weekend-item">Wed</div>
          <div class="calendar-weekend-item">Tue</div>
          <div class="calendar-weekend-item">Mon</div>
          <div class="calendar-weekend-item">Sun</div>
        </div>
        <div class="calendar-day">
          <div
            v-for="(dayItem, i) in secondtData"
            @click="props.give('G', dayItem)"
            :class="dayItem.class"
            :key="i"
          >
            <span :class="{ holidays: dayItem.day == 0 }">{{
              dayItem.day
            }}</span>
            <span>{{ dayItem.price }}</span>
          </div>
        </div>
      </div>
      <div class="calendar-item">
        <div class="calendar-month">{{ MmonthChecker(gm + 1) }}</div>
        <div class="calendar-weekend">
          <div class="calendar-weekend-item">Sat</div>
          <div class="calendar-weekend-item">Fri</div>
          <div class="calendar-weekend-item">Thur</div>
          <div class="calendar-weekend-item">Wed</div>
          <div class="calendar-weekend-item">Tue</div>
          <div class="calendar-weekend-item">Mon</div>
          <div class="calendar-weekend-item">Sun</div>
        </div>
        <div class="calendar-day">
          <div
            v-for="(dayItem, i) in firstData"
            @click="props.give('G', dayItem)"
            :class="dayItem.class"
            :key="i"
          >
            <span :class="{ holidays: dayItem.day == 0 }">{{
              dayItem.date
            }}</span>
            <span>{{ dayItem.price }}</span>
          </div>
        </div>
      </div>
      <div class="next-button" @click="prevMonth">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </div>
      <div class="prev-button" @click="nextMonth">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="{2}"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.calendar-contaienr {
  @apply absolute w-[700px] top-0 left-0 z-50 max-w-screen-md mt-16 duration-200 justify-center translate-y-3 content-center opacity-0;
  visibility: hidden;
  &.active {
    @apply transform-none opacity-100;
    visibility: visible;
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
        @apply text-yellow-600 bg-yellow-100 rounded-md shadow px-5 py-2 text-sm inline-flex justify-between items-center gap-3 text-center;
      }
      button:nth-child(2) {
        @apply bg-blue-100 rounded-md shadow px-5 py-2 text-sm inline-flex justify-between items-center text-blue-500 gap-3;
      }
    }
  }

  .calendar-body {
    @apply grid grid-cols-2 gap-5 bg-white shadow-xl rounded-b-md p-3;
    @apply relative;
    .calendar-month {
      @apply flex rounded-t-md justify-center items-center border-b border-indigo-100 bg-[#23a7ff] text-blue-50 py-3;
    }
    .calendar-weekend {
      @apply grid grid-cols-7 bg-[#2387ff] text-amber-50 rounded-b-md;
      .calendar-weekend-item {
        user-select: none;
        @apply p-3 justify-center items-center text-center hover:bg-[#2387ff] hover:text-white duration-150 rounded-2xl active:scale-90 transform cursor-pointer;
      }
    }
    .calendar-day {
      direction: ltr;
    }
    .calendar-day-m {
      direction: rtl;
    }
    .calendar-day{
      @apply grid grid-cols-7;
      .calendar-day-item {
        user-select: none;
        @apply p-3 justify-center text-slate-400 items-center text-center duration-150 rounded-b-md active:scale-90 transform cursor-pointer;
        @apply flex flex-col p-2  rounded-3xl w-14;
        span:nth-child(2) {
          @apply text-xs text-blue-600;
        }
        .holidays {
          color: #ff253a;
        }
        &:hover{
          @apply bg-[#2387ff] text-white;
          span:nth-child(2) {
            @apply text-xs text-blue-50;
          }
          .holidays {
            color: #ffa21a;
            text-shadow:0 0 12px  #eeeeee;
          }
        }
        &.today-calendar-item {
          @apply rounded-2xl;
          background: #23a7ff;
          color: #eeeeee !important;
          &:hover{
            @apply bg-[#2387ff] text-white;
            span:nth-child(2) {
              @apply text-xs text-blue-50;
            }
            .holidays {
              color: #ffa21a;
              text-shadow:0 0 12px  #eeeeee;
            }
          }
          .holidays {
            color: #ffa21a;
            text-shadow:0 0 12px  #eeeeee;
          }
        }
      }
    }
    .next-button {
      @apply hover:bg-gray-50 duration-150 active:scale-90 absolute cursor-pointer bg-white -left-10 top-48 transform -translate-y-1/2 p-3 rounded-full shadow-md flex justify-center items-center text-slate-400;
    }
    .prev-button {
      @apply hover:bg-gray-50 duration-150 active:scale-90 absolute cursor-pointer bg-white -right-10 top-48 transform -translate-y-1/2 p-3 rounded-full shadow-md flex justify-center items-center text-slate-400;
    }
  }
}
</style>
