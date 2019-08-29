import Vue from "vue";
import VueI18N from "vue-i18n";
import fooEn from "@/locales/en/foo";
import fooTh from "@/locales/th/foo";

Vue.use(VueI18N);

const messages = {
  en: {
    foo: fooEn
  },
  th: {
    foo: fooTh
  }
};

const I18N = new VueI18N({
  locale: "en",
  messages: messages
});

export default I18N;
