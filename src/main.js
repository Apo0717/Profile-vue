import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

//CSS
import "./assets/CSS/app.sass";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
