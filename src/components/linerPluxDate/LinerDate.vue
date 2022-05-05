<script setup lang="ts">
import DG from "@/components/linerPluxDate/dg-date.vue"
import DJ from "@/components/linerPluxDate/dj-date.vue"
import { onUpdated, ref, resolveComponent } from "vue";
import { useDateChanger } from '@/contexts/calender'
import { CalculatorIcon, XIcon } from "@heroicons/vue/solid";
import jDate from "jalali-date"
const GDT = useDateChanger() 

interface PropsTypes {
  data: any[]
}

let price = defineProps<PropsTypes>()
const date=ref({})
const giveDate = (t:any,e:any) => {
  if (e.year!=""&&e.month!=""&&e.date!=""){
    if (t=="J"){
      let tt=new jDate(e.year,e.month,e.date)._d
      let dates={jalali:{
          day:e.date,
          month:e.month,
          year:e.year,
        },
        gregorian:{
          day:tt.getDate(),
          month:tt.getMonth()+1,
          year:tt.getFullYear(),
        }
      }
      date.value=dates
    }else {
      let tt=new jDate(new Date(e.year,e.month,e.date))
      let dates={jalali:{
          day:tt.getDate(),
          month:tt.getMonth(),
          year:tt.getFullYear(),
        },
        gregorian:{
          day:e.date,
          month:e.month,
          year:e.year,
        }
      }
      date.value=dates
    }
  }
}
let cal=new Date(2022,3,28)
</script>
<template>
  <!-- <DG :prices="price.data" :date="cal" /> -->
  <DJ :prices="price.data" :date="cal" />
</template>
