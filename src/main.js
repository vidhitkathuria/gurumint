import { createApp } from "vue";
import router from "./router";
import store from "./store";
import Vue from "vue";
import App from "./App.vue";
import firebase from "firebase";
import "firebase/firestore";
// import { firestorePlugin } from "vuefire";

// Vue.config.productionTip = false;
// Vue.use(firestorePlugin);
// firebase.initializeApp(firebaseConfig);
// export const db = firebase.firestore();
createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
