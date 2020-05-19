import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { firestorePlugin } from "vuefire";
import i18n from "./i18n";

//Firebase
require("./firebaseConf.js");
Vue.use(firestorePlugin);

Vue.config.productionTip = false;

new Vue({
  router,
  i18n,
  render: h => h(App)
}).$mount("#app");
