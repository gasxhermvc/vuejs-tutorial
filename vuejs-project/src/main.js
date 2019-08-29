import Vue from "vue";
import { Plugin, Fragment } from "vue-fragment";

import App from "@/App.vue";
import router from "@/router";
import I18N from "@/vue-i18n";

Vue.config.productionTip = false;
Vue.use(Plugin);

//Global
Vue.component("fragment", Fragment);

new Vue({
  render: h => h(App),
  router: router,
  i18n: I18N
}).$mount("#app");
