<script setup>
import jDate from "jalali-date";
import {onUpdated, ref} from "vue";
import { CalculatorIcon, XIcon } from "@heroicons/vue/solid";
import {JalaliDateTime} from "jalali-date-time";
import {useDateChanger} from "@/contexts/calender"
let compatible=(e) => (e<10) ? "0"+e : e
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
let d=new jDate()
let mc=0
let prices=defineProps({prices:Array,showM:Boolean,hide:Function,give:Function})
let jdt = JalaliDateTime()
let years=ref([])
let giveDate=(y,m)=>{
  let dd=new jDate()
  let secondtData=[]
  dd.setDate(1)
  dd.setMonth(m)
  dd.setFullYear(y)
  let mth=m
  jdt.calendar(dd.getFullYear()+"-"+compatible(dd.getMonth())).weeks.map((item)=>{
    item.map((day)=>{
      if (day.month==y+"-"+compatible(m)){
        let tt=new jDate(day.date.split("-")[0],day.date.split("-")[1],day.date.split("-")[2])
        let mony=0
        if (prices.prices){



          if (prices.prices.filter((item) =>item.date == tt._d.getDate()&&item.month == (tt._d.getMonth()+1)&&item.year==tt._d.getFullYear())[0]!=undefined) {
            mony = prices.prices.filter((item) =>item.date == tt._d.getDate()&&item.month == (tt._d.getMonth()+1)&&item.year==tt._d.getFullYear())[0].price
          }else {
            mony=""
          }
        }else {
          mony=""
        }
        let classes= 'calendar-day-item ' + ((new jDate().getFullYear()+'-'+compatible(new jDate().getMonth())+'-'+compatible(new jDate().getDate())==day.date) ? 'today-calendar-item' : '')
        let obj={
          day:new jDate(tt.getFullYear(),tt.getMonth(),tt.getDate()).getDay(),
          date:new jDate(tt.getFullYear(),tt.getMonth(),tt.getDate()).getDate(),
          month:new jDate(tt.getFullYear(),tt.getMonth(),tt.getDate()).getMonth(),
          year:new jDate(tt.getFullYear(),tt.getMonth(),tt.getDate()).getFullYear(),
          price:mony,
          class:classes,
        }
        secondtData.push(obj)
      }else {
        let obj={
          day:"",
          date:"",
          month:"",
          year:"",
          price:"",
          class:"calendar-day-item",
        }
        secondtData.push(obj)
      }

    })
  })
return secondtData
}
while (mc<12){
  years.value.push({
    name:MmonthChecker(d.getMonth()),
    values: giveDate(d.getFullYear(),d.getMonth())
  })
  d.setMonth(d.getMonth()+1)
  mc++
}
let GDT=useDateChanger()

let show=prices.showM
</script>
<template>

  <div class="mobile-calendar-container" :class="{ active: showM }">
    <div class="header">
      <div class="flex justify-between items-center">
        <button @click="hide()">
          <XIcon />
        </button>
        <button class="btn-datepicker" @click="GDT.toGAR">
          <CalculatorIcon />
          <span>میلادی</span>
        </button>
      </div>
      <ul class="weekend">
        <li>ش</li>
        <li>ی</li>
        <li>د</li>
        <li>س</li>
        <li>چ</li>
        <li>پ</li>
        <li>ج</li>
      </ul>
    </div>
        <div class="mobile-calendar" v-for="(item,i) in years" :key="i">
          <h3 class="text-lg text-center mb-3">{{item.name}}</h3>
          <ul class="days">
            <li v-for="day in item.values" @click="give('J',day)" class="flex flex-col p-2 rounded-3xl items-center align-middle" :class="day.class ,{nond:(day.date == '')}">
              <span :class="{holidays:(day.day == 5)}">{{day.date==""?"-":day.date}}</span>
              <span class="text-xs text-blue-600">{{day.price==""?"-":day.price}}</span>
            </li>
          </ul>
        </div>
  </div>
</template>
