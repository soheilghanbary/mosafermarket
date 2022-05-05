import { createApp } from "vue";
import { createPinia } from "pinia";
import { createI18n } from "vue-i18n";
import "@/sass/app.scss";
import App from "./App.vue";
import router from "./router";
import en from "@/locales/en.json";
import fa from "@/locales/fa.json";
import ab from "@/locales/ab.json";
const messages = { en, fa , ab };
const i18n = createI18n({
  locale: "fa",
  fallbackLocale: ['en','ab'],
  messages,
});
const app = createApp(App);
app.use(i18n);
app.use(router);
app.use(createPinia());

app.mount("#app");
