<script lang="ts" setup>
import Advertising from "@/components/Advertising.vue";
import LinerDate from "@/components/linerPluxDate/LinerDate.vue";
import "swiper/css";
import AirLinesCard from "../components/desktop/AirLinesCard.vue";
import ResultCard from "../components/desktop/ResultCard.vue";

let data = [
  {
    date: 7,
    month: 5,
    year: 2022,
    price: 500,
  },
  {
    date: 8,
    month: 5,
    year: 2022,
    price: 500,
  },
  {
    date: 9,
    month: 5,
    year: 2022,
    price: 500,
  },
  {
    date: 10,
    month: 5,
    year: 2022,
    price: 500,
  },
];
let res = [
  {
    title: "text 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi",
    pic: "/images/pic-1.jpg",
    score: 5,
    price: {
      man: 5000,
      child: 2000,
      kind: 1000,
    },
    link: "/",
  },
  {
    title: "text 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi",
    pic: "/images/pic-2.jpg",
    score: 4,
    price: {
      man: 5000,
      child: 2000,
      kind: 1000,
    },
    link: "/",
  },
  {
    title: "text 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi",
    pic: "/images/pic-3.jpg",
    score: 2,
    price: {
      man: 5000,
      child: 2000,
      kind: 1000,
    },
    link: "/",
  },
];
let air = [
  {
    title: "text 1",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi",
    pic: "/images/pic-1.jpg",
    city: {
      from: "tehran",
      to: "mashad",
    },
    time: {
      from: "12:20",
      to: "01:35",
    },
    score: 5,
    free: 3,
    price: 50000,
    link: "/",
  },
  {
    title: "text 2",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi",
    pic: "/images/pic-2.jpg",
    city: {
      from: "tehran",
      to: "mashad",
    },
    time: {
      from: "12:20",
      to: "01:35",
    },
    score: 4,
    free: 14,
    price: 50000,
    link: "/",
  },
  {
    title: "text 3",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam eaque eligendi",
    pic: "/images/pic-3.jpg",
    city: {
      from: "tehran",
      to: "mashad",
    },
    time: {
      from: "12:20",
      to: "01:35",
    },
    score: 2,
    price: 60000,
    link: "/",
  },
];
let airdata=JSON.parse('{"tickets":[{"proposalId":"ALBBDOMFL0DE6C1D7ACAFEAEB845155C60F200EE9CAD3597FBAFADB5AC1A53F07ABE9B45FE5806F0B5544FA7982196A6FAA26A2BECD975EB46A59BC2FDAB5DEDE99AB916E4986BEEBB0825B22BB01CDD9F8E6AF87B0BC1FA3761757F2101A130F355B11AFEE6EE587936B2FC93F1637D9FC35D54EFECA8D7BCDEA6E7DFDD4F2F99EC0EC7FE2A04ECA67C28E8853CEC7F498D2F082DFC7F3BD187B0D70A9EF4CF44074DCBC7F80DDF28D29DC1D097A3B70E793E494ADD8B639D7DD887CCD3200B21C5BBF61269AAF215FF991D1063E722605D72743B5A157AFCFF85750358DDA3AFD2FAE3FD68E4333A2C2728A4C6973B81CB7E1820808AE14D97B4EC4FC8EE66275FFE66E5E349BEEB904C15461CEC50F488113FF5DAA426BE3FC8DCB0E3BDF7F0A4A9A4E2B75176117B305E22DDDA6164F250B3C106E71A12FA6481D47FA37C0626EDEEEA82552D7F875A442DC036CA1B7F5941542517E9DC0BACC46C3A982EB11442D8FC111FECB5938886B21F1E1023A1E87FA5C2D82E003F75513A79AF5F7E70C4D62F188C43D7ACE4183F0E1329E7F0163B7537FB5A6516220658B3B94806995866C2047850CBE419CD82D3FCD69CCA6654A113E41728CC2E412F36F305B21F2AB78D41C3282FD8DE16C652008E298956783ADE1DB15AA6549060752EA008B03D030DDE73231FBB67B67D40B9D8D6D38D4355C3561DDC372810A7DE5135B1F0EC3EF7F5A4543B21EE3AC855C8FFEF990B46045E8E30595CB3C85893BA9877568F5889EED5AFC5A23F211D6590D6FF910E0E061042D3A01CD73DC71791AE086DA29514406D9DC4903B2E8444EE2EC62EFD9F5ED2C5DEB910731683EC3FBCB57259AF0A864869FC8D5F401095E1D85E317BFE2D1E90108B72C8E930C8888DC0DFC8071E0CF0AFAE561327B3AB16965635A90C6AE9FB1657341499F1980098F4197747028CBA7D03A40B1248729FEEEB78E11406B80A92D4FE063D87F7DFC16628AA42C","origin":"KSH","originName":"کرمانشاه","destination":"THR","destinationName":"تهران","airlineCode":"EP","airlineName":"آسمان","flightNumber":"625","leaveDateTime":"2022-05-15T23:50:00","aircraft":"Fokker 100","priceChild":3532000,"priceAdult":6963000,"priceInfant":758000,"description":"","flightId":"FD:KSH:THR:220515:A:625EY","class":"Y","classType":"E","classTypeName":"اکونومی","status":"10","statusName":"موجود","displayIndex":0,"isCharter":false,"ticketType":"Systemic","isSelectableInRoundtrip":true,"messageForSelectableInRoundTrip":"","arrivalDateTime":"2022-05-16T00:50:00","seat":10,"stars":3,"isRefundable":true,"hasConnection":false,"uniqueKey":"KSHTHR20220515AEP625YE5","rawCrcn":[{"fromTime":"00:00:00","fromMinutes":0,"toTime":"12:00:00","toMinutes":4320,"value":40,"type":"Percent"},{"fromTime":"12:00:00","fromMinutes":4320,"toTime":"12:00:00","toMinutes":1440,"value":40,"type":"Percent"},{"fromTime":"12:00:00","fromMinutes":1440,"toTime":"00:00:00","toMinutes":180,"value":60,"type":"Percent"},{"fromTime":"00:00:00","fromMinutes":180,"toTime":"00:00:00","toMinutes":30,"value":60,"type":"Percent"},{"fromTime":"00:00:00","fromMinutes":30,"toTime":"00:00:00","toMinutes":0,"value":60,"type":"Percent"}],"maxAllowedBaggage":20,"terminal":"--","promoted":0,"discount":0,"originalPrice":"","originalChildPrice":"","originalInfandPrice":"","commission":0,"removedByRuleEngine":false,"childDiscount":0,"infantDiscount":0,"airlineLogo":"https://cdn.alibaba.ir/static/img/airlines/Domestic/EP.png","attributes":[{"key":"Domestic_TicketTypeLabel","value":"Systemic","translation":"سیستمی","locale":"fa_IR","channel":"Unknown"},{"key":"Domestic_IsSelectableInRoundtripLabel","value":"True","translation":"قابل استفاده در مسیر برگشت","locale":"fa_IR","channel":"Unknown"},{"key":"Domestic_PromotedType","value":"None","translation":"","locale":"fa_IR","channel":"Unknown"}]},{"proposalId":"ALBBDOMFL0CFFF0A694F162D3A520EC1FCE6CC9BE9856EA5C0B34B789494CA8189E96FA10AC1A4195179A9540772C7B796E08A2781144C8D3B5B751D7CA7A8136E3C56AB1658AB33F3C4D2CDD69D1078973D61233F55BBCCEB5C5CFA7DFB00D1BB93C78ECC0F0939282A561F9232D1AED75316497836938A984D82CBF5231FDE6528FA2D31B0693350A537C76187177898E314B1C4B3AA5216E34FFFB778FB6B5936D8DED372E7B1CF6DB59BBAD4901F577A662AAC935482B2F83B571FF9D63563A2BB98243BD54BC362456857188EE51A5133E2E7EE241AD9AF410827C0FEE425EFC05BAC25731B88B3C624652934A17F05DB437B747E2FCF807DC82B2A913DB6FF57DABCBF71C4E5F6DAEC41D70B7B6C1C9E567FCE25448B989C9E148CED6B23DDB49B4C146DA05D06DCB9CB14219BD6EB0073B3DA21A569847902AAAD561A035533A6E039B667BBB6B60B7EDE14DD7CCF4564E6A9DE431351D9350EE0097CA30E9E48884FBCFF533D37F6DF62959F4779F7F3821E41D584786B9FCAF355E1DC278F2EF","origin":"KSH","originName":"کرمانشاه","destination":"THR","destinationName":"تهران","airlineCode":"IR","airlineName":"ایران ایر","flightNumber":"3410","leaveDateTime":"2022-05-15T16:20:00","aircraft":"ATR 72","priceChild":3520000,"priceAdult":6940000,"priceInfant":750000,"description":"","flightId":"FD:KSH:THR:220515:I:3410EY","class":"Y","classType":"E","classTypeName":"اکونومی","status":"9","statusName":"موجود","displayIndex":1,"isCharter":false,"ticketType":"Systemic","isSelectableInRoundtrip":true,"messageForSelectableInRoundTrip":"","arrivalDateTime":"2022-05-15T17:45:00","seat":9,"stars":3,"isRefundable":true,"hasConnection":false,"uniqueKey":"KSHTHR20220515IIR3410YE5","rawCrcn":[{"fromTime":"00:00:00","fromMinutes":0,"toTime":"00:00:00","toMinutes":1440,"value":30,"type":"Percent"},{"fromTime":"00:00:00","fromMinutes":1440,"toTime":"00:00:00","toMinutes":0,"value":60,"type":"Percent"}],"maxAllowedBaggage":20,"terminal":"--","promoted":0,"discount":0,"originalPrice":"","originalChildPrice":"","originalInfandPrice":"","commission":0,"removedByRuleEngine":false,"childDiscount":0,"infantDiscount":0,"airlineLogo":"https://cdn.alibaba.ir/static/img/airlines/Domestic/IR.png","attributes":[{"key":"Domestic_TicketTypeLabel","value":"Systemic","translation":"سیستمی","locale":"fa_IR","channel":"Unknown"},{"key":"Domestic_IsSelectableInRoundtripLabel","value":"True","translation":"قابل استفاده در مسیر برگشت","locale":"fa_IR","channel":"Unknown"},{"key":"Domestic_PromotedType","value":"None","translation":"","locale":"fa_IR","channel":"Unknown"}]},{"proposalId":"ALBBDOMFL545E26706D1217D530010B4EEABE6CA84DCEC10E91F406DD5E4A7546BFD817DED4673B2BF4DB0D85AE2A266C306D69A5BB2AA45838A3B748069C3108A920B09F17601F28F82E76050C6A7F5968F27067903C1FB3CC757E967224496242E455C36DD50AF53BBA471388987FB533638BC9061B6E714B469451ACC9E8267D4F323477F970C46BB6CACE01B1F2BB2E0D121F47DF88E224831E7A2EAA12376F333936326139E75534AF16BD4C847F51FC164C90E36E4AA133ABE253647623960770AFF00AAE7914ADF580B62AC62977182C85546B7ECA50A0C8395247C218B3035227412090D504B19B3BEE011B4C35CAEFFF0942608320F79D74011A5D92E9872B981FC9EF54DB2C4A23E1E8DF6DD6EC6CEEA71FDCCD9B7EF4713D7B0366F9FC279C8A092E9086C98EB8C0404095CE9F843BEA84110BB0DA1567553F7EFE51544E0E1104D0C106C6ADC294F644AA2EB508DE11913E83C0EC773FFAAB3A9E1DB649F05545AB48AFD6389F0F610B35CEC83A0A1521B05CBD4A105A3DB6AAA3E5097858DBD5C70A11DC5394A75F11C0076944851FEDDF02F193A80C0CA078348910668A","origin":"KSH","originName":"کرمانشاه","destination":"THR","destinationName":"تهران","airlineCode":"SA","airlineName":"ساها","flightNumber":"181","leaveDateTime":"2022-05-15T17:05:00","aircraft":"Boeing 737","priceChild":5890500,"priceAdult":6930000,"priceInfant":1500000,"description":"","flightId":"FD:KSH:THR:220515:B:181ES","class":"S","classType":"E","classTypeName":"اکونومی","status":"9","statusName":"موجود","displayIndex":2,"isCharter":false,"ticketType":"Systemic","isSelectableInRoundtrip":true,"messageForSelectableInRoundTrip":"","arrivalDateTime":"2022-05-15T18:05:00","seat":9,"stars":3,"isRefundable":true,"hasConnection":false,"uniqueKey":"KSHTHR20220515BSA181SE5","rawCrcn":[{"fromTime":"00:00:00","fromMinutes":0,"toTime":"12:00:00","toMinutes":1440,"value":70,"type":"Percent"},{"fromTime":"12:00:00","fromMinutes":1440,"toTime":"00:00:00","toMinutes":240,"value":80,"type":"Percent"},{"fromTime":"00:00:00","fromMinutes":240,"toTime":"00:00:00","toMinutes":0,"value":90,"type":"Percent"}],"maxAllowedBaggage":20,"terminal":"--","promoted":0,"discount":0,"originalPrice":"","originalChildPrice":"","originalInfandPrice":"","commission":0,"removedByRuleEngine":false,"childDiscount":0,"infantDiscount":0,"airlineLogo":"https://cdn.alibaba.ir/static/img/airlines/Domestic/SA.png","attributes":[{"key":"Domestic_TicketTypeLabel","value":"Systemic","translation":"سیستمی","locale":"fa_IR","channel":"Unknown"},{"key":"Domestic_IsSelectableInRoundtripLabel","value":"True","translation":"قابل استفاده در مسیر برگشت","locale":"fa_IR","channel":"Unknown"},{"key":"Domestic_PromotedType","value":"None","translation":"","locale":"fa_IR","channel":"Unknown"}]}]}\n')

</script>

<template>
  <div class="container">
    <div class="col-1">
      <div class="filters">
        <h3>فیلتر</h3>
        <div class="title">
          <h4>ساعت پرواز</h4>
          <hr />
        </div>
        <div class="section">
          <div class="item">
            <input type="checkbox" />
            <label>صبح زود</label>
          </div>
          <div class="item">
            <input type="checkbox" />
            <label>صبح</label>
          </div>
          <div class="item">
            <input type="checkbox" />
            <label>ظهر</label>
          </div>
          <div class="item">
            <input type="checkbox" />
            <label>بعد از ظهر</label>
          </div>
          <div class="item">
            <input type="checkbox" />
            <label>عصر</label>
          </div>
          <div class="item">
            <input type="checkbox" />
            <label>شب</label>
          </div>
        </div>
        <div class="title">
          <h4>تعداد توقف</h4>
          <hr />
        </div>
        <div class="section">
          <div class="item">
            <input type="checkbox" />
            <label>توقف مستقیم</label>
          </div>
          <div class="item">
            <input type="checkbox" />
            <label>یک توقف</label>
          </div>
        </div>
        <div class="title">
          <h4>ایرلاین ها</h4>
          <hr />
        </div>
        <div class="section">
          <div class="item">
            <input type="checkbox" />
            <label>ایرلاین شماره 1</label>
          </div>
          <div class="item">
            <input type="checkbox" />
            <label>ایرلاین شماره 2</label>
          </div>
        </div>
      </div>

      <div class="ads">
        <div class="item">
          <img
            src="https://cdn.kaprila.com/image/22/bdf6b25d-9b16-4d57-ba20-fd6d757f710f.jpg"
          />
        </div>
        <div class="item">
          <img
            src="https://cdn.kaprila.com/image/22/6a2fc97a-6f51-4801-979b-ba2b0dcc2da6.jpg"
          />
        </div>
        <div class="item">
          <img
            src="https://cdn.kaprila.com/image/22/690cbce7-14ed-44bd-85c2-16bd4288089c.jpg"
          />
        </div>
      </div>
    </div>
    <div class="lg:col-span-4 sm:col-span-8 md:col-span-8 col-span-8">
      <LinerDate :data="data" />
      <div class="bg-sky-100 rounded-lg my-4 p-5 flex gap-2 items-center">
        <h3 class="font-semibold text-xl text-slate-600">مرتب سازی</h3>
        <div class="flex flex-1 items-center justify-end text-slate-600">
          <span
            class="cursor-pointer border-2 border-primary rounded-lg bg-slate-100 text-primary px-6 py-2"
            >گران ترین</span
          >
          <span class="cursor-pointer px-6 py-2">ارزان ترین</span>
          <span class="cursor-pointer px-6 py-2">دیر ترین</span>
          <span class="cursor-pointer px-6 py-2">زود ترین</span>
        </div>
      </div>
      <!-- <ResultCard
        v-for="(item, i) in res"
        :key="i"
        :title="item.title"
        :desc="item.desc"
        :score="item.score"
        :pic="item.pic"
        :city="item.city"
        :time="item.time"
        :price="item.price"
        :link="item.link"
      /> -->
      <div class="p-4 bg-sky-100 rounded-md flex flex-col gap-4">
       <AirLinesCard v-for="(item,i) in airdata.tickets" :key="i" :object="item"/>
      </div>
    </div>
    <Advertising />
  </div>
</template>

<style scoped lang="scss">
.container {
  @apply grid grid-cols-8 gap-4;

  .col-1 {
    @apply lg:col-span-2 w-full lg:inline-block min-h-screen md:hidden sm:hidden hidden;

    .filters {
      @apply bg-sky-50 p-6 shadow-md rounded-md shadow-slate-200/30;

      h3 {
        @apply text-2xl font-semibold mb-8;
      }

      .title {
        @apply flex items-center gap-4;

        h4 {
          @apply text-xl font-semibold;
        }

        hr {
          @apply flex-1 border-slate-400;
        }
      }

      .section {
        @apply flex flex-col gap-2 my-6;

        .item {
          @apply flex items-center gap-2;
        }
      }
    }
    .ads {
      @apply flex flex-col gap-4 mt-4;

      .item {
        @apply w-full bg-sky-100 p-2 text-center rounded-xl;

        img {
          @apply rounded shadow-md;
        }
      }
    }
  }
}
</style>
