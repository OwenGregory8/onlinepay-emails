import Vue from "vue";
import App from "./App.vue";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import axios from "axios";

axios.defaults.headers.common["X-Postmark-Server-Token"] =
  "47103471-65e8-4161-a828-2d7d159672ba"; // for all requests

const opts = {
  icons: {
    iconfont: "mdi"
  }
};
Vue.use(Vuetify);

new Vue({
  vuetify: new Vuetify(opts),
  axios,
  render: (h) => h(App)
}).$mount("#app");
