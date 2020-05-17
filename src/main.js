import Vue from "vue";
import App from "./App.vue";
import router from "./router";

//Firebase
import * as firebase from "firebase/app";
import "firebase/analytics";
import "firebase/auth";
import "firebase/firestore";

Vue.config.productionTip = false;

const firebaseConfig = {
  apiKey: "AIzaSyBxXMn1iqh-6oMeui-Sz-SYJDW-QwPcD6Y",
  authDomain: "dsa-ein-online-jahrbuch.firebaseapp.com",
  databaseURL: "https://dsa-ein-online-jahrbuch.firebaseio.com",
  projectId: "dsa-ein-online-jahrbuch",
  storageBucket: "dsa-ein-online-jahrbuch.appspot.com",
  messagingSenderId: "994690131485",
  appId: "1:994690131485:web:356d14347802ea5b4688f4",
  measurementId: "G-YNXSQTEZKX"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();
export const auth = firebase.auth();

new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
